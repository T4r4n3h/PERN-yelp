
## BACK END EXPRESS SET UP
1. mkdir project folder
2. cd inside the proj folder and mkdir server 
3. cd into server folder
4. npm init -y --> this is to 
5. npm install express
5.5 npm install nodemon
6. touch server.js
7. on server.js 
    1. import express
    2. specify what port to listen for
    ```js
    const express =require('express');
    const app = express();

    const port = 3005
    app.listen(port,()=>{ 
    console.log (`server is up and listening on port ${port}`);
    });
    ```
8. install dotenv for variable environment   npm install dotenv
once this is done we can identify which port here  and change the above code to this:

```js
const port = process.env.PORT || 3001
app.listen(port,()=>{ 
    console.log (`server is up and listening on port ${port}`);
});
```
9. we can change the status code within express using the folloing code:i used 4998 just for laugh:
```js
app.get('/restaurants', (req, res) => {
    console.log('we are trying to get all restaurants');
    res.status(4998).json({
        status: 'success',
        restaurants:"mcdonalls"
    }) 
})
```
10. Middleware
*should be on top and 

    1. MORGAN : it is a logger third party middle ware which just  loggs a specific thing and you can find out more about it on morgan documentation.

npm i morgan
    2. Express.json is a middleware that comes with express.allows to send data to the client takes the info from the body and attaches it to the body object

11. connecting to postgres
 npm install pg

## FRONT END REACT SET UP
1. move to client directory
2. npx install create-react-app client
3.