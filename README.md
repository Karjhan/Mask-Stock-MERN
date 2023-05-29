# Mask Stock

## Description

Congratulations!
Your developer business has a new client, one of the largest environmentally friendly reusable FFP2/KN95 mask supplier in Europe.
Their company wants to create a new B2B website for European hospitals to make the order and delivery easier.
Their stock is refilled on the first day of every month with 10.000 new masks.
Your new client contracted with 10 hospitals and every hospitals have a dedicated person who is responsible to place the orders.
List of the hospitals:
- Pécsi Irgalmasrendi Kórház, Pécs (Hungary)
- Miskolci Semmelweis Ignác Egészségügyi Központ és Egyetemi Oktatókórház, Miskolc (Hungary)
- Szent Pantaleon Kórház Kht., Dunaújváros (Hungary)
- Markhot Ferenc Oktatókórház és Rendelőintézet, Eger (Hungary)
- Fővárosi Önkormányzat Heim Pál Gyermekkórház, Budapest (Hungary)
- The Helios Hospital Berlin-Buch, Berlin (Germany)
- The University Hospital Duesseldorf, Duesseldorf (Germany)
- The University Hospital of Ludwig Maximilian University of Munich , Munich (Germany)
- Rigas Austrumu Kliniskas Universitates, Riga (Latvia)
- Karolinska University Hospital, Stockholm (Swened)

You have to create a web application where the hospitals' employee can login to their account and order new amount of masks.
The hospitals paying for the order with bank transfer 15 days due date.
The application should contain the following features: Automatically updated stock, order form, login and registration page, order history.
The application have to care about the invoicing as well.

## Tools and technologies learned

- recap React JS, Node JS, Express JS
- use MongooseJS
- store data with mongoDB
- connect to an API on the server side (fetch GET/POST)

## Installation

Use Node Package Manager [NPM](https://www.npmjs.com/) to install the required packages on the frontend and backend.

### For frontend
```bash
cd front-end
npm i
```

### For backend
```bash
cd back-end
npm i
```

In adition to that, the following data is required for the application to function correctly and it can be required from any of the original developers.
Send a request to a contact info of one of the developers, asking for the following fields:
- PORT
- ATLAS_URI
- SECRET
- NODEMAILER_SERVICE
- NODEMAILER_HOST
- USER
- PASS
- ACCESS_TOKEN_SECRET
- REFRESH_TOKEN_SECRET
- BASE_URL

### After obtaining the required information 

Go to backend and create a new .env file
```bash
cd back-end
touch .env
```
In that new .env file paste every field in the following format:
```bash
PORT="Port_you_obtained"
ATLAS_URI="Atlas_uri_you_obtained"
etc.
```

## Starting Commands
To start the backend server, from the original/root directory, go to backend in a terminal and type "npm start"
```bash
cd back-end
npm start
```
To start the frontend, from the original/root directory, go to frontend in a terminal and type "npm run dev"
```bash
cd front-end
npm run dev 
```

## Visuals

### Register Form page
![Screenshot 2023-05-22 214212](https://github.com/CodecoolGlobal/mask-stock-javascript-claudiumihait/assets/67586606/455c9c0f-1253-46f7-9de5-77ee97b6c502)
### Login Form page
![Screenshot 2023-05-22 214158](https://github.com/CodecoolGlobal/mask-stock-javascript-claudiumihait/assets/67586606/5d6a30f3-a1b0-4f72-9d55-92437fbc3e6d)
### Home page after login with user account
![Screenshot 2023-05-22 214140](https://github.com/CodecoolGlobal/mask-stock-javascript-claudiumihait/assets/67586606/58e81284-8865-4862-888b-f7d1fbbf1c89)
### Medical Equipment Order page
![Screenshot 2023-05-22 214121](https://github.com/CodecoolGlobal/mask-stock-javascript-claudiumihait/assets/67586606/fa48f016-87c8-42f1-8103-5c900e4ffaae)
### Invoice after downloading it
![Screenshot 2023-05-22 214617](https://github.com/CodecoolGlobal/mask-stock-javascript-claudiumihait/assets/67586606/0e69f566-a15d-4cca-81c0-cac843d120db)
