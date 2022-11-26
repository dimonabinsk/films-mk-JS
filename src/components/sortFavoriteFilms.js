export function sortFavoriteFilms(films) {
  return films
    .filter(({ isFavorite }) => isFavorite)
    .sort((a, b) => b.id - a.id);
}
