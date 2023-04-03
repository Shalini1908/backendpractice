const mongoose = require("mongoose")

const majorSchema =({

major:String    

})

const MajorModel = mongoose.model("major",majorSchema)

module.exports={

MajorModel    
}