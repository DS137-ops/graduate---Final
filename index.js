const express = require('express');
const { default: mongoose } = require('mongoose');
const session = require('express-session')

var globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0",
localConnect = "mongodb://localhost:27017/bills"

const MongoStrore = require("connect-mongodb-session")(session)
var Store = new MongoStrore({
    uri:globalconnect,
    collection: "sessions"
})

const app = express();
app.use(session({
    secret: "asdkandlk",
    store: Store,
    resave: true,
    saveUninitialized: true
}))
const path = require('path');

app.use(express.static(path.join(__dirname, 'assests')));
app.use('/files/billImages',express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('views', 'views');
const flash = require('connect-flash')
app.use(flash())
const loginroute = require('./routes/login.route')
const homeroute = require('./routes/home.route')
const registerrouter = require('./routes/register.route')
const aboutrouter = require('./routes/about.route')
const billsrouter = require('./routes/bills.route')
const electRoute = require('./routes/elect.route')
const waterRoute = require('./routes/water.route')
const phoneRoute = require('./routes/phone.route')
const netRoute = require('./routes/net.route')
const clothesRoute = require('./routes/clothes.route')
const foodRoute = require('./routes/food.route')
const OtherRoute = require('./routes/other.route')
const addpadgetRoute = require('./routes/addpaget.route')
const apiRoute = require('./routes/apiRoute.route')
const updateprofileRoute = require('./routes/updateprofile.route')
const tipsRoute = require('./routes/tips.route')
const showReminderRoute = require('./routes/reminders.route')
const specialUserLogin = require('./routes/minning.route')
const specialUserLogin2 = require('./routes/minning2.route')

app.post('/logout', (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})
app.use('/', homeroute)
app.use('/', loginroute)

app.use('/register', registerrouter)
app.use('/about', aboutrouter)
app.use('/bills', billsrouter)
app.use('/elect', electRoute)
app.use('/water', waterRoute)
app.use('/phone', phoneRoute)
app.use('/net', netRoute)
app.use('/clothes', clothesRoute)
app.use("/food" , foodRoute)
app.use('/other', OtherRoute)
app.use('/addelectbill', electRoute)
app.use('/addwaterbill', waterRoute)
app.use('/addphonebill', phoneRoute)
app.use('/addfoodbill' ,foodRoute )
app.use("/addotherbill",OtherRoute)
app.use("/addnetbill", netRoute )
app.use('/addclothesbill', clothesRoute)
app.use("/addPadget", addpadgetRoute)
app.use("/addReminder",showReminderRoute)
app.use("/showbudgetpage",addpadgetRoute)
app.use("/showRemiders",showReminderRoute)
app.use("/api", apiRoute)
app.use("/updateprofile" ,updateprofileRoute)
app.use("/updateProfileInfo" , updateprofileRoute)
app.use("/tips",tipsRoute)
app.use("/loginMinning",specialUserLogin)
app.use("/showminn",specialUserLogin)
app.use("/startminning",specialUserLogin2)
app.use("/startminning2",specialUserLogin2)

//app.use("/minning",minningRoute)
app.listen(7000, () => {
    console.log('server is running')
})