const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Yeni bir bağlantı kuruldu.');

  // Burada gerçek zamanlı fiyatları sağlamak için kullanacağınız bir veri kaynağı veya API'ya bağlanabilirsiniz.

  // Örnek olarak, her saniye rastgele fiyat verileri gönderelim
  setInterval(() => {
    const currencies = ['gold', 'dollar', 'euro'];
    const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
    const price = (Math.random() * 100).toFixed(2);
    const data = JSON.stringify({ currency: randomCurrency, price: price });
    ws.send(data);
  }, 1000);

  ws.on('close', () => {
    console.log('Bir bağlantı kapandı.');
  });
});

// WebSocket sunucusunu başlatmak için 8080 portunu dinleyin
wss.on('listening', () => {
  console.log('WebSocket sunucusu dinleniyor...');
});

wss.on('error', (error) => {
  console.error('WebSocket sunucusunda bir hata oluştu:', error);
});
