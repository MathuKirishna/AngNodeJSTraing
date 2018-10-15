const express =require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db');


var connection = db.getPool();

router.get('/search',(req,res)=>{
    var Eq = 'Education Qualities';
    var Exp = 'Experience';
    var Rating ='Rating(Out of Five)';
    var Rates = 'Rates (Below)';
    var Distance = 'Distance';

    var query = "SELECT * FROM db_cutecut.tb_user where tb_user.city='"+req.query.city+"'"+ "and tb_user.jobtitle='"+req.query.title+"'";

    if (!(JSON.stringify(Distance) === JSON.stringify(req.query.distance))) {
        query = "SELECT *,(6371 * acos(cos( radians( "+req.query.latitude+" ) ) * cos( radians( tb_user.latitude ) ) * cos(radians( tb_user.longitude ) - radians( "+req.query.longitude+" )) +sin(radians("+req.query.latitude+")) * sin(radians(tb_user.latitude)))) AS distance FROM tb_user HAVING distance < "+req.query.distance+" and tb_user.city='"+req.query.city+"'"+ "and tb_user.jobtitle='"+req.query.title+"'";
    
    }
     

    if (!(JSON.stringify(Eq) === JSON.stringify(req.query.education))) {
        query=query+"and tb_user.educationalQualification='"+req.query.education+"'";
    }
    if (!(JSON.stringify(Exp) === JSON.stringify(req.query.experience))) {
        query=query+"and tb_user.experience='"+req.query.experience+"'";
    }
    if (!(JSON.stringify(Rating) === JSON.stringify(req.query.rating))) {
        query=query+"and tb_user.rating='"+req.query.rating+"'";
    }
    if (!(JSON.stringify(Rates) === JSON.stringify(req.query.rates))) {
        query=query+"and tb_user.rate <="+req.query.rates+"";
    }
    console.log(query)
    
    connection.query(query,function(error,rows,fields){

        if(!!error){
            console.log('Error while proceding query');
            console.log(query);
        }else{
            console.log('Successfully query proceded.');
            //console.log(rows);
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
            res.send('Error')
        }else{
            console.log('Successfully query proceded.');
            console.log(rows);
            res.send(rows);
            
        }
    });
    
});

module.exports = router;