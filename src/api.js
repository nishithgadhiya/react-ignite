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
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
