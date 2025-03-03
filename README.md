## Project Scope

This project is my code for a piano lesson appointment scheduler. It uses NextJS with Typescript, Prisma, ShadCN, Tailwind, and a postgres database built in docker. It is best to use the docker compose file that is included to create all of the necessary things to run this app on 1 VPS that will be hosted at [https://janesmusicstudio.com](janesmusicstudio.com).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on VPS

We will be deploying this self contained app on a public VPS and will integrate automatic GitHub webhooks to update the code when I save and commit the changes to GitHub. 
