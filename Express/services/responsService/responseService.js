const { ApiLogs } = require('../../models');

const sendResponse = async (res, statusCode, success, message, data = null, errors = null) => {
    // console.log(">>>>>>>>>",res.req)
    const response = {
        success,
        message
    }

    if (data !== null) response.data = data
    if (errors !== null) response.errors = errors
console.log("res.user>>>>>>>>",statusCode)
    const apiLogs = {
        user_id: res.locals.user ? res.locals.user.id : null, // Retrieve user ID from res.locals
        api_name: res.req.originalUrl, // API endpoint
        api_request: JSON.stringify(res.req.body), // Request payload
        status: statusCode,
        ip_address: res.req.ip, // Client IP address
        message: message || 'No message provided',
        response: JSON.stringify(response),
        timestamp: new Date(),
    }

    try {
        await ApiLogs.create(apiLogs);
    } catch (error) {
        console.error('Error creating API log:', error.message);
        console.error('Error stack:', error.stack);
    }
    

    res.status(statusCode).json(response)
}

module.exports = { sendResponse }