const authmodel = require('../model/auth.model')
exports.getupdatepage = (req,res,next)=>{
   authmodel.gethomedata(req.session.userid).then((userdata)=>{
    res.render('updateprofile',{userdata:userdata})
   })
}
exports.updateprofilepost = (req,res,next)=>{
    authmodel.postupdateprofile(req.body.name,req.body.password , req.body.city , req.body.email , req.session.userid).then((uu)=>{
        
      res.redirect('/bills')
      
       
    })
}