const imgCat = document.querySelector(".image-cat");
const btnResource = document.querySelector(".container-button");
const loadingPage = document.querySelector("#loading")

function showLoading() {
    const classLoading = "fas fa-circle-notch fa-spin";
    const classes = classLoading.split(" ");
    
    classes.forEach(className => {
        loadingPage.classList.add(className);
    });
      
}

function removeLoading(){
    const classLoading = "fas fa-circle-notch fa-spin";
    const classes = classLoading.split(" ");
    classes.forEach(className => {
        loadingPage.classList.remove(className);
    });
}

const gerarURl = () => {
    showLoading(); // Exibir o efeito de carregamento
    const urlAPI = `https://api.thecatapi.com/v1/images/search?limit=1`;

    const api = fetch(urlAPI)
        .then(response => {
            if (!response.ok) return;
            return response.json();
        })
        .then(data => {
            const [catObject] = data;
            return catObject.url;
        })
        .catch(err => console.log("erro ao tentar requisitar api" + err))

    api.then(catURL => {
        imgCat.src = catURL; // atualiza a imagem exibida no elemento imgCat
        setTimeout(removeLoading, 1000);
    });
}

btnResource.addEventListener('click', () => {
    gerarURl(); // Aguardar o efeito de carregamento e então chamar gerarURl
});
