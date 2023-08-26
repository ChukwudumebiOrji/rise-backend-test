# rise-backend-test

## Database

Create `oasisdebts` database in postgres. Execute oasisdebts_db_schema.sql using pgAdmin query tool to create schema, tables and default data.

## Node.js

Node.js version 18+ is required to run this app

## Configuration

Create .env file with sample .env.example file.

## Update database with new changes

`npm run typeorm:cli -- migration:run -d ./src/common/dataSource.ts`

## Start server

Debug mode: `npm install & npm run debug`  
Production: `npm install & npm build & npm start`

## API Authentication

For API authentication set authorization header in this format: `Authorization Bearer <token>`.  
The token is obtained from /v1/user/login API response.

## Docker

Build docker image `docker build . -t oasisdebts-backend`  
Start docker container `docker run -d --rm --name oasisdebts-backend -p 3001:3000 oasisdebts-backend`

## Typeorm migrations

### Create migration file

`npm run typeorm:cli -- migration:create ./src/migrations/debtors_add_amount_date_columns`

### Generate migration file

`npm run typeorm:cli -- migration:generate  -d ./src/common/dataSource.ts ./src/migrations/debtors_add_amount_date_columns`

### Run migration

`npm run typeorm:cli -- migration:run -d ./src/common/dataSource.ts`
