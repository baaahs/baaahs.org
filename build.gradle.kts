import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

val kotlinVersion = "1.8.0"
val serializationVersion = "1.4.0"
val ktorVersion = "2.2.2"
val logbackVersion = "1.2.11"
val kotlinWrappersVersion = "1.0.0-pre.451"
val kmongoVersion = "4.8.0"
val spekVersion = "807-let-values-SNAPSHOT"

fun kotlinw(target: String): String =
    "org.jetbrains.kotlin-wrappers:kotlin-$target"

plugins {
    kotlin("multiplatform") version "1.8.0"
    application //to run JVM part
    kotlin("plugin.serialization") version "1.8.0"
}

group = "org.baaahs"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://jitpack.io")
}

kotlin {
    jvm {
        withJava()
    }
    js(IR) {
        browser {
            binaries.executable()
        }
    }
    sourceSets {
        @Suppress("UNUSED_VARIABLE")
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation("com.github.robolectric.spek:spek-dsl:$spekVersion")
                implementation("com.willowtreeapps.assertk:assertk:0.25")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jvmMain by getting {
            dependencies {
                implementation("io.ktor:ktor-serialization:$ktorVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("io.ktor:ktor-client-cio:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-server-auth:$ktorVersion")
                implementation("io.ktor:ktor-server-cors:$ktorVersion")
                implementation("io.ktor:ktor-server-compression:$ktorVersion")
                implementation("io.ktor:ktor-server-core-jvm:$ktorVersion")
                implementation("io.ktor:ktor-server-netty:$ktorVersion")
                implementation("ch.qos.logback:logback-classic:$logbackVersion")
                implementation("org.litote.kmongo:kmongo-coroutine-serialization:$kmongoVersion")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation("io.ktor:ktor-server-test-host:$ktorVersion")
                runtimeOnly("com.github.robolectric.spek:spek-runner-junit5:$spekVersion")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation(
                    project.dependencies.enforcedPlatform("org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom:$kotlinWrappersVersion")
                )
                implementation(kotlinw("react"))
                implementation(kotlinw("react-dom"))
                implementation(kotlinw("react-router-dom"))
                implementation(kotlinw("styled-next"))
                implementation(npm("react-head", "3.4.2", generateExternals = false))
            }
        }
    }
}

application {
    mainClass.set("ServerKt")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=true")
}

tasks.getByName<Tar>("distTar") { dependsOn(":jsJar", ":allMetadataJar") }
tasks.getByName<Zip>("distZip") { dependsOn(":jsJar", ":allMetadataJar") }

// include JS artifacts in any JAR we generate
tasks.getByName<Jar>("jvmJar") {
    val taskName = if (project.hasProperty("isProduction")
        || project.gradle.startParameter.taskNames.contains("installDist")
    ) {
        "jsBrowserProductionWebpack"
    } else {
        "jsBrowserDevelopmentWebpack"
    }
    val webpackTask = tasks.getByName<KotlinWebpack>(taskName)
    dependsOn(webpackTask) // make sure JS gets compiled first

    dependsOn(":jsJar")
//    dependsOn(":jsJar", ":allMetadataJar")

    from(File(webpackTask.destinationDirectory, webpackTask.outputFileName)) // bring output file along into the JAR
}

tasks {
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions {
            jvmTarget = "1.8"
        }
    }

    withType(Test::class) {
        useJUnitPlatform {
            includeEngines.add("spek2")
        }
    }
}

distributions {
    main {
        contents {
            from("$buildDir/libs") {
                rename("${rootProject.name}-jvm", rootProject.name)
                into("lib")
            }
        }
    }
}

// Alias "installDist" as "stage" (for cloud providers)
tasks.create("stage") {
    dependsOn(tasks.getByName("installDist"))
}

tasks.getByName<JavaExec>("run") {
    classpath(tasks.getByName<Jar>("jvmJar")) // so that the JS artifacts generated by `jvmJar` can be found and served
}

hackWorkaroundSinceWebpackTaskIsBrokenInContinuousMode()

// Workaround for https://youtrack.jetbrains.com/issue/KT-55820 aka
// https://youtrack.jetbrains.com/issue/KT-40573:
fun Project.hackWorkaroundSinceWebpackTaskIsBrokenInContinuousMode() {
    tasks.withType(KotlinWebpack::class.java).forEach { webpackTask ->
        // Gradle generates subclasses via bytecode generation magic. Here, we need
        // to grab the superclass to find the private field we want.
        webpackTask::class.java.superclass.declaredFields
            // Note: Isn't ever null for now but checking protects us against future
            // changes to KotlinWebpack
            .firstOrNull { it.name == "isContinuous" }
            ?.let { isContinuousField ->
                isContinuousField.isAccessible = true
                isContinuousField.setBoolean(webpackTask, false)
            }
    }
}