let belanja = 1000000
console.log("total belanja: "+belanja)

if (belanja > 100000){
    diskon = belanja * 0.10
    console.log("selamat anda mendapatkan diskon 10%")
}
else if(belanja == 100000){
    diskon = belanja * 0.05
    console.log("selamat anda mendapatkan diskon 5%")
}
else{
    console.log("anda tidak mendapatkan diskon")
}

let pembayaran = belanja - diskon
console.log("total pembayaran: "+pembayaran)
