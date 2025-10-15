// Array ເກັບໄດ້ຫຼາຍຄ່າ ແຕ່ເປັນຂໍ້ມູນໄດ້ພຽງຊະນິດດຽວ 
//const sakda_gf = ["NOk","Jai","kee"]
//console.log(sakda_girlfriend[0])
//variable ແມ່ນແທນຄ່າໂຕປ່ຽນ
//object     
//Indexing ບໍ່ຈຳເປັນຕ້ອງລຽງຕາມລຳດັບ (ດັດຊະນີ, ສາລະບານ)
const sakda_girlfriend = [
     { name: "Nok", age: 65 },
     { name: "Jai", age: 45 },
     { name: "Kee", age: 75 },
]

//console.log(sakda_girlfriend[0].name)

//forEach  

sakda_girlfriend.forEach((gf) => { //arrayແມ່ນໃສ່ຊື່ຄ່າຄົງທີ່ຂອງເຮົາ element ແມ່ນເຮົາໃສ່ຊື່ຕາມໃຈເຮົາ 
    console.log(gf.name)
});





