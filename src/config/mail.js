// yarn add nodemailer
// Using mailtrap(DEV)

export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: 'eabe9d88623cf0',
    pass: 'a0ca569543dd9e',
  },
  default: {
    from: 'GoBarber <noreply@gobarber.com>',
  },
};
