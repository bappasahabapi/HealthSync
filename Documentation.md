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

####   `basic Skeleton mvc` 

Setup project , npm packages, **prisma** , database connection,
create user as admin (MVC) and **hash password**


####   🍟`hs-01/project-initiation-analysis`

- 5: First Setup the server:
- 6: Migration of User & Admin Models/Prisma Schema
    - Start the schema by creating user schema.
    - then migrate the schema `npx prisma migrate dev`
- 7: Implementation of User Routes, Controllers, and Services    

####   🍟` hs-02/user-admin`

After change any model run the migration command
    - `px prisma migrate dev` 

- 8: User & Admin Creation: Part 1
- 9: User & Admin Creation: Part 2
    - Here I have to first make the user and then at the same time I need to make this an admin.
    - thats wsy we need transaction . first data will hit users table and then admin table

####   🍟 `hs-03/password-hashing`
- 10: Implementation of Password Hashing
    - [bcrypt](https://www.npmjs.com/package/bcrypt) 
    - `npm i bcrypt`
    - `npm i --save-dev @types/bcrypt`
---
🍟++++++++++`hs-p1:` +++++++++++++

Implement **Searching**, **filtering** , **data-vaditaion** , **pagination**, **sorting**
in admin section

---

- 1: Response Formatting and Exception HandlingRes
    - `npm install http-status-codes` for avoid hardcoding
- 2: Retrieving All Admin Data from the Database
- 3: fImplementing **Search/Filter** Functionality Using searchTerm Query
- 4: Optimization of Search Code `(admin.services.ts)` file
- 5: Optimization of Search Code refactoring `(admin.services.ts)` file
- 6:Search on specific filed. and implementing filtering
- 7: Selecting Valid Data Fields Using the **pick Function**
    - Enhance the validity of the search . That means it match the exact serach key name
- 8: Applying Pagination to Results

       - **skip =(page-1)* limit** 
       - **perPageDataLimit = limit**
    - Suppose I have 10 data like : 1 2 3 4 5 6 7 88 99 11, and limit = 4
      - then page 1 will show = 1 2 3 4 || skip = (1-1)*4 =0*4 =0
      - then page 2 will show = 5 6 7 88 || skip =(2-2)*4 =1*4=4
      - then page 3 will show = 99 11
- 9: Creating Reusable Functions for Pagination and Sorting
- 10: Developing **Reusable Functions for Prisma Client**Constructor and Pagination Calculation


####   🍟++++++++++`hs-p2/admin-fuctionality` +++++++++++++

 fix metadata, response format, http status code, CRUD of admin, global error hadling(next())

- 1: Enhancing Response with **Metadata**
- 2: Fetching admin data by ID
    -start from service->controller->route
- 3: Updating admin data in the database by ID
- 4: Deleting admin data from the database
    - first delete from admin table using id as pkey
    - then delete from user table using email as fkey
    - Thats why we need transaction as we have dependency
- 5: Incorporating Soft Delete Functionality
- 6: Filtering Data Based on Status
- 7:  Formatting Response Using the sendResponse Function
- 8: Configuring Routes in a File and Employing HTTP Status Codes
    - http-status-codes added
- 9: Implementing Global Error Handler using **next function**
- 10: Managing Not Found Routes


####   🍟++++++++++`hs-p3/admin-token`

Request-validation, Global try-catch, middleware , login, token work

- 1: Reduce `Try-Catch Redundancy`
- 2: Implementing Request Validation Middleware: P-1
- 3: Implementing Request Validation Middleware: P-2 
    - `admin.route` working file: update route part
    -Check validation to req.body data: thats why we need zod package [npm i zod]
    - To handle the validation first install zod
    - then make a zod schema

- 5: Creating User Login Functionality
- 6: Generating Access Tokens for User Login