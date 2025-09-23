## Used Commands

- npm init

Prisma:

- [Next set up prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-prismaPostgres)

    - npm install prisma typescript ts-node @types/node --save-dev
    - npx tsc --init
    - npx prisma init ||npx prisma init --db --output ../generated/prisma
    - after creating schema then migrate the schema `npx prisma migrate dev` then auto prisma client will be installl

Express:
    - npm install express -D
    - npm i --save-dev @types/express

    - npm install ts-node-dev -D

    - npm install cors
    - npm i --save-dev @types/cors


Step by Step:

2. 

- 5: First Setup the server:
- 6: Migration of User & Admin Models/Prisma Schema
    - Start the schema by creating user schema.
    - then migrate the schema `npx prisma migrate dev`
- 7: Implementation of User Routes, Controllers, and Services    