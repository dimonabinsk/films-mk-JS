import { fromStorage } from "../storage/fromStorage.js";
import { ALL_FILMS, FAVORITE_FILMS } from "../core/vars/varsAllFilms.js";
import {  sortAllFilmsByIsFavorite } from "./sortAllFilmsByIsFavorite.js";
import { toStorage } from "../storage/toStorage.js";
import { renderFilms } from "./renderFilms.js";
import { sortFavoriteFilms } from "./sortFavoriteFilms.js";

export function handlerLikeBtnClick(listType, filmNumber) {
  const allFilms = fromStorage(listType);
  allFilms[filmNumber].isFavorite = !allFilms[filmNumber].isFavorite;
  // console.log(listType)
  // получаем массив отсортированных фильмов первым по индексу будет isFavorite=true
  const sortedAllFilms = sortAllFilmsByIsFavorite(allFilms);
  // console.log(sortedAllFilms)
  // отправляем в локальную память массив отсортированных фильмов первым по индексу будет isFavorite=true
  toStorage(listType, sortedAllFilms);

  // удаляем контейнер с фильмами из DOM
  const filmListContainerHTML = document.querySelector(".film-cards-container");
  const idContainer = filmListContainerHTML.getAttribute("id");
  const filmListContainerAttributeHTML = document.getElementById(idContainer);
  filmListContainerAttributeHTML.remove();
  // перерисовываем заново список согласно отфильтрованному массиву
  // 	console.log(allFilms)
  switch (idContainer) {
    case ALL_FILMS:
      renderFilms(sortedAllFilms, ALL_FILMS);

      break;
    case FAVORITE_FILMS:
      renderFilms(sortFavoriteFilms(allFilms), FAVORITE_FILMS);

      break;
    default:
      return;
  }
}
