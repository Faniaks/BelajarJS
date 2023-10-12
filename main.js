// console.log("Hello World")
// alert("Notifikasi")
// prompt("Pinjam seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding is not Easy"
// console.log(Promnet)

// cont Promnet = "Coding is Easy"
// console.log(Promnet)
// cont Promnet = "Coding is not Easy"
// console.log(Promnet)

// let totalPoin = prompt ("Masukkan Poin Anda")
//     if(totalPoin > 100) {
//         document.write ("Congtulation");
//     }
//     else {
//         document.write("Thank You");
//     }


// 



let p = document.querySelector("p")
let button = document.querySelector("button")
let input = document.querySelector("input")

button.addEventListener('click', function() {
    let isi = input.value
    console.log(isi)
    p.innerHTML = isi
})


