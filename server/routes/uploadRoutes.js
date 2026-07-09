const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const { uploadFile } = require("../controllers/uploadController");

router.post("/", protect, upload.single("statement"), uploadFile);

module.exports = router;