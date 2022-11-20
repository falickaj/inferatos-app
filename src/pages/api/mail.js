const mail = require("@sendgrid/mail");

mail.setApiKey("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");

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
    to: "fitim@inferatos.com",
    from: "admin@inferatos.com",
    subject: "New message from Inferatos Contact Form",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "ok" });
};
