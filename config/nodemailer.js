import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tejas.helwatkar@gmail.com',
        pass: 'EMAIL_PASSWORD', // Use environment variable for security
    }
})