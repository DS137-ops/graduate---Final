const authmodel = require('../model/auth.model')
const billmodel = require('../model/bill.model')
const router = require('../routes/reminders.route');


exports.PostReminder = (req,res,next)=>{
    authmodel.PostDataReminder(req.body.RemVal , req.body.RemDate , req.session.userid).then((RemResult)=>{
      res.redirect('/')
    })
}



