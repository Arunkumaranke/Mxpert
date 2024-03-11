import {LOGIN_USER, SET_PRODUCT_LIST, NOT_AUTHENTICATED,AUTHENTICATED} from "./constant"

export const tableData= (data=[], action) => {

    switch(action.type){
        
        case SET_PRODUCT_LIST:
            return [...action.data] 
        default:
            return data  
    }
   
   
}
const intitialState = {
    authenticated: false
  };
export const userData= (state=intitialState, action) => {

    switch(action.type){
        
        case LOGIN_USER:
      return { ...state, authenticated: true };

        default:
            return state;  
    }
   
   
}

const initialState = {
    authChecked: false,
    loggedIn: false,
    currentUser: {}
  };
  
  export function authorization(state = initialState, action) {
    switch (action.type) {
      case AUTHENTICATED:
        return {
          authChecked: true,
          loggedIn: true,
          currentUser: action.payload,
        };
      case NOT_AUTHENTICATED:
        return {
          authChecked: true,
          loggedIn: false,
          currentUser: {}
        };
      default:
        return state;
    }
  }