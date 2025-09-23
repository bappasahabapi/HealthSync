## 1.Used Commands

- npm init

Prisma:

- [Next set up prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-prismaPostgres)

    - npm install prisma typescript ts-node @types/node --save-dev
    - npx tsc --init
    - npx prisma init ||npx prisma init --db --output ../generated/prisma
    - after creating schema then migrate the schema `npx prisma migrate dev` then auto prisma client will be installl
    - You may use prisma migrate reset to drop the development database.
All data will be lost.
        - ❯ `npx prisma migrate reset`
    - To open the table in prisma : npx prisma studio

Express:
    - npm install express -D
    - npm i --save-dev @types/express

    - npm install ts-node-dev -D

    - npm install cors
    - npm i --save-dev @types/cors


## 2. Step by Step:

🍟++++++++++ `basic Skeleton mvc` +++++++++++++

🍟`hs-01/project-initiation-analysis`

- 5: First Setup the server:
- 6: Migration of User & Admin Models/Prisma Schema
    - Start the schema by creating user schema.
    - then migrate the schema `npx prisma migrate dev`
- 7: Implementation of User Routes, Controllers, and Services    

🍟` hs-02/user-admin`

After change any model run the migration command
    - `px prisma migrate dev` 

- 8: User & Admin Creation: Part 1
- 9: User & Admin Creation: Part 2
    - Here I have to first make the user and then at the same time I need to make this an admin.
    - thats wsy we need transaction . first data will hit users table and then admin table

🍟 `hs-03/password-hashing`
- 10: Implementation of Password Hashing
    - [bcrypt](https://www.npmjs.com/package/bcrypt) 
    - `npm i bcrypt`
    - `npm i --save-dev @types/bcrypt`

🍟++++++++++`hs-p1:` +++++++++++++
---

- 1: Response Formatting and Exception HandlingRes
    - `npm install http-status-codes` for avoid hardcoding
- 2: Retrieving All Admin Data from the Database
- 3: fImplementing **Search/Filter** Functionality Using searchTerm Query
