const exporess = require("express")
const router = exporess.Router()
const{sendEmail}= require("../controller/contactUs")


// router
router.post("/contact", sendEmail)

module.exports = router