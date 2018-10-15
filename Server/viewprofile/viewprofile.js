const express =require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const db = require('../db');
// const images = require('../images');



var connection = db.getPool();

router.get('/search',(req,res)=>{
    var query = "SELECT * FROM db_cutecut.tb_user where tb_user.user_id='"+req.query.user_id+"'";
    connection.query("SELECT * FROM db_cutecut.tb_user where tb_user.user_id='"+req.query.user_id+"'",function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
            console.log(query);
        }else{
            console.log('Successfully query proceded.');
            console.log(rows);
            res.send(rows);
            
        }
    });
    // res.sendFile(path.join(__dirname + '/mathu.jpg'));
});
router.get('/gallery',(req,res)=>{
    var query = "SELECT * FROM db_cutecut.tb_gallery where tb_gallery.user_id='"+req.query.user_id+"'";
    connection.query("SELECT * FROM db_cutecut.tb_gallery where tb_gallery.user_id='"+req.query.user_id+"';",function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
            console.log(query);
        }else{
            console.log('Successfully query proceded.');
            console.log(rows);
            res.send(rows);
        }
    });
});
// router.get('/profilepicture',(req,res)-=>{
    
// });

module.exports = router;