// IMC = Peso (em quilogramas) / (Altura (em metros) * Altura (em metros))

let btCalcular = document.querySelector('button');
let imcResult = document.getElementById('imcResult');
let imcCategory = document.getElementById('imcCategory');


btCalcular.addEventListener ('click', ()=>{
    let peso = parseFloat(document.getElementById('weight').value);
    let altura = parseFloat(document.getElementById('height').value);
    
    
    if(!isNaN(peso) && !isNaN(altura) && altura > 0){
        let imc = parseFloat((peso / (altura * altura)).toFixed(2));
   
        if(imc < 18.5 ){
        imcCategory.textContent = 'Abaixo do peso';
            }else if(imc > 18.5 && imc < 24.90){
                imcCategory.textContent = 'Peso saudável';
            }else if ( imc > 25 && imc < 29.90){
                imcCategory.textContent = 'Sobrepeso';
            }else if (imc > 30 && imc < 34.90){
                imcCategory.textContent = 'Obesidade grau I';
            }else if (imc > 35 && imc < 39.90){
                imcCategory.textContent = 'Obesidade grau II';
            } else{
                imcCategory.textContent = 'Obsidade grau III (obesidade mórbida)';
            }
            imcResult.textContent = imc;         
    }else{
         console.log('Valores invalidos');

    }
   
})

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
