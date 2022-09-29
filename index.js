function bilheteria (idade_comprador){
    if (idade_comprador <= 18) {
        return true
    } else {
        return false;
    }
}
module.exports = {bilheteria}

function calculohoraextra (mes){

    for (mes = 0; mes < 31; mes ++){
        return true;
    }
}
module.exports = {calculohoraextra}


function encontreogato (pets){
   let tentativas = 0;

   while (pets != 'gato' && tentativas < 10){
    tentativas ++;
    if (pets != 'gato'){
    return true;
    } 
    else {
    return false;
   }
}
}
module.exports = {encontreogato}