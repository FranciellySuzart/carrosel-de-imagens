// variável que guarda a estrutura do carrossel (all = todas as imagens)
let imgSlider = document.querySelectorAll('.slider-conteiner .slider-box');
// capturando as setas
let btnProximo = document.querySelector('#proximo');
let btnAnterior = document.querySelector('#anterior');
// capturando os botões de navegação
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

// variável para controlar o slide ativo. Servindo para verificar a quantidade de slides que está guardada e a quantidade de vezes que o slide foi passado
let contadorImg = imgSlider.length; // contador para verificar a quantidade de imagens
let imgAtiva = 0; // variável para controlar o slide ativo

// click da seta próximo
btnProximo.addEventListener('click', () => {
    imgAtiva++; // incrementa o contador do slide ativo
    if(imgAtiva >= contadorImg){ imgAtiva = 0; } // se o slide ativo for maior que a quantidade de imagens, volta para o primeiro slide
    mostrarSlider();
});

btnAnterior.addEventListener('click', () => {
    imgAtiva--; // decrementa o contador do slide ativo
    if(imgAtiva < 0){ imgAtiva = contadorImg - 1; } // se o slide ativo for menor que 0, volta para o último slide
    mostrarSlider();
});

// função para mostrar o slide ativo
function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-conteiner .slider-box.ativo'); // seleciona a imagem ativa
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo'); // seleciona o botão de navegação ativo

    antigaImg.classList.remove('ativo'); // remove a classe ativo da imagem ativa
    antigoBtnNav.classList.remove('ativo'); // remove a classe ativo do botão de navegação ativo

    imgSlider[imgAtiva].classList.add('ativo'); // adiciona a classe ativo na imagem ativa
    btnNav[imgAtiva].classList.add('ativo'); // adiciona a classe ativo no botão de navegação ativo
}

// click dos botões de navegação
btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imgAtiva = indice; // atualiza o contador do slide ativo com o índice do botão de navegação clicado
        mostrarSlider(); // chama a função para mostrar o slide ativo
    });
});
