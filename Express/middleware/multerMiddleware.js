const path = require('path')
const fs = require('fs')
const multer = require('multer')

//upload dir's
const avatarUploadDir = path.join(__dirname, "../uploads/avatars")
const imageUploadDir = path.join(__dirname, "../uploads/photos")
const documentsDir = path.join(__dirname, '../uploads/documents')

//create upload dir

const createDirIfNotExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

createDirIfNotExists(avatarUploadDir);
createDirIfNotExists(imageUploadDir);
createDirIfNotExists(documentsDir);

// storage for multer 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(`File fieldname received: ${file.fieldname}`);  // Log field name
        if (file.fieldname === "avatar") {
            cb(null, avatarUploadDir);
        } else if (file.fieldname === "document") {
            cb(null, documentUploadDir);
        } else if (file.fieldname === "image") {
            cb(null, imageUploadDir);
        }
        
        else {
            console.error(`Invalid field name: ${file.fieldname}`);
            cb(new Error("Invalid field name"));
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        console.log(`Uploading file: ${file.originalname}`);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

// File filter function
const fileFilter = (req, file, cb) => {
    const filetypes = {
        avatar: /jpeg|jpg|png/,
        document: /jpeg|jpg|png|pdf|doc|docx/,
        image: /jpeg|jpg|png/,
        logo: /jpeg|jpg|png/
    };

    const fieldType = file.fieldname;
    if (filetypes[fieldType]) {
        const mimetype = filetypes[fieldType].test(file.mimetype);
        const extname = filetypes[fieldType].test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        return cb(new Error(`Invalid file type for ${fieldType}!`));
    }

    cb(new Error("Invalid field name"));
};

// Initialize multer with storage and file filter configuration
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 50 * 1024 * 1024 } // Set limit to 50MB for each file
});

module.exports = upload;

