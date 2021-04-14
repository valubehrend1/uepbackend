const usersModel = require('../models/usersModel');

const nodeMailer = require('nodemailer');


module.exports = {

    create: async function(req,res,next) {      
        try{
            const user = await new usersModel({ 
            nameForm:req.body.nameForm,
            email: req.body.email,
            phone: req.body.phone,
            asunto: req.body.asunto,
            file: req.body.file,    
            option: req.body.option,

            });
            const document = await user.save()
            res.json(document);
        } catch(e) {
            console.log('Exception Create Category', e);
            next(e);
        };
    },

    email: async function(req,res,next) {      
        try{
            const user = await new usersModel({ 
                nameForm:req.body.nameForm,
                email: req.body.email,
                phone: req.body.phone,
                file: req.body.file,    
                asunto: req.body.asunto,
                option: req.body.option,
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
            var message = {
                from: user.email,
                to: 'uepmail@gmail.com',
                replyTo: user.email,
                subject: user.option,
                text: user.asunto,
                attachments: req.file ? [
                    {  
                        filename: req.file.originalname,
                        content: Buffer.alloc(req.file.size, req.file.buffer, req.file.enconding)
                    }
                ]  : null
              };
            
            transporter.sendMail(message)
            res.json(true);

        } catch(e) {
            console.log('Exception Create Category', e);
        };
    },
}