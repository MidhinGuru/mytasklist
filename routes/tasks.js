var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://10.240.151.79/mytasklist',['tasks']);

//Get all tasks
router.get('/tasks',function(req,res,next){
    //res.send('TASK API');
    db.tasks.find(function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get single task
router.get('/task/:id',function(req,res,next){
    //res.send('TASK API');
    db.tasks.findOne(req.params.id,function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


module.exports=router;
