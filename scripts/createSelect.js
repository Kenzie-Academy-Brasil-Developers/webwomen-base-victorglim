function createElementsStandard(data) {
  const main = document.querySelector(".content-principal");
  const section = document.createElement("section");

  section.classList.add("section-jobs");
  main.appendChild(section);

  data.forEach(e => {
    const article = document.createElement("article");
    const divContainer = document.createElement("div");
    const h3 = document.createElement("h3");
    const divCategories = document.createElement("div");
    const smallCompany = document.createElement("small");
    const smallLocation = document.createElement("small");
    const p = document.createElement("p");
    const divFooter = document.createElement("div");
    const smallJourney = document.createElement("small");
    const button = document.createElement("button");

    article.classList.add("article-cards");
    divContainer.classList.add("container-mobile");
    divCategories.classList.add("categories");
    smallCompany.classList.add("company");
    smallLocation.classList.add("local");
    divFooter.classList.add("footer-card");
    button.classList.add("btn-click");

    button.id = e.id;
    h3.innerText = e.title;
    smallCompany.innerText = e.enterprise;
    smallLocation.innerText = e.location;
    p.innerText = e.descrition;
    smallJourney.innerText = e.modalities;
    button.innerText = "Candidatar";

    button.addEventListener("click", event => {
      if (event.target.innerText == "Candidatar") {
        button.innerHTML = "";
        button.innerText = "Remover candidatura";
      } else {
        button.innerHTML = "";
        button.innerText = "Candidatar";
      }
    });

    divCategories.append(smallCompany, smallLocation);
    divFooter.append(smallJourney, button);
    divContainer.append(h3, divCategories, p, divFooter);
    article.appendChild(divContainer);
    section.appendChild(article);
  });
}

createElementsStandard(jobsData);

function createElementsFavorites(data) {
  const ul = document.querySelector(".cards-aside");
  ul.innerHTML = "";

  data.forEach(e => {
    const li = document.createElement("li");
    const divContainer = document.createElement("div");
    const divHeader = document.createElement("div");
    const h4 = document.createElement("h4");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const divSmall = document.createElement("div");
    const smallInst = document.createElement("small");
    const smallLocation = document.createElement("small");

    divContainer.classList.add("container-aside");
    divHeader.classList.add("header-card-aside");
    divSmall.classList.add("card-small");
    smallInst.classList.add("companies");
    smallLocation.classList.add("location");
    li.classList.add("favorites");

    img.id = e.id;
    button.id = e.id;
    li.id = e.id;

    button.addEventListener("click", event => {
      const btnCandidatar = document.querySelectorAll(".btn-click");
      btnCandidatar.forEach(e => {
        if (e.id == event.target.id) {
          e.innerText = "Candidatar";
        }
      });

      const index = favoriteItems.findIndex(e => {
        return e.id == event.target.id;
      });

      favoriteItems.splice(index, 1);
      li.remove();

      if (!favoriteItems.length) {
        createVazio();
      }

      const setFavorite = JSON.stringify(favoriteItems);
      localStorage.setItem("favoritos", setFavorite);
    });

    img.src = "../assets/img/trash.png";
    img.alt = "Remover";
    smallInst.innerText = e.enterprise;
    smallLocation.innerText = e.location;
    h4.innerText = e.title;

    button.appendChild(img);
    divHeader.append(h4, button);
    divSmall.append(smallInst, smallLocation);
    divContainer.append(divHeader, divSmall);
    li.appendChild(divContainer);
    ul.appendChild(li);
  });
}

function createVazio() {
  const divzinha = document.querySelector(".create-vazio");
  const p = document.createElement("p");
  const spanOne = document.createElement("span");
  const spanTwo = document.createElement("span");
  const spanThree = document.createElement("span");
  const spanFour = document.createElement("span");
  const spanFive = document.createElement("span");
  const spanSix = document.createElement("span");

  p.classList.add("paragraph-null");
  spanOne.classList.add("span-1");
  spanTwo.classList.add("span-2");
  spanThree.classList.add("span-3");
  spanFour.classList.add("span-4");
  spanFive.classList.add("span-5");
  spanSix.classList.add("span-6");

  p.innerText = "Você ainda não aplicou para nenhuma vaga";
  spanSix.innerText = "abc";

  divzinha.append(p, spanOne, spanTwo, spanThree, spanFour, spanFive, spanSix);
}
