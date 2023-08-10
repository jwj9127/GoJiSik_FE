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
import EcommercePage from './pages/Ecommerce';
import MoviePage from './pages/MoviePage';
import CafePage from './pages/CafePage';
import FoodPage from './pages/FoodPage';
import DessertPage from './pages/DessertPage';
import Cgv from './pages/Movie/Cgv';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/goverment24' element={<Goverment/>}/>
        <Route path='/post' element={<Postpages/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/post/postWrite' element={<PostWritepage/>}/>  
        <Route path='/login' element={<Login/>}/>
        <Route path='/postpage' element={<Postpages/>}/>
        <Route path='/joinpage' element={<Joinpage/>}/>
        <Route path='/movie' element={<MoviePage/>}/>
        <Route path='/cgv' element={<Cgv/>}/>
        <Route path='/cafe' element={<CafePage/>}/>
        <Route path='/food' element={<FoodPage/>}/>
        <Route path='/dessert' element={<DessertPage/>}/>
        <Route path='/eCormmerce' element={<EcommercePage/>}/>
        <Route path="/myPage" element = {<MyPage />}></Route>
        <Route path="/postHistoryPage" element = {<PostHistoryPage />}></Route>
        <Route path="/answerHistoryPage" element = {<AnswerHistoryPage />}></Route>
        <Route path="/informationPage" element = {<InformationPage />}></Route>
        <Route path="/withdrawal" element = {<Withdrawal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
