const express = require('express');
const app = express();
const router = express.Router();

app.use('/', router);

app.get('/', (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p>ini home</p>
    <a href="/about"><button>About</button></a>
    <a href="/contact"><button>Contact</button></a>
    <a href="/api/data"><button>data json</button></a>
    `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h1>About</h1>
    <p>Ini halaman about</p>
    <a href="/"><button>Kembali</button></a>
    `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact</h1>
    <p>ini halaman kontak</p>
    <a href="/"><button>Kembali</button></a>
    `);
});

app.get('/api/data', (req, res) => {
  res.json({
    status: "ok",
    desc: "berhasil"
  });
});

app.listen(3000, () => console.log('Berjalan di server: http://localhost:3000'));