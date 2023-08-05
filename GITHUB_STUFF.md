# Github Commands

Commands

## Git commiting

1. Add new files "git add ." (If you added any files)
2. Commit files "git commit -m 'YOUR MESSAGE'"
3. Push changes "git push origin main"

## Git Branches

* git branch new-feature (Creates a branch called new-feature)

* git checkout new-feature (Switch to new-feature branch)

* git checkout -b new-feature (This is for creating and directly switching form the a branch to another branch)

* git branch (To see which branch are you on)

* git status

* git push –u origin branch-name (publishes the branch)

* git push origin new-feature (This will merge the new branch to the Main branch, it will evenually lead to a merge conflict but we will deal with it later)

* git fetch origin (Update remote Repository)
* git pull origin (Gets the new updates from main)

## Git merging and pushing

After working on a branch if you want to merge the branch with the main, you have 2 options, After publishing and commiting your branch you can:

* Option One : Create a pull request it will show you the differences betweem files and you can accept or refuse the pull request (you can do this on the github website)

* Option Two : Directly mergin the two branches. 
1. Check if everything is good "git pull origin your-branch-name"
2. Checkout to main "git checkout main"
3. push to origin "git merge your-branch-name" 

new line