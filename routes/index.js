var express = require('express');
var router = express.Router();
const users = require('../models/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/allusers',(req,res)=>{
  users.find({},function (err,result){
      if(err)
        throw err;
      res.render('allUsers.ejs',{
          name:"All Users",
        Users:result
      })
      }
  )
})
router.post('/addUser',(req,res)=>{
    const obj = new users();
    obj.FullName = req.body.name;
    obj.Location = req.body.location;
    obj.save()
    res.redirect('/')
})

router.post('/searchUser',(req,res)=>{
    const query = req.body.search;
    users.find({$or:
            [
                {
                    FullName:query,
                },
                {
                    Location:query
                }
            ]
    },function (err,result){
        if(err)
            throw err;
        res.render('allUsers.ejs',{
            name:"Search Query",
            Users:result
        })
    })
})

module.exports = router;
