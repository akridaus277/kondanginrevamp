var namaPem = ["Fitria", "Disya", "Fitrawati", "Nafila", "Assalia", "Sianne", "Ishita", "Anindita", "Indah", "Ariesta", "Amalia", "Esra", "Hardianti", "Valerie", "Syarifah", "Hilyah", "Evelin", "Adzkiya", "Agustin", "Teddo", "Wildan", "Ridhwan", "Azrul", "Yudha", "Riechal", "Faishal", "Sakti", "Sumandi", "Abdul", "Aburachman", "Rheza", "Andi", "Adisdi", "Devito", "Syarief", "Deka", "Fauzi", "Bimo", "Syahdian", "Adam", "Yosafat", "Aulia", "Aldi", "Avicenna", "Mirza", "Marza", "Ryan", "Aggil", "Kenneth", "Allen", "Rizka", "Azmi", "Rian", "Farqy", "Alvino", "Muhamad", "Jova", "Cakra", "Hudzaifah", "Ray", "Nauval", "Fajri", "Reynaldi", "Garin", "Axel", "Achmad", "Fakhrul", "Arie", "Ferhat", "Hani", "Adelia", "Neva", "Nabila", "Aprilita", "Tesa", "Natasya", "Derisa", "Defara", "Kikhmah", "Hasiana", "Saqina", "Lavinta", "Feby", "Maureen", "Wulan", "Ardha", "Henny", "Silvyna", "Caryne", "Anisah", "Amelinda", "Ries", "Winda", "Sendy", "Arsya", "Agustina", "Muthia", "Dyah", "Afrida", "Rynelda"];
var kota = ["Kab. Bandung", "Kab. Bandung Barat", "Kab. Bekasi", "Kab. Bogor", "Kab. Ciamis", "Kab. Cianjur", "Kab. Cirebon", "Kab. Garut", "Kab. Indramayu", "Kab. Karawang", "Kab. Kuningan", "Kab. Majalengka", "Kab. Pangandaran", "Kab. Purwakarta", "Kab. Subang", "Kab. Sukabumi", "Kab. Sumedang", "Kab. Tasikmalaya", "Kota Bandung", "Kota Banjar", "Kota Bekasi", "Kota Bogor", "Kota Cimahi", "Kota Cirebon", "Kota Depok", "Kota Sukabumi", "Kota Tasikmalaya", "Kab. Bangkalan", "Kab. Banyuwangi", "Kab. Blitar", "Kab. Bojonegoro", "Kab. Bondowoso", "Kab. Gresik", "Kab. Jember", "Kab. Jombang", "Kab. Kediri", "Kab. Lamongan", "Kab. Lumajang", "Kab. Madiun", "Kab. Magetan", "Kab. Malang", "Kab. Mojokerto", "Kab. Nganjuk", "Kab. Ngawi", "Kab. Pacitan", "Kab. Pamekasan", "Kab. Pasuruan", "Kab. Ponorogo", "Kab. Probolinggo", "Kab. Sampang", "Kab. Sidoarjo", "Kab. Situbondo", "Kab. Sumenep", "Kab. Trenggalek", "Kab. Tuban", "Kab. Tulungagung", "Kota Batu", "Kota Blitar", "Kota Kediri", "Kota Madiun", "Kota Malang", "Kota Mojokerto", "Kota Pasuruan", "Kota Probolinggo", "Kota Surabaya", "Kab. Banjarnegara", "Kab. Banyumas", "Kab. Batang", "Kab. Blora", "Kab. Boyolali", "Kab. Brebes", "Kab. Cilacap", "Kab. Demak", "Kab. Grobogan", "Kab. Jepara", "Kab. Karanganyar", "Kab. Kebumen", "Kab. Kendal", "Kab. Klaten", "Kab. Kudus", "Kab. Magelang", "Kab. Pati", "Kab. Pekalongan", "Kab. Pemalang", "Kab. Purbalingga", "Kab. Purworejo", "Kab. Rembang", "Kab. Semarang", "Kab. Sragen", "Kab. Sukoharjo", "Kab. Tegal", "Kab. Temanggung", "Kab. Wonogiri", "Kab. Wonosobo", "Kota Magelang", "Kota Pekalongan", "Kota Salatiga", "Kota Semarang", "Kota Surakarta", "Kota Tegal", "Kab. Barito Selatan", "Kab. Barito Timur", "Kab. Barito Utara", "Kab. Gunung Mas", "Kab. Kapuas", "Kab. Katingan", "Kab. Kotawaringin Barat", "Kab. Kotawaringin Timur", "Kab. Lamandau", "Kab. Murung Raya", "Kab. Pulang Pisau", "Kab. Sukamara", "Kab. Seruyan", "Kota Palangka Raya"];
var r_product = [
    "Paket Gold 2",
    "Paket Gold 3",
    "Paket Gold 1",
    "Paket Bronze 3",
    "Paket Bronze 1",
    "Paket Bronze 2",
    "Paket Silver 3",
    "Paket Silver 1",
    "Paket Silver 2",
    "Paket Amethyst 3",
    "Paket Amethyst 1",
    "Paket Amethyst 2"
];

var notification = document.getElementById("fake-notification");
var avatarElement = document.getElementById("avatar");
var namaElement = document.getElementById("nama");
var kotaElement = document.getElementById("kota");
var paketElement = document.getElementById("jenis");
var waktuElement = document.getElementById("waktu");

var currentIndex = 0;

function showNotification() {

  namaElement.textContent = namaPem[Math.floor(Math.random() * namaPem.length)];
  kotaElement.textContent = kota[Math.floor(Math.random() * kota.length)] + ", Indonesia";
  paketElement.textContent = r_product[Math.floor(Math.random() * r_product.length)];
  waktuElement.textContent = Math.floor(Math.random() * 60) + 1 + " menit yang lalu";

  notification.style.display = "block";
}

function closeNotification() {
  // notification.style.display = "none";
  notification.classList.add("closing"); // Tambahkan class "closing" untuk animasi fade-out
            setTimeout(function () {
                notification.style.display = "none";
                notification.classList.remove("closing"); // Hapus class "closing" setelah animasi selesai
                setTimeout(autoShowAndHideNotification, 30000); // Muncul kembali setelah 30 detik
            }, 500);
}

function autoShowAndHideNotification() {
  setTimeout(function(){
    showNotification();

    setTimeout(function () {
        closeNotification();
        setTimeout(autoShowAndHideNotification, 30000); // Muncul kembali setelah 30 detik
    }, 6000); // Tutup setelah 6 detik

  }, 10000)

}

window.onload = autoShowAndHideNotification;