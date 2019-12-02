# overviewGallery


### Setup

To start, run
```
npm install
```
To set up database on Windows WSL under username [user], run
```
npm run build:database
npm run build:seed
```
Alternatively, to set up mySQL database before running seeding, run
```
mysql -u [username] -p < ./database/schema.sql
```
To set up server, run
```
npm run dev:react
npm run dev:server
```
