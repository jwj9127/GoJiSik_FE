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
import Shoppingmall from './pages/Ecommerce/Shoppingmall';
import KioskPage from './pages/Kiosk/KioskPage';
import EcommercePage from './pages/Ecommerce/EcommercePage';
import Agreepage from './pages/Agreepage';
import ModifyUserPage from './pages/MyPage/ModifyUserPage';
import Elevne_street from './pages/Ecommerce/Shoppingmall/Eleven_street';
import Gmarket from './pages/Ecommerce/Shoppingmall/Gmarket';
import Coupang from './pages/Ecommerce/Shoppingmall/Coupang';
import Naver from './pages/Ecommerce/Shoppingmall/Naver';
import Interpark from './pages/Ecommerce/Airplane/Interpark';
import Skyscanner from './pages/Ecommerce/Airplane/Skyscanner';
import Trip from './pages/Ecommerce/Airplane/Trip';
import Hotels_combine from './pages/Ecommerce/Place/Hotels_combine';
import How from './pages/Ecommerce/Place/How';
import Yanolja from './pages/Ecommerce/Place/Yanolja';
import Lightning from './pages/Ecommerce/Used_transaction/Lightning';

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
        <Route path='/eleven_street' element={<Elevne_street />} />
        <Route path='/gmarket' element={<Gmarket />} />
        <Route path='/coupang' element={<Coupang />} />
        <Route path='/naver_shopping' element={<Naver />} />
        <Route path='/lightning' element={<Lightning />} />
        <Route path='/interpark' element={<Interpark />} />
        <Route path='/skyscanner' element={<Skyscanner />} />
        <Route path='/Trip' element={<Trip />} />
        <Route path='/hotels_combine' element={<Hotels_combine />} />
        <Route path='/how' element={<How />} />
        <Route path='/yanolja' element={<Yanolja />} />
        <Route path='/used_transaction' element={<Used_transaction />} />
        <Route path='/airplane' element={<Airplane />} />
        <Route path='/place' element={<Place />} />
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/postHistoryPage" element={<PostHistoryPage />}></Route>
        <Route path="/answerHistoryPage" element={<AnswerHistoryPage />}></Route>
        <Route path="/modifyUserPage" element={<ModifyUserPage />}></Route>
        <Route path="/JuminPage" element={<JuminPage />}></Route>
        <Route path="/Year" element={<Year />}></Route>
        <Route path="/Family" element={<Family />}></Route>
        <Route path="/kiosk" element={<KioskPage />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Cafe" element={<Cafe />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/Dessert" element={<Dessert />}></Route>
        <Route path="/Cgv" element={<Cgv />}></Route>
        <Route path='/Agreepage' element={<Agreepage />} />
      </Routes>
    </div>
  );
}

export default App;
