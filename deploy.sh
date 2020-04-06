#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fly-bue/flyBlog.git master:gh-pages

git remote add origin https://github.com/fly-bue/flyBlog.git

// 拉取远程仓库的文件
git pull --rebase origin master

# 同步更新代码
git push -u origin master

cd -