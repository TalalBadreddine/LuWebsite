# Github Commands

Commands

## Git Branches

* git branch new-feature (Creates a branch called new-feature)

* git checkout new-feature (Switch to new-feature branch)

* git checkout -b new-feature (This is for creating and directly switching form the a branch to another branch)

* git branch (To see which branch are you on)

* git status

* git push origin new-feature (This will merge the new branch to the Main branch, it will evenually lead to a merge conflict but we will deal with it later)

* git fetch origin (Update remote Repository)
* git pull origin (Gets the new updates from main)

# Git merging and pushing

After working on a branch if you want to merge the branch with the main, you have 2 options
* Option One : Create a pull request it will show you the differences betweem files and you can accept or refuse the pull request (you can do this in the github website)

* Option Two : Directly mergin the two branches. Step one, checkout to main and use "git merge branch-name", Step Two, Commit merge use "git commit -m 'YOUR MESSAGE'". Step Three, push the Changes use "git push origin"