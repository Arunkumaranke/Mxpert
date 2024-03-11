import { AUTHENTICATED, NOT_AUTHENTICATED, SET_PRODUCT_LIST } from "./constant";



export const productList =()=>{
    return {
        type:SET_PRODUCT_LIST,
  
    };
}
// const setToken = (token) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
// };
// const deleteToken = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("lastLoginTime");
//   }
export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token");
    }
};

