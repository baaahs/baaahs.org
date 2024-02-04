#!/bin/bash
# Move to the parent directory
cd "$(dirname "$0")/.." || exit

green() {
  msg=$1
  echo -e "\033[32m${msg}\033[0m"
}

# Ensure script is on the main branch
branch=$(git symbolic-ref --short -q HEAD)
if [ "$branch" != "main" ]; then
  echo -e "\033[31mYou are not on the 'main' branch.\033[0m"
  exit 1
fi

# Check all changes are committed
if ! git diff --quiet; then
  echo -e "\033[31mAll changes are not committed. Please commit before continue.\033[0m"
  exit 1
fi

# Pull from origin to make sure branches are up-to-date
green "Pulling main to make sure we're up-to-date here..."
if ! git pull origin main; then
  echo -e "\033[31mFailed to pull from origin. Please fix your conflicts.\033[0m"
  exit 1
fi

green "Sleeping for 2s to respect rate limits..."
sleep 2

# Declare an array for all deploy branches
declare -a deploy_branches=("deploy-prod" "deploy-staging" "deploy-dev")

# Iterate over each deploy branch and merge it into the 'main' branch
for branch_name in "${deploy_branches[@]}"; do
 green "Checkout and pull on $branch_name"
 git checkout "$branch_name"
 if ! git pull origin "$branch_name"; then
   echo -e "\033[31mFailed to pull from origin '$branch_name'. Please fix your conflicts.\033[0m"
   exit 1
 fi

 green "Merging that down to main"
 git checkout main
 if ! git merge "$branch_name"; then
   echo -e "\033[31mFailed to merge '$branch_name' into 'main'. Please fix your conflicts.\033[0m"
   exit 1
 fi

 green "Sleeping for 2s to respect rate limits..."
 sleep 2
done

green "Operation completed successfully."