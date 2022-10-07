let favoriteItems = [];

const buttons = document.querySelectorAll(".btn-click");

buttons.forEach(btn => {
  btn.addEventListener("click", event => {
    jobsData.forEach(element => {
      if (element.id == event.target.id && event.target.innerText == "Remover candidatura") {
        favoriteItems.push(element);
      }
    });

    if (event.target.innerText == "Candidatar") {
      const li = document.querySelectorAll(".favorites");
      li.forEach(e => {
        if (e.id == event.target.id) {
          e.remove();
        }
      });

      const index = favoriteItems.findIndex(e => {
        return e.id == event.target.id;
      });
      favoriteItems.splice(index, 1);
    }

    if (!favoriteItems.length) {
      createVazio();
    }

    if (favoriteItems.length > 0) {
      const divzinha = document.querySelector(".create-vazio");
      divzinha.innerHTML = "";
      createElementsFavorites(favoriteItems);
    }

    const setFavorite = JSON.stringify(favoriteItems);
    localStorage.setItem("favoritos", setFavorite);
  });
});

if (favoriteItems.length == 0) {
  const divzinha = document.querySelector(".create-vazio");
  divzinha.innerHTML = "";
  createVazio();
} else {
  createElementsFavorites(favoriteItems);
}

const validate = localStorage.getItem("favoritos");
const validateParse = JSON.parse(validate);
if (JSON.parse(validate).length > 0) {
  const divzinha = document.querySelector(".create-vazio");
  divzinha.innerHTML = "";
  favoriteItems = [];
  favoriteItems = [...validateParse];
  const btnCandidatar = document.querySelectorAll(".btn-click");
  btnCandidatar.forEach(e => {
    validateParse.forEach(ev => {
      if (e.id == ev.id) {
        e.innerText = "Remover candidatura";
      }
    });
  });
  createElementsFavorites(validateParse);
}
