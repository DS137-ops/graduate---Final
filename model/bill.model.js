const mongoose = require('mongoose')
var uri = "mongodb://localhost:27017/bills",
globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0"
    bcrypt = require('bcrypt');
    const billSchema = new mongoose.Schema({
        name:String,
        value:Number,
        brand:{
            type:String,
            default:null,
        },
        date:String,
        photo:{
            type:String,
            default:null
        },
        userid:String,
        billtype:{
            type:String,
            default:null
        },
        
    })
    var billss = mongoose.model('bills', billSchema)
    exports.getMinUsers = (id,type,address)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({ userid: { $in: id } ,billtype:type })
            }).then((usr1)=>{
                mongoose.disconnect()
                resolve(usr1)
            }).catch((err)=>{
                console.log(err)
            })
        })
    }
    exports.addelectnewbill = (name,value,date,photo,userid) =>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                    let newbook = new billss({
                        name:name,
                        value:value,
                        date:date,
                        photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
                        userid:userid,
                        billtype:"elect"
                    })
                    return newbook.save()
                
            }).then((newbilll)=>{
                
                mongoose.disconnect()
                resolve(newbilll)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }

    exports.addelectnewbillForApi = (name,value,date,photo,userid) =>{
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
                
            }).then((newbilll)=>{
                
                mongoose.disconnect()
                resolve(newbilll)
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
    exports.getfoodsdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
               return  billss.find({userid:id,billtype:"food"})
            }).then((bills)=>{
                console.log(bills)
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    exports.addfoodnewbill = (name,value,date,photo,id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
               let newFood = new billss({
                name:name,
                value:value,
                date:date,
                photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
                userid:id,
                billtype:"food"
               })
               return newFood.save()
            }).then(()=>{
                mongoose.disconnect()
                resolve("added")
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }
    exports.getclothesdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"clothes"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    
    exports.addclothesnewbill = (name,value,brand,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                let newbook = new billss({
                    
                    name:name,
                    value:value,
                    brand:brand,
                    date:date,
                    photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
                    userid:userid,
                    billtype:"clothes"
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

    exports.addclothesnewbillForApi = (name,value , brand ,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                console.log(1)
                let newBook = new billss({
                    name:name,
                    value:value,
                    brand:brand,
                    date:date,
                    photo:photo,
                    userid:userid,
                    billtype:'clothes'
                })
                return newBook.save()
            }).then(()=>{
                mongoose.disconnect()
                resolve('AC')
            }).catch((err)=>{
                mongoose.disconnect()
                reject('AC '+ err)
            })
        })
    }
    exports.addwaternewbill = (name,value,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                let newbook = new billss({
                    
                    name:name,
                    value:value,
                    date:date,
                    photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
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

    exports.addwaternewbillForApi = (name,value,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
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
                photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
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

exports.addphonenewbillForApi = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbill = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"phone"
            })
            return newbill.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.addothernewbillForApi = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbill = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"other"
            })
            return newbill.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}



exports.addfoodnewbillForApi = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbill = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"food"
            })
            return newbill.save()
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
exports.getOthersdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"other"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.addOtherBill = (name,value,date,photo,userid)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbill = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
                userid:userid,
                billtype:"other"
            })
            return newbill.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getphonesdataForApi = (id)=>{
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
                photo:'https://graduate-final.onrender.com/files/billImages/uploads/'+photo,
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
exports.addnetnewbillForApi = (name,value,date,photo,userid) =>{
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
exports.getNetsdataForApi = (id)=>{
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
exports.getClothesdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"clothes"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getFoodsdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"food"})
        }).then((bills)=>{
            console.log(bills)
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
           return billss.find({_id:id , billtype:"net"})
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


exports.getelectsdataForApi = (id)=>{
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

exports.getwatersdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id, billtype:"water"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.deleteElectBill = (ElectId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ElectId})
        }).then((resElect)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteClothesBill = (ClothesId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ClothesId})
        }).then((resClothes)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteElectBillForApi = (ElectId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ElectId})
        }).then((resElect)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteWaterBill = (WaterId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:WaterId})
        }).then((resWater)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteWaterBillForApi = (WaterId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:WaterId})
        }).then((resWater)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deletePhoneBill = (PhoneId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:PhoneId})
        }).then((resPhone)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deletePhoneBillForApi = (PhoneId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:PhoneId})
        }).then((resPhone)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteNetBill = (NetId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:NetId})
        }).then((resNet)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteOtherBill = (OtherId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:OtherId})
        }).then((resNet)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteNetBillForApi = (NetId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:NetId})
        }).then((resNet)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

