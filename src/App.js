import './App.css';
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom';
import Goverment from './components/Goverment';
import PostWritepage from './pages/PostWritepages';
import Main from './pages/Mainpage.js';
import Login from './pages/Login';
import Postpages from './pages/PostPage';
import Joinpage from './pages/Joinpage';
import MyPage from './pages/MyPage/MyPage';
import PostHistoryPage from "./pages/MyPage/PostHistoryPage";
import AnswerHistoryPage from "./pages/MyPage/AnswerHistoryPage";
import InformationPage from "./pages/MyPage/InformationPage";
import Withdrawal from "./components/Withdrawal";
import JuminPage from './pages/goverment/JuminPage';
import Year from './pages/goverment/Year';
import Family from './pages/goverment/Family';
import Movie from './pages/Kiosk/Movie';
import Cafe from './pages/Kiosk/Cafe';
import Food from './pages/Kiosk/Food';
import Dessert from './pages/Kiosk/Dessert';
import Cgv from './pages/Kiosk/KioMovie/Cgv';
import Used_transaction from './pages/Ecommerce/Used_transaction';
import Airplane from './pages/Ecommerce/Airplane';
import Place from './pages/Ecommerce/Place';
import Public_transport from './pages/Ecommerce/Public_transport';
import Shoppingmall from './pages/Ecommerce/Shoppingmall';
import KioskPage from './pages/Kiosk/KioskPage';
import EcommercePage from './pages/Ecommerce/EcommercePage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/goverment24' element={<Goverment />} />
        <Route path='/post' element={<Postpages />} />
        <Route path='/main' element={<Main />} />
        <Route path='/post/postWrite' element={<PostWritepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/postpage' element={<Postpages />} />
        <Route path='/joinpage' element={<Joinpage />} />
        <Route path='/ecommerce' element={<EcommercePage />} />
        <Route path='/shoppingmall' element={<Shoppingmall />} />
        <Route path='/used_transaction' element={<Used_transaction />} />
        <Route path='/airplane' element={<Airplane />} />
        <Route path='/place' element={<Place />} />
        <Route path='/public_transport' element={<Public_transport />} />
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/postHistoryPage" element={<PostHistoryPage />}></Route>
        <Route path="/answerHistoryPage" element={<AnswerHistoryPage />}></Route>
        <Route path="/informationPage" element={<InformationPage />}></Route>
        <Route path="/withdrawal" element={<Withdrawal />}></Route>
        <Route path="/JuminPage" element={<JuminPage />}></Route>
        <Route path="/Year" element={<Year />}></Route>
        <Route path="/Family" element={<Family />}></Route>
        <Route path="/kiosk" element={<KioskPage />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Cafe" element={<Cafe />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/Dessert" element={<Dessert />}></Route>
        <Route path="/Cgv" element={<Cgv />}></Route>
      </Routes>
    </div>
  );
}

export default App;
