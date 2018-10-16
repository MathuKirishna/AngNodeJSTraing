const express =require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db');

var connection = db.getPool();

router.get('/city',(req,res)=>{
    connection.query("SELECT * FROM db_cutecut.tb_city",function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
        }else{
            console.log('Successfully query proceded.');
            console.log(rows);
            res.send(rows);
        }
    });
});

router.get('/title',(req,res)=>{
    connection.query("SELECT * FROM db_cutecut.tb_jobtitle",function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
        }else{
            console.log('Successfully query proceded.');
            console.log(rows);
            res.send(rows);
        }
    });
});
router.get('/search',(req,res)=>{
    var query = "SELECT * FROM db_cutecut.tb_user where tb_user.city='"+req.query.city+"'";
    connection.query("SELECT * FROM db_cutecut.tb_user where tb_user.city='"+req.query.city+"'"+ "and tb_user.jobtitle='"+req.query.title+"'",function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
            console.log(query);
        }else{
            console.log('Successfully query proceded.');
            console.log(rows.length);
            
                res.send(rows);
            
            
        }
    });
});

module.exports = router;