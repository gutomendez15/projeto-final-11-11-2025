img = document.querySelector(".hero")

function alterarImagem() {

    if (img.style.backgroundImage.includes('s1000.jpg')) {
        img.style.backgroundImage = "url('../../img/h2r.jpg')";
    } else {
        img.style.backgroundImage = "url('../../img/s1000.jpg')";
    }

}
