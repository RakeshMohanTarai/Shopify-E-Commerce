const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const port = 4000;

// Define multer storage configuration
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Create multer instance with storage configuration
const upload = multer({ storage: storage });

// Handle POST request for uploading a single file
router.post("/upload", upload.single('product'), (req, res) => {
    console.log('Image has been uploaded successfully');
    // Respond with success message and URL of the uploaded image
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

module.exports = router;