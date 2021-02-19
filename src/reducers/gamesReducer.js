const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//Action creator
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

export default gamesReducer;
