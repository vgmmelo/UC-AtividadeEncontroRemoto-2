let listapeca = ["Filtro de ar", "Motor", "Amortecedor"];

if (listapeca.length < 10) {
  console.log("É POSSIVEL CADASTRAR MAIS PEÇAS");
} else {
  console.log("NÃO É POSSIVEL CADASTRAR MAIS PEÇAS");
}

let peso = 110;
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else{console.log("Limite de peso de 100g ultrapassado")}

let nomePeca = "Disco de Freiro"
if( nomePeca.length>3){
    console.log("nome adequado")
}else{console.log("o nome esta menos de 3 caracteres")}
