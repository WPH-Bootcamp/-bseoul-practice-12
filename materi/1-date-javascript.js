// DATA => TANGGAL DAN WAKTU
/* 
    Cara Membuat Object Date:
    1. new Date()
    2. Mengambil Milidetik
    3. Dari String
    4. Komponen Tanggal Lengkap
*/

// -. new Date()
let sekarang = new Date();
console.log(sekarang);

// -. Mengambil Milidetik
let awalWakut = new Date(0);
console.log(awalWakut);
let sehariSetelahEpoch = new Date(24 * 3600 * 1000);
console.log(sehariSetelahEpoch);

// -. Dari String
// YYYY-MM-DD
let dariString = new Date("2025-12-25");
console.log(dariString);

// -. Komponen Tanggal Lengkap
let customDate = new Date(2024, 7, 17, 10, 30); // Date(Tahun, Bulan, Tanggal, Jam, Menit)
console.log(customDate);

console.log(customDate.getFullYear());
console.log(customDate.getMonth());
console.log(customDate.getDate());
console.log(customDate.getDay());

switch (customDate.getMonth()) {
  case 0:
    console.log("Januari");
    break;
  case 7:
    console.log("Agustus");
    break;
  default:
    console.log("Something went wrong");
}

// MENGGUNAKAN WAKTU WIB -> UTC+7
let waktuUTC = new Date();
console.log("UTC", waktuUTC.getTime());
let offSetWIB = 7 * (1 * 60 * 60 * 1000);
/*
    1 jam = 60 menit
    1 menit = 60 detik
    1 detik = 1000 milidetik
*/

console.log(offSetWIB);
let waktuWIB = waktuUTC + offSetWIB;

console.log("WIB", waktuWIB);

let start = Date.now();

for (let i = 0; i < 10000000; i++) {
  let dummy = i * 2;
}

let end = Date.now();
console.log(start);
console.log(end);
console.log(`Durasi: ${end - start} ms`);

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms);
