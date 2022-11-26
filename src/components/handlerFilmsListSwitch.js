import { fromStorage } from "../storage/fromStorage.js";
import { renderFilms } from "./renderFilms.js";

// функция-переключатель списков
export function handlerFilmsListSwitch(
  switcherButton,
  allFilms,
  favoriteFilms
) {
  const filmsContainerHTML = document.querySelector(".film-cards-container");
  const filmsCardContainerTitleHTML = document.querySelector(
    ".film-cards-container__title"
  );

  const filterFavoriteFilms = fromStorage(allFilms).filter(
    ({ isFavorite }) => isFavorite
  );

  switch (filmsContainerHTML.id) {
    case allFilms:
      filmsCardContainerTitleHTML.innerHTML = "Любимые фильмы";
      switcherButton.innerHTML = "Все фильмы";
      filmsContainerHTML.remove();
      renderFilms(filterFavoriteFilms, favoriteFilms);
      break;
    case favoriteFilms:
      filmsCardContainerTitleHTML.innerHTML = "Все фильмы";
      switcherButton.innerHTML = "Смотрите любимые фильмы";
      filmsContainerHTML.remove();
      renderFilms(fromStorage(allFilms), allFilms);
      break;
    default:
      break;
  }
}
