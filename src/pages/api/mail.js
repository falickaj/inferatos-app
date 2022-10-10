const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
        Full Name: ${body.fullName}\r\n
        Email: ${body.email}\r\n
        Phone: ${body.phone}\r\n
        Message: ${body.message}
    `;

  const data = {
    to: "admin@inferatos.com",
    from: "admin@inferatos.com",
    subject: "New message from Inferatos Contact Form",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "ok" });
};
