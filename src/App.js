import './App.css';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom';
import Goverment from './components/Goverment'
import PostWritepage from './pages/PostWritepages';
import Main from './pages/Mainpage.js'
import Ecommerce from './pages/Ecommerce';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Postpages from './pages/PostPage';
import Joinpage from './pages/Joinpage';
import MyPage from './pages/Mypage'
import PostHistoryPage from "./pages/PostHistoryPage";
import AnswerHistoryPage from "./pages/AnswerHistoryPage";
import InformationPage from "./pages/InformationPage";
import Withdrawal from "./components/Withdrawal";
import KioskPage from './pages/KioskPage';
import EcommercePage from './pages/EcommercePage';
import JuminPage from './goverment/JuminPage';
import Year from './goverment/Year';
import Family from './goverment/Family';

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
        <Route path='/movie' element={<KioskPage/>}/>
        <Route path='/ecommercePage' element={<EcommercePage/>}/>
        <Route path="/myPage" element = {<MyPage />}></Route>
        <Route path="/postHistoryPage" element = {<PostHistoryPage />}></Route>
        <Route path="/answerHistoryPage" element = {<AnswerHistoryPage />}></Route>
        <Route path="/informationPage" element = {<InformationPage />}></Route>
        <Route path="/withdrawal" element = {<Withdrawal />}></Route>
        <Route path="/JuminPage" element = {<JuminPage />}></Route>
        <Route path="/Year" element = {<Year />}></Route>
        <Route path="/Family" element = {<Family />}></Route>
      </Routes>
    </div>
  );
}

export default App;
