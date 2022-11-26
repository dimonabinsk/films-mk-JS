import { renderFilmCard } from "./renderFilmCard.js";
import { listenerLikeButtons } from "./listenerLikeButtons.js";
// Функция рендер списка фильмов
export function renderFilms(filmsList, listType) {
  const favoriteContainerDivHTML = document.querySelector(".films-container");
  // console.log(favoriteContainerDivHTML)
  // console.log(filmsList)

  // создаем контейнер для списка фильмов
  const filmCardsContainerDivHTML = document.createElement("div");
  filmCardsContainerDivHTML.className = "film-cards-container";
  filmCardsContainerDivHTML.setAttribute("id", listType);

  if (filmsList.length) {
    filmsList.forEach((film) => {
      renderFilmCard(film, filmCardsContainerDivHTML);
    });
  } else {
    filmCardsContainerDivHTML.innerHTML = `<div>Список любимых фильмов пуст</div>`;
  }

  favoriteContainerDivHTML.append(filmCardsContainerDivHTML);
  listenerLikeButtons();
}
