var obj = {
	teste: {
  	att1: '111',
    att2: {att2Filho: '12341234'},
    att3: [{array3Filho1: 'aaaaaa'}, {array3Filho2: 'bbbbbbb'}],
    att4: '444'
  },
  //ainda falta corrigir para liberar os atributos abaixo
  //column01: "Coluna 01",
  //column02: "Coluna 02"
};

var lstFormulario = []

iniciar()
//NIVEL 1
function iniciar () {
  Object.keys(obj).forEach(function(item){
   console.log(item + " = " + obj[item]);
   rec(item, obj[item])
  });
  setTimeout(() => {
	  console.log(lstFormulario)
    lstFormulario.forEach(function(item){
    	console.log('<h1>PAI:'+item.pai+'</h1><h1>LABEL:'+item.key+'</h1><h1>VALOR:'+item.value+'</h1>')
    })
    
   }, 300);
	
}

function rec(pai, obj){
	  Object.keys(obj).forEach(function(item){
     console.log('VALOR A VERIFICAR:')
     console.log(item + " = " + obj[item]);
     if (typeof obj[item] == 'string' || typeof obj[item] == 'number') {
     		console.log('NÃO É OBJETO, NÃO É ARRAY')
        lstFormulario.push({pai: pai, key: item, value: obj[item]})
        return
     } else {
     		//aqui não tem risco de ser uma string ou número
        //console.log('KEYS DO FILHO')
        //console.log(Object.keys(obj[item]).length)
        console.log('IS ARRAY???????')
        console.log(obj[item])
        console.log(Array.isArray(obj[item]))
        if (Array.isArray(obj[item]) && obj[item].length > 0) {
          obj[item].forEach(function(itemArray){
          	rec(item, itemArray)
          })
        } else {
        	if (obj[item] && Object.keys(obj[item]).length > 0) {
            console.log('CHAMA REC')
            rec(item, obj[item])
          } else {
              console.log('NÃO CHAMA REC')
              lstFormulario.push({pai: pai, key: item, value: obj[item]})
            return
          }
        }
     		//if (Array.isArray(obj[item]) && obj[item].length > 0) {	
        //}
     }
    });
}
/*for (var property in obj){
  console.log(property + " = " + obj[property]);
  rec(property, obj[property])
  
}
function rec(key, value) {
	console.log(Object.values(value))
  console.log(Object.keys(value))
	//for (var property2 in value){
  //	console.log(property2 + " = " + value[property2]);	
  //}
}
*/
