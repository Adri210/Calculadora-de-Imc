const form = document.getElementById('button');

form.addEventListener('click',function(event){
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const Imc = (peso/(altura*altura)).toFixed(2);
    console.log(Imc);

    const resultado =   document.getElementById('resultado');
    let mensagem = '';
    let resultadoImc = Imc;


    document.getElementById('infos').classList.remove('hidden');

    if(Imc < 18.5){
        mensagem = 'Você esta abaixo do peso '
    }
    if(Imc > 18.5 && Imc < 24.9){
        mensagem = 'Você esta no peso Ideal '
    }
    if(Imc > 24.9){
        mensagem = 'Você esta acima do peso '
    }

    document.getElementById('mensagem').textContent = mensagem; 
    document.getElementById('resultado').textContent = resultadoImc;
})  
  
