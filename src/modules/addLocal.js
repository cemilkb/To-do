
let deneme = [{adı:"cemil", soyAdı:"Köybaşı"},{soyAdı:"Falsan", adı:"Filan"}]

localStorage.setItem("person1", JSON.stringify(deneme))

let getir = JSON.parse(localStorage.getItem("person1"))

export {getir}