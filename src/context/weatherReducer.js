import Search from "../Search";
import { CURR_CITIES, SORT, SEARCH, CLEAR_SEARCH } from "./types";
export default function reducer(state, { type, payload }) {
  switch (type) {
    case CURR_CITIES:
    case SEARCH:
      return {
        ...state,
        currPage: payload,
      };
    case Search:
      return {
        ...state,
        search: payload.search,
        currPage: payload.currPage,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    case SORT:
      return {
        ...state,
        currPage: payload,
      };
    default:
      return state;
  }
}
