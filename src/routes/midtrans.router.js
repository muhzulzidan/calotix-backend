const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  try {
    console.log('Received webhook data:', req.body);

    // Proses dan perbarui status pembayaran di database Anda
    // Misalnya, Anda bisa menggunakan informasi dari body untuk mencari transaksi yang sesuai dan memperbarui statusnya.

    res.status(200).send('Webhook received successfully');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('An error occurred while handling webhook');
  }
});

module.exports = router;
