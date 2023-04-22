# Logto + SvelteKit Examle

This is an example [SvelteKit](https://kit.svelte.dev) project to demonstate how to perform authentication with [Logto](https://logto.io).

> Caveat -> The library being used (@cntr/sveltekit) is in alpha stage right now and is something that just gets the job done. Please use it at your own risk. Author is not responsible for anything.

## Requirements
1. NPM Package - `@cntr/sveltekit` 
    - NPM Link - https://www.npmjs.com/package/@cntr/sveltekit
    - GitHub Repo - https://github.com/cheqd/logto-js-sdks/tree/sveltekit-sdk/packages/sveltekit
2. Logto Application setup
    Assuming you already have an instance of Logto deployed, you'll need to create a `SPA Application` inside Logto and use the `App ID` and `Deployment URL` from it.
    - How to deploy Logto - [Local development insance](https://docs.logto.io/docs/tutorials/get-started/#local) or [Production deployment](https://docs.logto.io/docs/recipes/deployment/)

## Getting started with this project

```bash
# Install all the dependencies
pnpm i # or npm i
```
While all the dependencies are being installed, let's populate our .env file with Logto credentials.

```bash
cp env.example .env
```
then replace the values inside it with your Logto credentials.

> `PUBLIC_LOGTO_ENDPOINT` is your Logto deployment url

> `PUBLIC_LOGTO_APP_ID` is your Logto SPA application ID


## Run the application

If the above steps were sucessful, then just run the following command to run the project:

```bash
pnpm dev # or npm run dev
```

