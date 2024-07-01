// console.log("lllo")
// var button = document.getElementById("button")

// button.addEventListener("click",()=>{
//     console.log("hai")
// })

function teken() {
    
    var nama = document.getElementById('name').value;

    if (nama !='') {
        var place = document.getElementById('place');
    
    var nilai = Math.floor(Math.random() * 10);

    var khodam = [  "kutu kupret",
        "kantong kresek",
        "kucing muntaber",
        "sponsbob",
        "kadal divabel",
        "naga indosiar",
        "Janda pirang",
        "macan maung",
        "ulet bulu",
        "segel sosis sonice"]

    var hasil = khodam[nilai]
    // alert(hasil)
    console.log(hasil)
    place.innerHTML=hasil
    }

    
}