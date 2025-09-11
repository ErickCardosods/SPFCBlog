document.addEventListener('DOMContentLoaded', function(){
    const AumentaFontebtn = document.getElementById('aumentar-fonte');
    const DiminuiFontebtn = document.getElementById('diminuir-fonte');
    const contraste = document.getElementById('contraste');
    let TamanhoFonteatl = 1;
    AumentaFontebtn.addEventListener('click', function(){
        TamanhoFonteatl += 0.1;
        document.body.style.fontSize = `${TamanhoFonteatl}rem`;
    })
    DiminuiFontebtn.addEventListener('click', function(){
        TamanhoFonteatl -= 0.1;
        document.body.style.fontSize = `${TamanhoFonteatl}rem`;
    })
    contraste.addEventListener('click', function(){
        document.body.classList.toggle('contraste');
    })
})
ScrollReveal().reveal('#inicio', {delay: 500})
ScrollReveal().reveal('#São Paulo Futebol Clube', {delay: 500})
ScrollReveal().reveal('#galeria', {delay: 500})
ScrollReveal().reveal('#contato', {delay: 500})
