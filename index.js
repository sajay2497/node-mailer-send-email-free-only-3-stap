const express = require('express')
const app = express()
const port = 3000
// mail send 
// step 1
const mailer = require("nodemailer");
// step 2
    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:'Your email id',
            pass:'your password'
        }
    })

    // setp 3

    var message = {
        from: "From email id",
        to: " To email id",
        subject: "Message for test",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };

      transporter.sendMail(message,(err, results)=>{
          if(err){
              console.log(err);
              return false;
          }
          console.log(results);
      });

// end mail send
app.get('/', (req, res) => res.send('Hello World! ajay kumar'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))