const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'teste.nodemailer20@gmail.com',
    pass: 32614513
  }
})

transporter.sendMail({
  from: "node mailer <teste.nodemailer20@gmail.com>",
  to: "edusilva.dev@gmail.com",
  subject: "Oi, sou o Eduardo e estou trabalhando com o nodemailer",
  text: 'Olá, sou Eduardo, e gosto da lib nodemailer',
  html: "Olá, nodemailer legal! <a href='https://google.com'>Clica aqui, vai!</a>"
}).then(message => {
  console.log(message)
}).catch(err => {
  console.log(err)
})