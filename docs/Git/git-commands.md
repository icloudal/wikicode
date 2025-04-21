

## <span style="color: white; ">:octicons-git-pull-request-draft-16:</span> Git Configuration

```powershell
git config --global user.name "your name"
git config --global user.email "your.email@example.com"
```


## <span style="color: white; ">:octicons-repo-clone-16:</span> Initialize or Clone a Repository

```powershell
git init
git clone <repository-url>
```



## <span style="color: white; ">:material-list-status:</span> Check Status and Add Changes

```powershell
git status
git add .
git add <file>
git restore <file>
git rm --cached <file>
```


## <span style="color: white; ">:material-content-save:</span> Commit Changes

```powershell
git commit -m "Your commit message"
git commit -am "Commit message with auto add of tracked files"
```


## <span style="color: white; ">:octicons-git-pull-request-draft-16:</span> Branch Management
```powershell
git branch
git branch <new-branch>
git checkout -b <new-branch>
git switch <branch-name>
git merge <branch>
git branch -d <branch>
```
## <span style="color: white; ">:octicons-repo-push-16:</span> Push / Pull / Fetch


```powershell
git remote add origin <remote-url>
git push origin <branch-name>
git pull
git fetch
```

## <span style="color: white; ">:octicons-history-16:</span> View History and Info
```powershell
git log
git show
```
