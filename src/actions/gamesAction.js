import axios from "axios";
import { popularGamesURL } from "../api";

//ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  console.log("heheh");
  console.log(popularData.data.results);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
