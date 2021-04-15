const usersModel = require('../models/usersModel');

const nodeMailer = require('nodemailer');


module.exports = {

    create: async function (req, res, next) {
        try {
            const user = await new usersModel({
                nameForm: req.body.nameForm,
                email: req.body.email,
                phone: req.body.phone,
                asunto: req.body.asunto,
                file: req.body.file,
                option: req.body.option,

            });
            const document = await user.save()
            res.json(document);
        } catch (e) {
            console.log('Exception Create Category', e);
            next(e);
        };
    },

    email: async function (req, res, next) {
        try {
            const user = await new usersModel({
                nameForm: req.body.nameForm,
                email: req.body.email,
                phone: req.body.phone,
                file: req.body.file,
                option: req.body.option,
                asunto: req.body.asunto,
            });
            console.log('Data: ', req.body)

            const transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'uepmail@gmail.com',
                    pass: 'epkhphpqujonahrl'
                }
            })

            const fieldheader = 
                `
                <html>
                <head>
                    <link rel="preconnect" href="https://fonts.gstatic.com">
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
                </head>
                <body>
                    <div style="background-color: #FFAC42; border-radius: 9px; text-align:center; margin: 20px">
                        <p style="font-size: 25px; font-family: 'Raleway'; text-align:center"><b>Nuevo mensaje</b></p>
                    </div>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Nombre: </b>${user.nameForm}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Email: </b>${user.email}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Teléfono: </b>${user.phone}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Motivo de contacto: </b>${user.option}</p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"><b>Consulta:</b></p>
                    <p style="font-size: 16px; font-family: 'Raleway'; text-align:center;"> - ${user.asunto} - </p>
                </body>
                </html>
                `
            var message = {
                from: user.email,
                to: 'uepmail@gmail.com',
                replyTo: user.email,
                subject: user.option,
                html: fieldheader,
                attachments: req.file ? [
                    {
                        filename: req.file.originalname,
                        content: Buffer.alloc(req.file.size, req.file.buffer, req.file.enconding)
                    }
                ] : null
            };

            transporter.sendMail(message)
            res.json(true);

        } catch (e) {
            console.log('Exception Create Category', e);
        };
    },
}