const Joi = require("joi")

const contactMsgValidate = (data)=>{
    const Schema = Joi.object({
        username : Joi.string().min(3).required("username required"),
        email : Joi.string().email().required("email required"),
        message : Joi.string().min(8).required("message required")
    })
    return Schema.validate(data)
}


module.exports = contactMsgValidate