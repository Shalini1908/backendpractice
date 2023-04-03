const mongoose = require("mongoose")

const mediumSchema = ({

medium : String

})


const MediumModel = mongoose.model("medium",mediumSchema)

module.exports={

    MediumModel
}