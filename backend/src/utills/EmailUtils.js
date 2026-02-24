import nodemailer from 'nodemailer'
import {EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER} from '../constrain.js'

export const EmailSender =async (EmailTo,EmailText,EmailSubject)=>{
    const transportal = nodemailer.createTransport({
        service:"Gmail",
        host:EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY,
        auth:{
            user: EMAIL_USER,
            pass: EMAIL_PASS
        },
        tls :{
            rejectUnauthorized:false
        }
    })
    
    const mailOption = {
        from :  {
            name:"Cleansmart_Contact via Website",
            address:EMAIL_USER
        },
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await transportal.sendMail(mailOption)
}
