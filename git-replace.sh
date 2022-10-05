#!/bin/bash

git filter-branch --env-filter '
OLD_EMAIL="innocentnishanth@gmail"
CORRECT_NAME="mr-nishanth"
CORRECT_EMAIL="innocentnishanth@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
	export GIT_COMMITTER_NAME="$CORRECT_NAME"
	export GIT_COMMITTER_NAME="$CORRECT_EMAIL"
fi

if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
	export GIT_AUTHOR_NAME="$CORRECT_NAME"
	export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
