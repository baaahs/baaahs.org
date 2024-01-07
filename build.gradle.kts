import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

val kotlinVersion = "1.8.22"
val serializationVersion = "1.4.0"
val ktorVersion = "2.3.1"
val logbackVersion = "1.2.11"
val kotlinWrappersVersion = "1.0.0-pre.507"
val kmongoVersion = "4.8.0"
val spekVersion = "807-let-values-SNAPSHOT"

fun kotlinw(target: String): String =
    "org.jetbrains.kotlin-wrappers:kotlin-$target"

fun ktor(target: String): String =
    "io.ktor:ktor-$target:$ktorVersion"

plugins {
    kotlin("multiplatform") version "1.8.10"
    application //to run JVM part
    kotlin("plugin.serialization") version "1.8.10"
}

group = "org.baaahs"
version = "1.0-SNAPSHOT"

val noTestDeps = project.hasProperty("noTestDeps") || project.hasProperty("isProduction")

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

            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
    }
    sourceSets {
        @Suppress("UNUSED_VARIABLE")
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation(ktor("client-core"))
                implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val commonTest by getting {
            dependencies {
                if (!noTestDeps) {
                    implementation(kotlin("test-common"))
                    implementation(kotlin("test-annotations-common"))
                    implementation("com.github.robolectric.spek:spek-dsl:$spekVersion")
                    implementation("com.willowtreeapps.assertk:assertk:0.25")
                }
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jvmMain by getting {
            dependencies {
                implementation(ktor("client-core"))
                implementation(ktor("client-cio"))
                implementation(ktor("client-content-negotiation"))
                implementation(ktor("serialization"))
                implementation(ktor("serialization-kotlinx-json"))
                implementation(ktor("server-content-negotiation"))
                implementation(ktor("server-auth"))
                implementation(ktor("server-cors"))
                implementation(ktor("server-compression"))
                implementation(ktor("server-core-jvm"))
                implementation(ktor("server-html-builder-jvm"))
                implementation(ktor("server-netty"))
                implementation(ktor("server-status-pages"))
                implementation("ch.qos.logback:logback-classic:$logbackVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-html-jvm:0.7.2")
                implementation("org.litote.kmongo:kmongo-coroutine-serialization:$kmongoVersion")
                implementation("software.amazon.awssdk:secretsmanager")
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jvmTest by getting {
            dependencies {
                if (!noTestDeps) {
                    implementation(kotlin("test-common"))
                    implementation(kotlin("test-annotations-common"))
                    implementation("io.ktor:ktor-server-test-host:$ktorVersion")
                    runtimeOnly("com.github.robolectric.spek:spek-runner-junit5:$spekVersion")
                }
            }
        }

        @Suppress("UNUSED_VARIABLE")
        val jsMain by getting {
            kotlin.srcDir("src/jsMain/js")

            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation(
                    project.dependencies.enforcedPlatform("org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom:$kotlinWrappersVersion")
                )
                implementation(kotlinw("emotion"))
                implementation(kotlinw("mui"))
                implementation(kotlinw("mui-icons"))
                implementation(kotlinw("react"))
                implementation(kotlinw("react-dom"))
                implementation(kotlinw("react-router-dom"))
                implementation(kotlinw("styled-next"))

                implementation(npm("aos", "^2.3.4", generateExternals = false))
                implementation(npm("react-head", "3.4.2", generateExternals = false))
                implementation(npm("slick-carousel", "^1.8.1", generateExternals = false))

                implementation(devNpm("babel-loader", "9.1.2"))
                implementation(devNpm("@babel/core", "7.21.4"))
                implementation(devNpm("@babel/preset-env", "7.21.4"))
                implementation(devNpm("@babel/preset-react", "7.18.6"))
            }
        }
    }
}

application {
    mainClass.set("org.baaahs.ServerKt")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=true")
}

val webpackTask = run {
    val taskName = if (project.hasProperty("isProduction")
        || project.gradle.startParameter.taskNames.contains("installDist")
    ) {
        "jsBrowserProductionWebpack"
    } else {
        "jsBrowserDevelopmentWebpack"
    }
    tasks.getByName<KotlinWebpack>(taskName)
}

tasks.getByName<ProcessResources>("jvmProcessResources") {
    dependsOn(webpackTask)

    from("docs") { into( "docs") }
//    from("build/developmentExecutable") { include("baaahs-dot-org.js") }
}

//tasks.getByName<Tar>("distTar") { dependsOn(":jsJar", ":allMetadataJar") }
//tasks.getByName<Zip>("distZip") { dependsOn(":jsJar", ":allMetadataJar") }

// include JS artifacts in any JAR we generate
tasks.getByName<Jar>("jvmJar") {
    dependsOn(webpackTask) // make sure JS gets compiled first

    from(File(webpackTask.destinationDirectory, webpackTask.outputFileName)) // bring output file along into the JAR
}

tasks.getByName<JavaExec>("run") {
    classpath(tasks.getByName<Jar>("jvmJar")) // so that the JS artifacts generated by `jvmJar` can be found and served
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

hackWorkaroundSinceWebpackTaskIsBrokenInContinuousMode()
dependencies {
    implementation("io.ktor:ktor-server-core-jvm:2.2.2")
    implementation("io.ktor:ktor-server-host-common-jvm:2.2.2")
    implementation("io.ktor:ktor-server-status-pages-jvm:2.2.2")
    implementation(platform("software.amazon.awssdk:bom:2.15.0"))
}

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