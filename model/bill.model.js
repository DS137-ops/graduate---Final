const mongoose = require('mongoose')
var uri = "mongodb://localhost:27017/bills",
globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0"
    bcrypt = require('bcrypt');
    const billSchema = new mongoose.Schema({
        name:String,
        value:Number,
        date:String,
        photo:String,
        userid:String,
        billtype:String
    })
    var billss = mongoose.model('bills', billSchema)
    
    exports.addelectnewbill = (name,value,date,photo,userid) =>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                    let newbook = new billss({
                    
                        name:name,
                        value:value,
                        date:date,
                        photo:photo,
                        userid:userid,
                        billtype:"elect"
                    })
                    return newbook.save()
                
            }).then(()=>{
                
                mongoose.disconnect()
                resolve('added')
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }

    exports.getelectsdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"elect"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }

    exports.addwaternewbill = (name,value,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                
            }).then(()=>{
                let newbook = new billss({
                    
                    name:name,
                    value:value,
                    date:date,
                    photo:photo,
                    userid:userid,
                    billtype:"water"
                })
                return newbook.save()
            }).then(()=>{
                mongoose.disconnect()
                resolve('added')
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }

    exports.getwatersdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"water"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }


exports.addphonenewbill = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbook = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"phone"
            })
            return newbook.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getphonesdata = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"phone"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.addnetnewbill = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbook = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"net"
            })
            return newbook.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.getnetsdata = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"net"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getsum = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.find({userid:id , billtype:"net"})
        }).then((user)=>{
            return billss.aggregate([{$match:{pid:{$eq:user.userid}}}, {$group:{_id:'663248a810678f31c83f7970',sum:{$sum:'$value'}}}])
        }).then((calcu)=>{
            mongoose.disconnect()
            console.log(calcu)
            resolve(calcu)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}