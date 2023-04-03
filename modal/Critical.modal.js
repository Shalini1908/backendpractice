const mongoose = require("mongoose")

const criticalSchema = ({

critical : String

})

const CriticalModel = mongoose.model("critical",criticalSchema)

module.exports={

    CriticalModel
}