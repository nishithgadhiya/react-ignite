//Base URL
const base_url = `https://api.rawg.io/api/`;

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
const currentDay = ("0" + new Date().getDate()).slice(-2);
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
//Games Screenshot
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
//Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_RAWG_API}&search=${game_name}&page_size=9`;
