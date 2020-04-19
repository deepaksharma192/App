const nodemailer = require('nodemailer')
const sendermailid = 'saurabh.yadav@aktechnology.co.in';
const userpasskey = '100rabh@2799';
const credentials = {
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: sendermailid, 
    pass: userpasskey 
  }
}
const transporter = nodemailer.createTransport(credentials)

module.exports = async (to, content) => {
  const contacts = {
    from: sendermailid, 
    to
  }
  console.log('send email');
  const email = Object.assign({}, content, contacts)
  
  // This file is imported into the controller as 'sendEmail'. Because 
  // 'transporter.sendMail()' below returns a promise we can write code like this
  // in the contoller when we are using the sendEmail() function.
  //
  //  sendEmail()
  //   .then(() => doSomethingElse())
  // 
  // If you are running into errors getting Nodemailer working, wrap the following 
  // line in a try/catch. Most likely is not loading the credentials properly in 
  // the .env file or failing to allow unsafe apps in your gmail settings.
  await transporter.sendMail(email)

}