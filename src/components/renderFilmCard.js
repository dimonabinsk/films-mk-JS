// Отрисовка карточки фильма

import IMG_Favorite from "../../public/img/favorite.png";
import IMG_notFavorite from "../../public/img/notFavorite.png";

export function renderFilmCard(film, targetContainer) {
  // console.log(targetContainer)
  const { imgUrl, movieName, releaseYear, isFavorite } = film;
  // console.log(imgUrl, movieName)
  const filmCardDivHTML = document.createElement("div");
  filmCardDivHTML.className = "film-card";

  const filmImgHTML = document.createElement("img");
  filmImgHTML.className = "film-card__poster";
  filmImgHTML.src = imgUrl;

  const filmCardTitleHTML = document.createElement("div");
  filmCardTitleHTML.className = "film-card__title";
  filmCardTitleHTML.textContent = movieName;

  const filmCardYearHTML = document.createElement("div");
  filmCardYearHTML.className = "film-card__year";
  filmCardYearHTML.textContent = releaseYear;

  const filmCardBtnHTML = document.createElement("button");
  filmCardBtnHTML.className = "film-card__button";

  const filmBtnImgHTML = document.createElement("img");
  filmBtnImgHTML.className = "film-card__button-img";
  filmBtnImgHTML.src = isFavorite ? IMG_Favorite : IMG_notFavorite;

  filmCardBtnHTML.append(filmBtnImgHTML);
  filmCardDivHTML.append(
    filmImgHTML,
    filmCardTitleHTML,
    filmCardYearHTML,
    filmCardBtnHTML
  );
  targetContainer.append(filmCardDivHTML);
}
