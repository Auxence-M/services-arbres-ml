const {onRequest} = require("firebase-functions/v2/https");
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'stmp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'arboml27@gmail.com',
      pass: 'ukotgngprzbxlewb',
    },
});

//export the cloud function called `sendEmail`
exports.sendMail = onRequest((req, res) => {

    console.log('from sendEmail function. The request object is: ',JSON.stringify(req.body));

    //enable CORS using the `cors` express middleware.
    cors(req, res, () => {
        //get contact form data from the req and then assigned it to variables
        const name = req.body.data.name;
        const email = req.body.data.email;
        const phoneNumber = req.body.data.phoneNumber;
        const message = req.body.data.message;

        //config the email message
        const mailOptions = {
            from: "arboml27@gmail.com",
            to: "auxencemedja@gmail.com",
            subject: `Vous avez un nouveau message de ${name} (formulaire de contact)`,
            text: "",
            html: `<p>Détails du message :<br><br> <b>Nom:</b> ${name},<br><br> <b>Courriel:</b> ${email}, <br><br> <b>Numero de téléphone:</b> ${phoneNumber},<br><br> <b>Message:</b> ${message}<p>`
        };

        //call the built in `sendMail` function and return different responses upon success and failure
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({
                    data: {
                        status: 500,
                        message: error.toString(),
                    },
                });
            }

            return res.status(200).send({
                data: {
                    status: 200,
                    message: "Message envoyée.",
                },
            });
        });
    });
});
