# [pavoltravnik.arbitrust.org](https://www.pavoltravnik.arbitrust.org/)

Website of arbiter Pavol Travnik. Forked from [Dan Abramov personal blog overreacted.io](https://github.com/gaearon/overreacted.io). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.

## Deploy

```bash
yarn;
yarn build;
ssh pavoltravnik@37.205.14.173 'rm -r public_html/*';

cd public;

tar czf - * | ssh pavoltravnik@37.205.14.173 "cd /home/pavoltravnik/public_html/ && tar xvzf -";
```
