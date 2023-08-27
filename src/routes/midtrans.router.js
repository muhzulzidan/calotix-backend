const express = require('express');
const router = express.Router();
const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });

// Store WebSocket clients
const clients = [];

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  clients.push(ws);

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
    clients.splice(clients.indexOf(ws), 1);
  });
});

router.post('/', (req, res) => {
  try {
    const transactions = req.body;
    if (transactions) {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'notification', transactions }));
        }
      });
    }

    // Proses dan perbarui status pembayaran di database Anda
    // Misalnya, Anda bisa menggunakan informasi dari body untuk mencari transaksi yang sesuai dan memperbarui statusnya.

    res.status(200).send('Webhook received successfully');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('An error occurred while handling webhook');
  }
});

module.exports = router;
