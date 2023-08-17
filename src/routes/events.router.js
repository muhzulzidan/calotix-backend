const {
  createEvents,
  fetchEvents,
  detailEvents,
} = require('../controllers/events.controller');
const expres = require('express');
const router = expres.Router();
const multer = require('multer');
const path = require('path');
const uploadDir = `${process.cwd()}/uploads/poster`;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/poster'); // Folder penyimpanan gambar
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/create', upload.single('poster'), createEvents);
router.get('/fetch', fetchEvents);
router.get('/detail/:eventId', detailEvents);

module.exports = router;
