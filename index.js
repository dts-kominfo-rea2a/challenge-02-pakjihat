// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping =[];
  for(let i=0;i<arrPegawai.length;i++){
    hasilLooping.push(arrPegawai[i].namaDepan+" "+arrPegawai[i].namaBelakang);
  }

// Jumlah pegawai

let jumlahPegawai=arrPegawai.length;


  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0;

  for(let i=0;i<arrPegawai.length;i++){
    if(arrPegawai[i].jenisKelamin==="M"){
      jumlahPria+=1;
    }
  }

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0;

  for(let i=0;i<arrPegawai.length;i++){
    if(arrPegawai[i].jenisKelamin==="F"){
      jumlahWanita+=1;
    }
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";

  if(jumlahPria>jumlahWanita){
    komentar="umlah Pria lebih banyak dari Wanita";
  } else if(jumlahWanita>jumlahPria){
    komentar="Jumlah Wanita lebih banyak dari Pria";
  } else{
    komentar="Jumlah Pria dan Wanita berimbang";
  }

  let jmlPegawai=jumlahPria+jumlahWanita;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jmlPegawai,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log("Jumlah Pegawai = "+hasil.jmlPegawai);
  console.log("Jumlah Pegawai Pria = "+hasil.jumlahPria);
  console.log("Jumlah Pegawai Wanita = "+hasil.jumlahWanita);
  console.log("Kesimpulan ttg Jumlah Pegawai = "+hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
