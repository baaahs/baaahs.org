#!/bin/bash

# Change the current working directory to one level above the directory this script is contained in.
cd "$(dirname "$0")/.." || exit

# Checks if gcloud is installed
if ! command -v gcloud &>/dev/null; then
    printf "[31mgcloud CLI is not installed.\033[0m Please download and install it from the following URL:\n\n\thttps://cloud.google.com/sdk/docs/install\n\n"
    exit
else
    printf "gcloud CLI is installed.\n"
fi

BUCKET_NAME=static.baaahs.org
BUCKET_LOCAL=static

# Checks if gsutil is authenticated and can sync to the bucket
if ! gsutil ls gs://${BUCKET_NAME} &>/dev/null; then
    printf "\033[31mgsutil is not authenticated or can't sync to the bucket\033[0m '%s'. Please ensure you are authenticated and have necessary permissions.\n" "${BUCKET_NAME}"
    exit
else
    printf "gsutil is authenticated and can sync to the bucket '%s'.\n" "${BUCKET_NAME}"
fi

printf "\n\t\033[1;92mThings look good, let's light this candle!\033[0m\n\n"
printf "Note that this rsync is running in push/update only mode and will not delete any files\n"
printf "that already exist in the destination bucket. To delete files, do the rsync manually or\n"
printf "use the web cloud console at https://console.cloud.google.com/storage/browser/static.baaahs.org\n"

# Note the -d option is what would make this delete any files on the other end that are not
# present on the local side. That's probably not what we want as default behavior

gsutil -m rsync -r "./${BUCKET_LOCAL}" gs://${BUCKET_NAME}

# Test for failure of the last command and print a message if it failed
if [ $? -ne 0 ]; then
    printf "\n\033[31mSync failed. Wat waa....\033[0m\n"
fi