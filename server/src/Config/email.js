import Email from 'email-templates';
import nodemailer from 'nodemailer';

/* 
  Use mailtrap for testing and switch to 
  sendinblue when going live.
*/

let host;
let port;
let user;
let pass;

// if (process.env.NODE_ENV !== 'production') {
//   host = 'sandbox.smtp.mailtrap.io';
//   port = 25;
//   user = process.env.MAIL_TRAP_USERNAME;
//   pass = process.env.MAIL_TRAP_PASSWORD;
// } else {
//   // host = 'live.smtp.mailtrap.io';
//   // port = 587;
//   // user = process.env.MAIL_TRAP_USERNAME;
//   // pass = process.env.MAIL_TRAP_PASSWORD;
//   // TODO: Change this to sendinblue in later stage
host = 'smtp-relay.brevo.com';
port = 587;
user = process.env.SendInBlue_User;
pass = process.env.SendInBlue_Password;
// }

console.log('Emaiiiiiiiiil, ', host, port, user, pass);
// let transport = nodemailer.createTransport({
//   host,
//   //host: 'localhost', //will cause error but show email preview
//   port,
//   auth: {
//     user,
//     pass
//   }
// });

// var transport = nodemailer.createTransport({
//   host: 'smtp-relay.brevo.com',
//   port: 587,
//   auth: {
//     user: process.env.SendInBlue_User,
//     pass: process.env.SendInBlue_Password
//   }
// });

// export const email = new Email({
//   message: {
//     from: user
//   },
//   send: true,
//   transport,
//   preview: true, // to preview emails in your own browser
//   views: {
//     options: {
//       extension: 'hbs'
//     }
//   }
// });

// let product_name = process.env.PRODUCT_NAME;
// let product_url = process.env.PRODUCT_URL;
// let company_name = process.env.COMPANY_NAME;
// let company_address = process.env.COMPANY_ADDRESS;

var transport = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com", // Replace with Brevo's SMTP server
  port: 587,
  auth: {
    user: process.env.SendInBlue_User, // Replace with your Brevo username
    pass: process.env.SendInBlue_Password,  // Replace with your Brevo password
  }
});

export const sendEmail = async (toEmail, confirmEmailUrl, subject, firstName) => {
  try {
    let info = await transport.sendMail({
      from: user, // Replace with your email
      to: toEmail,
      subject: subject,
      text: `Hello ${firstName}, please verify your email at ${confirmEmailUrl}`, // Use template literals
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// let info = await transporter.sendMail({
//   from: '"mauricio@brevo.com', // sender address
//   to: "john@domain.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello {{ contact.FIRSTNAME }} , This is an SMTP message with customizations", // plain text body
// });
