var nodemailer = require('nodemailer');
const validation = require("../midleware/validate")


const sendEmail = async (req, res) => {
    try {

        const { error } = await validation(req.body);

        if (error) {
            res.status(500).json({ status: "failed", msg: error.message })

        } else {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rehanpardesi2018@gmail.com',
                    pass: 'agwi lnzh ohqf pykz'
                }
            });

            var mailOptions = {
                from: 'rehanpardesi2018@gmail.com',
                to: "nabibux0782@gmail.com",
                subject: 'Contact Us',
                text:`
                username: ${req.body.username}
                email: ${req.body.email}
                message: ${req.body.message}
            `
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    // console.log(error);
                    res.status(500).json({ status: "failed", msg: "something went wrong" })
                } else {
                    res.status(200).json({ status: "Success", msg: "Message Sent Successfully" })
                }
            });

        }

    } catch (err) {
        // console.log("err is ", err)
        res.status(500).json({ status: "failed", msg: "something went wrong try later" })
    }
}



module.exports = { sendEmail }