// слушатель добавления фильмов в избранное
import { handlerLikeBtnClick } from "./handlerLikeBtnClick.js";
import { ALL_FILMS } from "../core/vars/varsAllFilms.js";

export function listenerLikeButtons() {
  const likeBtn = document.querySelectorAll(".film-card__button");

  likeBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => handlerLikeBtnClick(ALL_FILMS, i));
  });
}
