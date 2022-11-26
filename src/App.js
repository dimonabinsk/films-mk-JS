import { renderFilms } from "./components/renderFilms.js";
import { filmsMock } from "./core/filmsMock.js";
import { ALL_FILMS, FAVORITE_FILMS } from "./core/vars/varsAllFilms.js";
import { fromStorage } from "./storage/fromStorage.js";
import { toStorage } from "./storage/toStorage.js";
import { handlerFilmsListSwitch } from "./components/handlerFilmsListSwitch.js";
import { listenerLikeButtons } from "./components/listenerLikeButtons.js";

export function render() {
  if (!fromStorage(ALL_FILMS)) {
    toStorage(ALL_FILMS, filmsMock);
  }
  renderFilms(fromStorage(ALL_FILMS), ALL_FILMS);

  // функция-переключатель списков
  const favoritesFilmsBtnHTML = document.querySelector(
    ".film-cards-container__favorite-films-btn"
  );
  favoritesFilmsBtnHTML.addEventListener("click", () => {
    handlerFilmsListSwitch(favoritesFilmsBtnHTML, ALL_FILMS, FAVORITE_FILMS);
  });

  listenerLikeButtons();
}
