//src/services/emailService.js
const nodemailer = require('nodemailer');

const GMAIL_USER = process.env.GMAIL_USER || 'your_email@gmail.com';
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || 'your_password';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD,
    },
});

exports.setupEmailService = () => {
   
};

exports.sendEmailReminder = (to, task, completionTime, offsetDays) => {
    const reminderTime = new Date(completionTime);
    reminderTime.setDate(reminderTime.getDate() + offsetDays);

    const mailOptions = {
        from: GMAIL_USER,
        to,
        subject: `Reminder: ${task} due soon`,
        text: `Don't forget to complete the task "${task}" by ${completionTime}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
