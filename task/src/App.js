import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import Main from './components/Main';
import {Routes, Route, redirect as Redirect,Navigate} from 'react-router-dom'
import DetailPage from './components/DetailPage';
import LoginPage from './components/login';
import { useEffect } from 'react';
import { AUTHENTICATED, NOT_AUTHENTICATED } from './redux/constant';
import axios from 'axios';

function App() {
const dispatch = useDispatch()
  const token = localStorage.getItem("refresh-token");
  const refreshToken =async () => {
    const token = localStorage.getItem('refresh-token')
    try {
      const res = await axios.post("http://localhost:5000/api/refresh", {token});
      res ? dispatch({type: AUTHENTICATED, payload: res}) : dispatch({type: NOT_AUTHENTICATED})
      localStorage.clear();
        localStorage.setItem('user-token', res.data.accessToken);
        localStorage.setItem('refresh-token', res.data.refreshToken);
    } catch (err) {
    }
  }
  useEffect(() => {
    if(window.onbeforeunload){
      refreshToken()
    }
}, []);
const data = useSelector((state) => state.authorization);
  
     
  return (
      <Routes>
        <Route path="/login"  element={<LoginPage />} />
        
        {(data.authChecked ||token) ? <Route element={<Main />}  path='/home' /> : <Route to="/login" />}
        {(data.authChecked || token) ? <Route element={<DetailPage />}  path='/:id' exact /> : <Route to="/login" />}
        <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
       
      </Routes>

  );
}

export default App;
