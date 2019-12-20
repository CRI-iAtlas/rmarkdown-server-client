# RMarkdown-Server Client

WARNING: This is a proof of concept only. It is not ready for production. Currently the client is hard-coded for a set of RMarkdown files, and the parameters are hard-coded.

The RMarkdown-Server renders and serves RMarkdown files on demand. This demo-client lets you select which RMarkdown file you want to see and, for some of them, which parameters you'd like to pass to the server for re-rendering the RMarkdown.

## Install

First, make sure you have the rmarkdown server configured and running: https://github.com/CRI-iAtlas/rmarkdown-server.

Then, make sure you have a current version of [NodeJS](https://nodejs.org/en/download/) installed. Git-clone this repository, cd into the folder and then run:

```shell
npm install
```

## Start Client

Run:

```shell
npm start
```

and it should open: http://localhost:3000
