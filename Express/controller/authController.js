const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendResponse } = require('../services/responsService/responseService');
const { UserToken } = require('../models');
require('dotenv').config();
const crypto = require('crypto');
const nodemailer = require("nodemailer");
const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return sendResponse(res, 404, false, 'User not found');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return sendResponse(res, 401, false, 'Password is incorrect');
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY,
        });
        const expireAt = new Date();
        expireAt.setHours(expireAt.getHours() + parseInt(process.env.TOKEN_EXPIRY));
        await UserToken.create({
            user_id: user.id,
            token: token,
            expire_at: expireAt,
        });
        const userWithoutPassword = {
            user_id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            status: user.status,
            avatar: user.avatar,
            created_at: user.created_at,
            updated_at: user.updated_at,
            deleted_at: user.deleted_at,
            token: token,
        };
        sendResponse(res, 200, true, 'User login successful', {
            user: userWithoutPassword,
        });
        // Ensure no further responses are sent after `sendResponse`
        return; // Return here to avoid continuing the function
    } catch (error) {
        console.error("error>>>>>>>>>>", error);
        sendResponse(res, 500, false, null, null, error.message);
        return; // Prevent any further processing after sending an error response
    }
};



//update Password 
const updatePassword = async (req, res, next) => {
    const userId = req.body.user_id
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
        return sendResponse(req, 400, false, 'New password and confirm password  do not match')
    }
    try {
        const user = await User.findByPk(userId)
        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) {
            return sendResponse(res, 401, false, 'Old password is incorrect')
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await user.update({ password: hashedPassword }, { where: { user_id: userId } });

        sendResponse(res, 200, true, 'Password updated successfully')
    } catch (error) {
        console.log(error)
        sendResponse(res, 500, false, null, null, error.message)
        next(error)

    }
}


const ResetPassword = async (req, res, next) => {
    const userId = req.body.user_id
    const { oldPassword, newPassword } = req.body
    try {
        const user = await User.findByPk(userId)
        console.log("user<<<<<<<<<", user)
        const validaPassword = await bcrypt.compare(oldPassword, user.password)
        console.log("validaPassword<<<<<<<", validaPassword)
        if (!validaPassword) {
            return sendResponse(res, 401, false, 'oldpassword not match')
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        console.log("hashedPassword ????????????", hashedPassword)
        await user.update({ password: hashedPassword }, { where: { user_id: userId } })
        sendResponse(res, 200, true, 'password Reset Successfully')
    } catch (error) {
        console.log(error.message)
        next(error)
        sendResponse(res, 500, false, null, null, error.message)
    }
}

// Update Password function
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        console.log("Received password reset request for:", email);

        // Check if the user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log("User not found:", email);
            return sendResponse(res, 404, false, "User not found", null, {
                email: "User not found",
            });
        }

        // Generate OTP and expiration time
        const otp = crypto.randomInt(100000, 999999).toString(); // Generate 6-digit OTP
        const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

        console.log(`Generated OTP: ${otp} (valid till ${expireAt})`);

        // Save OTP in database
        await UserToken.create({
            user_id: user.id, // Ensure this matches your database field name
            token: otp,
            expire_at: expireAt,
        });

        console.log("OTP stored in database successfully");

        // Email configuration
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Reset Password OTP",
            text: `Your OTP for password reset is ${otp}. It is valid for 15 minutes.`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error.message);
                return sendResponse(res, 500, false, "Error sending email", null, {
                    error: error.message,
                });
            }

            console.log("Reset password email sent:", info.response);
            sendResponse(res, 200, true, "Reset password email sent");
        });

    } catch (error) {
        console.error("Error in forgotPassword:", error);
        sendResponse(res, 500, false, "Internal server error", null, {
            error: error.message,
        });
    }
}


module.exports = { login, updatePassword, ResetPassword, forgotPassword };