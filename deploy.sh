#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.ipyth.com' > CNAME

git init
git add -A
git commit -m 'gh-pages'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/luohu1/luohu1.github.io.git master

cd -