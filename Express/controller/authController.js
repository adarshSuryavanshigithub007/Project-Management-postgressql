const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendResponse } = require('../services/responsService/responseService');
const { UserToken } = require('../models');
require('dotenv').config();

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
        console.error(error);
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
        sendResponse(res, 500, false, null, null, error.message)
        next(error)

    }
}

module.exports = { login, updatePassword };