use npm version 16

https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4
部署到github page

ng build --prod --base-href "https://communitygta.github.io/admin-dashboard/"
npx angular-cli-ghpages --dir=www --no-silent
