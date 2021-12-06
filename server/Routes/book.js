var express = require('express')
var router = express.Router()
const client= require('../Models/dbs');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
      
       next()
})
//get all review
router.get('/reviews', (req, res) => {
        client.query('select * from bookreview', (err, data)=>{
        if(!err){
        //res(data.rows)
        res.send(data.rows)

        }
        else{
        console.log(err.message);
        res.send(err)
        }
        })
})

//get review by bookid

router.get('/reviews/:isbn', (req, res) => {
      const { isbn }= req.params;
     client.query('select * from bookreview where isbn= $1',[isbn], (err, data)=>{
        if(!err){
        res.send(data.rows)
        }
       else{
        console.log(err.message);
        res.send(err)
        }
      })
})


//add review
router.post('/reviews', (req, res) => {
  const { description }= req.body;
  const { rating }= req.body;
  const { isbn }= req.body;
  client.query('insert into bookreview (description,rating,isbn) values($1,$2,$3)',[description,rating,isbn], (err, data)=>{
   if(!err){
     console.log("data inserted")
   }
   else{
       console.log(err.message);
       res.send(err)
   }
 })
})
//delete reviw

router.delete('/reviews/:id', (req, res) => {
  const { id }= req.params;
   client.query('delete  from bookreview where id= $1',[id], (err, data)=>{
   if(!err){
          res.send('data deletd id no is ');
   }
   else{
       console.log(err.message);
       res.send(err)
        }
    })
})
//edit review

router.put('/reviews/:id', (req, res) => {
  const { id }= req.params;
  const { description } = req.body;
  const { rating } = req.body;
 client.query('update bookreview SET description = $1 , rating= $2 WHERE id= $3',[description,rating,id], (err, data)=>{
   if(!err){
     res.send("updated your reviw")    
   }
   else{
       console.log(err.message);
       res.send(err)
   }
 })
})

// Show all books

router.get('/book', (req, res) => {
    client.query('select * from books', (err, data)=>{
      if(!err){
          res.send(data.rows)
      }
      else{
          console.log(err.message);
          res.send(err)
      }
    })
  })
  
  //post book
  router.post('/AddBook', (req, res) => {
    
    
    const { description }= req.body;
    const { rating }= req.body;
   client.query('insert into books (isbn,title) values($1,$2)',[description,rating,isbn], (err, data)=>{
     if(!err){
       res.send("data inserted")
     }
     else{
         console.log(err.message);
         res.send(err)
     }
   })
  })
module.exports = router

