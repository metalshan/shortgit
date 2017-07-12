# ShortGit
An npm package to provide you with some git shortcuts to make life less painful

---

>`$ npm install -g shortgit`

## Shortcuts

Shortcut | Actual query
-|-
g | git
gs | git status
ga | git add .
ga filePath | git add filePath
gc "commit message" | git commit -m "commit message"
gp | git push origin currentBranch
gp branch1:branch2 | git push origin branch1:branch2
gp remote branch1:branch2 | git push remote branch1:branch2
gb | git branch
gd | git diff
gl | git log
gco filePath| git checkout filePath
gco branchName | git checkout branchName
gcl repo | git clone repo
gpl | git pull origin currentBranch
gpl branch | git pull origin branch
