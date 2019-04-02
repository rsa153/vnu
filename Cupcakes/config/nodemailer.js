//not implemented
var nodemailer = require("nodemailer");
function sendMail() {
  var transporter = nodemailer.createTransport({
    service: "godaddy",
    auth: {
      user: "info@etaxisigma.net",
      pass: ""
    }
  });

  var mailOptions = {
    from: "trevia.griffin@illinois.gov",
    to: "saratgrffn@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
sendMail();
