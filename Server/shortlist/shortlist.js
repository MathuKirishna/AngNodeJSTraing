const express =require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db');



var connection = db.getPool();

router.get('/getwishlist',(req,res)=>{
    var query = "SELECT * FROM `tb_user` INNER join tb_wishlist on tb_user.user_id=tb_wishlist.employee_id where tb_wishlist.viewer_id='"+req.query.user_id+"'";
    connection.query("SELECT * FROM `tb_user` INNER join tb_wishlist on tb_user.user_id=tb_wishlist.employee_id where tb_wishlist.viewer_id='"+req.query.user_id+"'",function(error,rows,fields){

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
router.get('/deletewishlist',(req,res)=>{
    var query = "DELETE FROM `tb_wishlist` where tb_wishlist.viewer_id='"+req.query.user_id+"' and tb_wishlist.employee_id='"+req.query.employee_id+"'";
    connection.query("DELETE FROM `tb_wishlist` where tb_wishlist.viewer_id='"+req.query.user_id+"' and tb_wishlist.employee_id='"+req.query.employee_id+"'",function(error,rows,fields){

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

router.get('/addtowishlist',(req,res)=>{
    var query = "INSERT IGNORE INTO db_cutecut.tb_wishlist (viewer_id,employee_id) VALUES ('"+req.query.user_id+"','"+req.query.employee_id+"')";
    connection.query("INSERT IGNORE INTO db_cutecut.tb_wishlist (viewer_id,employee_id) VALUES ('"+req.query.user_id+"','"+req.query.employee_id+"')",function(error,rows,fields){

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

module.exports = router;