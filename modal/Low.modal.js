const mongoose = require("mongoose")

const lowSchema = ({

low:String   

})

const LowModel = mongoose.model("low",lowSchema)

module.exports={
    LowModel
}