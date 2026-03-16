const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Validation rules
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
];

// POST /api/contact
router.post('/', validateContact, async (req, res) => {
  // Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Elitedge team
    await transporter.sendMail({
      from: `"Elitedge Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'info@elitedgeconsulting.com',
      subject: `New Consultation Request — ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#3B0D5E;padding:40px;border-radius:12px;">
          <div style="text-align:center;margin-bottom:32px;">
            <h1 style="color:#C9A84C;font-size:24px;margin:0;">Elitedge Consulting</h1>
            <p style="color:#BBA8D0;margin:8px 0 0;">New Consultation Request</p>
          </div>
          <div style="background:#4A1565;border-radius:8px;padding:28px;border:1px solid rgba(201,168,76,0.2);">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;color:#BBA8D0;font-size:13px;width:120px;">Name</td><td style="padding:10px 0;color:#fff;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:10px 0;color:#BBA8D0;font-size:13px;">Email</td><td style="padding:10px 0;color:#C9A84C;">${email}</td></tr>
              <tr><td style="padding:10px 0;color:#BBA8D0;font-size:13px;">Phone</td><td style="padding:10px 0;color:#fff;">${phone}</td></tr>
              <tr><td style="padding:10px 0;color:#BBA8D0;font-size:13px;">Service</td><td style="padding:10px 0;color:#C9A84C;font-weight:600;">${service}</td></tr>
            </table>
            <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(201,168,76,0.15);">
              <p style="color:#BBA8D0;font-size:13px;margin:0 0 8px;">Message</p>
              <p style="color:#fff;line-height:1.7;margin:0;">${message}</p>
            </div>
          </div>
          <p style="color:#BBA8D0;font-size:12px;text-align:center;margin-top:24px;">Elitedge Consulting · Chennai, Tamil Nadu, India</p>
        </div>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Elitedge Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your consultation request — Elitedge Consulting',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#3B0D5E;padding:40px;border-radius:12px;">
          <div style="text-align:center;margin-bottom:28px;">
            <h1 style="color:#C9A84C;font-size:22px;margin:0;">Elitedge Consulting</h1>
          </div>
          <div style="background:#4A1565;border-radius:8px;padding:28px;border:1px solid rgba(201,168,76,0.2);">
            <h2 style="color:#fff;font-size:18px;margin:0 0 16px;">Hi ${name},</h2>
            <p style="color:#BBA8D0;line-height:1.8;margin:0 0 16px;">Thank you for reaching out to <strong style="color:#C9A84C;">Elitedge Consulting</strong>. We've received your consultation request for <strong style="color:#C9A84C;">${service}</strong>.</p>
            <p style="color:#BBA8D0;line-height:1.8;margin:0 0 24px;">Our team will review your enquiry and get back to you within <strong style="color:#fff;">24 hours</strong>.</p>
            <div style="border-top:1px solid rgba(201,168,76,0.2);padding-top:20px;">
              <p style="color:#BBA8D0;font-size:13px;margin:0 0 8px;">For urgent queries, call us directly:</p>
              <p style="color:#C9A84C;font-weight:600;margin:0;">+91 7338807880 &nbsp;|&nbsp; +91 7338847880</p>
            </div>
          </div>
          <p style="color:#BBA8D0;font-size:12px;text-align:center;margin-top:24px;">© 2026 Elitedge Consulting · Chennai, India</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;
