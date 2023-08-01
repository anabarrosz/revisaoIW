function Buscar(){
const pizza = document.querySelector ('.inPizza').value;
const result = document.querySelector ('.resultado');
let resposta= ""


switch (pizza) {
  case "muzzarela" :
    resposta = result.innerHTML = "Sua pizza está sendo preparada! seu tempo de espera e valor: de 40min - R$23,98"
    break;
///
 case "4 queijos" :
    resposta = result.innerHTML = "Sua pizza está sendo preparada! seu tempo de espera e valor: de 60min - R$39,90"
    break;
///
    case "brocolis com bacon" :
    resposta = result.innerHTML = "Sua pizza está sendo preparada! seu tempo de espera e valor: de 60min - R$50,00"
    break;
///
    case "portuguesa" :
    resposta = result.innerHTML = "Sua pizza está sendo preparada! seu tempo de espera e valor: de 1h15min - R$45,90"
    break;
///
 default :
    resposta = result.innerHTML = "Opção indisponível"
    break;
 }
}