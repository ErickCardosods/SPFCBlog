document.addEventListener('DOMContentLoaded', function(){
    const AumentaFontebtn = document.getElementById('aumentar-fonte');
    const DiminuiFontebtn = document.getElementById('diminuir-fonte');
    let TamanhoFonteatl = 1;
    AumentaFontebtn.addEventListener('click', function(){
        TamanhoFonteatl += 0.1;
        document.body.style.fontSize = `${TamanhoFonteatl}rem`;
    })
    DiminuiFontebtn.addEventListener('click', function(){
        TamanhoFonteatl -= 0.1;
        document.body.style.fontSize = `${TamanhoFonteatl}rem`;
    })
})