// import express from 'express'; butuh paket yg namanya express, karena kita belum jadi gabisa running.

import express from 'express';
import cors from 'cors'; // <-- Impor cors di sini

const app = express();
const port = 3000;

// Mengaktifkan CORS untuk semua permintaan (request)
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Ijazah lu asli apa palsu wakwak',
    data: {nama: 'Fadhil Hazza Iswadinata', NIM: 4112755201250124, prodi: 'Informatika', Universitas: 'Horizon Indonesia'}
   });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
