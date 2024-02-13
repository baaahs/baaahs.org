#!/bin/bash

# Change the current working directory to one level above the directory this script is contained in.
cd "$(dirname "$0")/.." || exit

# Function to print colored error message and exit
error_exit()
{
    printf "🚨 \033[31mERROR:\033[0m %s\n" "${1:-'Unknown Error'}" # 1>&2
    exit 1
}

green() {
  echo -e "\033[32m${1}\033[0m"
}

# Variables for branch names
deploy_branches=("deploy-dev" "deploy-staging" "deploy-prod")

# Check if you are on main branch and if local copy is in sync with the origin server
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current_branch" != "main" ]]; then
    error_exit "You are not on the 'main' branch."
fi

git fetch
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})
if [[ "$LOCAL" != "$REMOTE" ]]; then
    error_exit "Your branch is not in sync with the origin"
fi

# Perform operations on each of the deploy branches
for branch in "${deploy_branches[@]}"
do
    printf "\nBranch 🌴 ${branch}\n"

    green "Pausing for 5s so github doesn't get mad..."
    sleep 5

    green "git checkout"
    git checkout "$branch" || error_exit "Failed to checkout $branch"

    green "git fetch"
    git fetch
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    if [[ "$LOCAL" != "$REMOTE" ]]; then
        error_exit "Your $branch is not up-to-date with the origin"
    fi

    green "Check for un-merged commits using rev-list"
    if git rev-list --right-only --count main.."$branch" | grep -q '^[1-9][0-9]*$'; then
        error_exit "$branch contains commits that are not on the 'main' branch"
    fi

    green "Merging main into this branch"
    git merge main || error_exit "Failed to merge 'main' into $branch"

    green "Pushing to $branch"
    git push origin "$branch" || error_exit "Failed to push $branch to the origin"
done

green "Switching back to main"
git checkout main

printf "\n\n\tAround the 🌎 push completed.\n\n"
