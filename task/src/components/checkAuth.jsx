import { useDispatch } from "react-redux";
import { AUTHENTICATED, NOT_AUTHENTICATED, SET_PRODUCT_LIST } from "../redux/constant";
import axios from "axios";


export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("refresh-token");
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("refresh-token");
    }
};


export const checkAuth = async (props) => {
    const token = localStorage.getItem('refresh-token')
    try {
      const res = await axios.post("http://localhost:5000/api/refresh", {token});
      res ? props.dispatch({type: AUTHENTICATED, payload: res}) : props.dispatch({type: NOT_AUTHENTICATED})
      localStorage.clear();
        localStorage.setItem('user-token', res.data.accessToken);
        localStorage.setItem('refresh-token', res.data.refreshToken);
    } catch (err) {
      console.log(err);
    }
   };
