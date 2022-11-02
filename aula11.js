/*var vel = 62
console.log(`a velocidade é ${vel}`)
if (vel > 61) {
    console.log(`voce foi multado`)
} */
addEventListener ('click', verificar)
addEventListener ('text', nome)

function verificar (){
  var nome = document.getElementById('nome')
  var pais = document.getElementById('pais') 
  var nome = String (nome.value)
  var pais = String (pais.value) 
  var res = document.getElementById('res')
  res.innerHTML = `bem vindo ${nome}`
  if (pais == 'brasil') {
    res.innerHTML += ` você é brasileiro`   
  } else  {res.innerText += ` estrangeiro`}


} 
 function relogio () {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var mseg = data.getMilliseconds();
     if(hora < 10) {
        hora = "0" + hora; 
     }
     if (min < 10) {
        min = "0" + min;
     }
     if (seg < 10) {
        seg = "0" + seg;
     }
     var horas = hora + ":" + min + ":" + seg;
     document.getElementById('relogio'). value=horas;
 }
 var timer = setInterval(relogio,1000);