# ShortGit
Git shortcuts to make life easier; by *VoidCanvas*.

---

>`$ npm install -g shortgit`

## Shortcuts

Shortcut | Actual query
-|-
g | git
gs | git status
ga | git add .
ga path/to/file | git add path/to/file
gc "commit message" | git commit -m "commit message"
gp | git push origin currentBranch
gp remote branch| git push remote branch
gp arguments | git push arguments
gb | git branch
**gb --desc "put branch description"** | **put branch description**
**gb --desc** | **list of branches with description**
gd | git diff
gl | git log
gco filePath| git checkout filePath
gco branchName | git checkout branchName
gcl repo | git clone repo
gpl | git pull origin currentBranch
gpl branch | git pull origin branch
gplr | git pull --rebase origin currentBranch
**gpr** | **raise a pull request from current branch**
**gpr branchName** | **raise pull request from current branch to branchName branch**


## Extra features

`ShortGit` is not only for just shortcuts of current git; but it also provides some additional features.

### Branch description
We often create branch, named same as the jira (or any other project management tool) ticket number. And whenever we work with multiple branches of such kind; we forget which branch denotes what.
To solve that *ShortGit* provides a `--desc` flag to set and view descriptions of a branch (they are local descriptions and never pushed to actual repo).

	gb --desc "This is a description for current branch"

The above command helps to set a description against current branch. And the command below helps to list the branches with corresponding descriptions.

	gb --desc

	//output 
	my-branch  ->  This is my branch which I created.
	fun-branch  ->  This is all about fun
	* master  ->  This is our very own master
	
### Raise pull request (merge request)
Often, while raising pull requests, we run complicated commands or we do that from the browser, after navigating through multiple pages. To simplify that ShortGit provides `gpr`. 

	gpr
	gpr branchName
	
Running this command will take you to the pull request page in your browser. You can also provide the branch name, if we want to raise current branch's pull request to non-master branch.
