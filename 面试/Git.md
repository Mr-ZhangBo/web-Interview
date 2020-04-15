Git(分布式版本控制系统)
    // 初始化仓库
    git init
    // 配置用户名
    git config --global user.name
    // 配置邮箱
    git config --global user.email
    // 文件添加到暂存区
    git add .
    // 文件添加到仓库
    git commit -m "commit"
    // 列出所有的分支
    git branch -a
    // 显示有变更的文件
    git status
    // 显示当前分支的版本历史
    git log
    // 提交本地代码到远程
    git push origin 分支名
    // 从远程仓库下载到本地
    git pull origin 分支名
    // 创建并切换分支
    git checkout -b 分支名
    // 强制切换分支(删除本地修改)
    git checkout -f 分支名
    git stash
    git stash list
    git stash apply
    git cherry-pick
    // 修改远程仓库
    git remote set-url origin <url>