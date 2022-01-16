require('dotenv').config();
const express = require('express');
const cors = require('cors')
const db = require('./db')
const morgan = require('morgan');


const app = express();
//middleware
app.use(cors());
app.use(express.json());



//Routes
//ALL Restaurants
app.get('/api/v1/restaurants', async(req, res) => {

    try{
        const results = await db.query('SELECT * FROM restaurants');
        
        console.log('we are trying to get all restaurants', results);
        res.json({
            status: 'success',
            data:{
                restaurants:["mcdonalls", 'wendys','pizza hut', 'the keg'],
            },
        });

    }catch(err){
        console.log(err)
    }
});
//GET One Restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    try{

        console.log(req.params.id);
        const results = await db.query('SELECT * FROM restaurants WHERE id =$1',[req.params.id])
        console.log(results.rows[0])
        res.status(200).json({
            status: 'success',
            data:{ 
                restaurant:results.rows[0],
            }
        });
    }catch(err){
        console.log(err)
    }
});

//Create a restuarant
app.post('/api/v1/restaurants', async (req, res) => {
    console.log('this is a req.body:', req.body)
    try {
        const results = await db.query(
            'INSERT INTO restaurants (name, location, price_range) values ($1,$2,$3) returning *',[req.body.name, req.body.location, req.body.price_range]);
            console.log (results)
            res.status(201).json({
                status: 'success',
                data:{ 
                    restaurant: results.row[0],
                }
            })
        } catch (err) {
            console.log(err)
            
        }
        
        
    });
    
    //UPdate restuarant
    app.put('/api/v1/restaurants/:id',async (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        try{
            const results = await db.query('UPDATE restaurants SET name = $1,location =$2, price_range = $3 WHERE id = $4 returning *',[req.body.name, req.body.location, req.body.price_range, req.params.id]);
            
            console.log(results)
            res.status(200).json({
                status: 'success',
                data:{ 
                    restaurant:results.row[0],
                }
            })
        }catch(err){
            
            console.log(err)
        }
    });
    // DELETE
    app.delete('/api/v1/restaurants/:id', async (req,res)=>{
        
        try{
            const results = await db.query('DELETE FROM restaurants WHERE id =$1', [req.params.id])
        }catch(err){
            console.log(err)
            res.status(204).json({
                status: 'success',
                
            })

        }
});





const port = process.env.PORT || 3001;  
app.listen(port,()=>{ 
    console.log (`Server is Up and is running on ${port}`);
});