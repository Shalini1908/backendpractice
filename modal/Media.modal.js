const mongoose = require("mongoose")

const mediaSchema = ({

media : String

})


const MediaModel = mongoose.model("media",mediaSchema)

module.exports={

    MediaModel
}