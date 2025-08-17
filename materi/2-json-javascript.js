// JSON => Javascript Object Notation

let siswa = {
  nama: "Budi",
  umur: 17,
  hobi: ["coding", "ngegame"],
  sayHi() {
    console.log("Hello");
  },
  nan: NaN,
  tidakAda: undefined,
};

console.log(siswa);
console.log(typeof siswa);

// let json = JSON.stringify(siswa);
// console.log(json);
// console.log(typeof json);

// Mengatasi Objek Bersarang dan Referensi Circular
let room = {
  nomor: 1,
};

let acara = {
  judul: "Diskusi",
  tempat: room,
};

room.acara = acara;
console.log(room);
let tes = JSON.stringify(acara.judul);
console.log(tes);

// Formatting JSON: space
let user = {
  name: "jogan",
  age: 27,
  roles: {
    isAdmin: true,
    isEditor: true,
  },
};

console.log(JSON.stringify(user));
let userJson =
  '{"name":"jogan","age":27,"roles":{"isAdmin":true,"isEditor":true}}';

console.log(JSON.parse(userJson));

// Kustomisasi toJSON
let ruangan = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let pertemuan = {
  judul: "Konferensi",
  ruangan,
};

console.log(JSON.stringify(ruangan));
console.log(JSON.stringify(pertemuan, null, 2));

// JSON.parse => Untuk mengembalikan nilai JSON menjadi Object
let jsonParse = '{"name": "john", "age":35}';
let userParse = JSON.parse(jsonParse);
console.log(userParse);

/*
    NOTES :
    JSON.stringify(object, replaces, space)
*/

// OBJECT OF ARRAY
let members2 = [
  {
    nama: "andi",
    nomorId: 1,
  },
  {
    nama: "andi",
    nomorId: 1,
  },
];

let members =
  '{"members": [{"nama" : "udin", "umur": "27"}, {"nama" : "rina", "umur": "28"}, {"nama" : "nose", "umur": "300"}]}';

console.log(JSON.parse(members));

let membersObj = JSON.parse(members);

console.log(membersObj.members[0].nama);

let arrayMember = membersObj.members;

for (let i = 0; i < arrayMember.length; i++) {
  console.log(arrayMember[i].nama);
  console.log(arrayMember[i].umur);
}
