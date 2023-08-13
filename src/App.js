import './App.css';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom';
import Goverment from './components/Goverment';
import PostWritepage from './pages/PostWritepages';
import Main from './pages/Mainpage.js';
import Login from './pages/Login';
import Postpages from './pages/PostPage';
import Joinpage from './pages/Joinpage';
import MyPage from './pages/Mypage';
import PostHistoryPage from "./pages/PostHistoryPage";
import AnswerHistoryPage from "./pages/AnswerHistoryPage";
import InformationPage from "./pages/InformationPage";
import Withdrawal from "./components/Withdrawal";
import KioskPage from '../src/pages/Kiosk/KioskPage';
import Ecommerce from './pages/Ecommerce';
import JuminPage from './pages/goverment/JuminPage';
import Year from './pages/goverment/Year';
import Family from './pages/goverment/Family';
import Movie from './pages/Kiosk/Movie';
import Cafe from './pages/Kiosk/Cafe';
import Food from './pages/Kiosk/Food';
import Dessert from './pages/Kiosk/Dessert';
import Cgv from './pages/Kiosk/KioMovie/Cgv';
import MoviePage from './pages/Kiosk/Movie';
import CafePage from './pages/CafePage';
import FoodPage from './pages/CafePage';
import DessertPage from './pages/Kiosk/Dessert';
import Agreepage from './pages/Agreepage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/goverment24' element={<Goverment/>}/>
          <Route path='/post' element={<Postpages/>} />
          <Route path='/post/postWrite' element={<PostWritepage/>}/>  
          <Route path='/login' element={<Login/>}/>
          <Route path='/joinpage' element={<Joinpage/>}/>
          <Route path='/movie' element={<MoviePage/>}/>
          <Route path='/cgv' element={<Cgv/>}/>
          <Route path='/cafe' element={<CafePage/>}/>
          <Route path='/food' element={<FoodPage/>}/>
          <Route path='/dessert' element={<DessertPage/>}/>
          <Route path='/eCormmerce' element={<Ecommerce/>}/>
          <Route path="/myPage" element = {<MyPage />}></Route>
          <Route path="/postHistoryPage" element = {<PostHistoryPage />}></Route>
          <Route path="/answerHistoryPage" element = {<AnswerHistoryPage />}></Route>
          <Route path="/informationPage" element = {<InformationPage />}></Route>
          <Route path="/withdrawal" element = {<Withdrawal />}></Route>
          <Route path="/JuminPage" element = {<JuminPage />}></Route>
          <Route path="/Year" element = {<Year />}></Route>
          <Route path="/Family" element = {<Family />}></Route>
          <Route path="/Movie" element = {<Movie />}></Route>
          <Route path="/Cafe" element = {<Cafe />}></Route>
          <Route path="/Food" element = {<Food />}></Route>
          <Route path="/Dessert" element = {<Dessert />}></Route>
          <Route path="/Cgv" element = {<Cgv />}></Route>
          <Route path='/Agreepage' element={<Agreepage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
