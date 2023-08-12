import './App.css';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom';
import Goverment from './components/Goverment'
import PostWritepage from './pages/PostWritepages';
import Main from './pages/Mainpage.js'
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Postpages from './pages/PostPage';
import Joinpage from './pages/Joinpage';
import MyPage from './pages/Mypage'
import PostHistoryPage from "./pages/PostHistoryPage";
import AnswerHistoryPage from "./pages/AnswerHistoryPage";
import InformationPage from "./pages/InformationPage";
import Withdrawal from "./components/Withdrawal";
import KioskPage from '../src/pages/Kiosk/KioskPage';
import EcommercePage from './pages/EcommercePage';
import JuminPage from './pages/goverment/JuminPage';
import Year from './pages/goverment/Year';
import Family from './pages/goverment/Family';
import Movie from './pages/Kiosk/Movie';
import Cafe from './pages/Kiosk/Cafe';
import Food from './pages/Kiosk/Food';
import Dessert from './pages/Kiosk/Dessert';
import Cgv from './pages/Kiosk/KioMovie/Cgv';
import Megabox from './pages/Kiosk/KioMovie/Megabox';
import Lotte from './pages/Kiosk/KioMovie/Lotte';
import Cineq from './pages/Kiosk/KioMovie/Cineq';
import Two from './pages/Kiosk/Cafe/Two';
import Mega from './pages/Kiosk/Cafe/Mega';
import Ediya from './pages/Kiosk/Cafe/Ediya';
import Angel from './pages/Kiosk/Cafe/Angel';
import Paikdabang from './pages/Kiosk/Cafe/Paikdabang';
import Hollys from './pages/Kiosk/Cafe/Hollys';
import Star from './pages/Kiosk/Cafe/Star';
import Lotteria from './pages/Kiosk/Food/Lotteria';
import Mom from './pages/Kiosk/Food/Mom';
import Mcdo from './pages/Kiosk/Food/Mcdo';
import Burger from './pages/Kiosk/Food/Burger';
import Kfc from './pages/Kiosk/Food/Kfc';
import Sulbing from './pages/Kiosk/Dessert/Sulbing';
import Br from './pages/Kiosk/Dessert/Br';
import Waffle from './pages/Kiosk/Dessert/Waffle';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/goverment24' element={<Goverment/>}/>
        <Route path='/post' element={<Postpages/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/kiosk' element={<KioskPage/>}/>
        <Route path='/eCormmerce' element={<EcommercePage/>}/>
        <Route path='/post/postWrite' element={<PostWritepage/>}/>  
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/postpage' element={<Postpages/>}/>
        <Route path='/joinpage' element={<Joinpage/>}/>
        <Route path='/ecommercePage' element={<EcommercePage/>}/>
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
        <Route path="/Megabox" element = {<Megabox />}></Route>
        <Route path="/Lotte" element = {<Lotte />}></Route>
        <Route path="/Lotte" element = {<Cineq />}></Route>
        <Route path="/Two" element = {<Two />}></Route>
        <Route path="/Mega" element = {<Mega />}></Route>
        <Route path="/Ediya" element = {<Ediya />}></Route>
        <Route path="/Angel" element = {<Angel />}></Route>
        <Route path="/Paikdabang" element = {<Paikdabang />}></Route>
        <Route path="/Hollys" element = {<Hollys />}></Route>
        <Route path="/Star" element = {<Star />}></Route>
        <Route path="/Lotteria" element = {<Lotteria />}></Route>
        <Route path="/Mom" element = {<Mom />}></Route>
        <Route path="/Mcdo" element = {<Mcdo />}></Route>
        <Route path="/Burger" element = {<Burger />}></Route>
        <Route path="/Kfc" element = {<Kfc />}></Route>
        <Route path="/Sulbing" element = {<Sulbing />}></Route>
        <Route path="/Br" element = {<Br />}></Route>
        <Route path="/Waffle" element = {<Waffle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
