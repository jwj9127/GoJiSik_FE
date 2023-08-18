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
import Megabox from './pages/Kiosk/KioMovie/Megabox';
import Lotte from './pages/Kiosk/KioMovie/Lotte';
import Two from './pages/Kiosk/Cafe/Two';
import Mega from './pages/Kiosk/Cafe/Mega';
import Ediya from './pages/Kiosk/Cafe/Ediya';
import Angel from './pages/Kiosk/Cafe/Angel';
import Paikdabang from './pages/Kiosk/Cafe/Paikdabang';
import Hollys from './pages/Kiosk/Cafe/Hollys';
import Lotteria from './pages/Kiosk/Food/Lotteria';
import Mom from './pages/Kiosk/Food/Mom';
import Mcdo from './pages/Kiosk/Food/Mcdo';
import Burger from './pages/Kiosk/Food/Burger';
import Kfc from './pages/Kiosk/Food/Kfc';
import Sulbing from './pages/Kiosk/Dessert/Sulbing';
import Br from './pages/Kiosk/Dessert/Br';
import Waffle from './pages/Kiosk/Dessert/Waffle';
import Used_transaction from './pages/Ecommerce/Used_transaction';
import Airplane from './pages/Ecommerce/Airplane';
import Place from './pages/Ecommerce/Place';
import Shoppingmall from './pages/Ecommerce/Shoppingmall';
import KioskPage from './pages/Kiosk/KioskPage';
import Agreepage from './pages/Agreepage';
import Transfer from './pages/goverment/Transfer';
import Passport from './pages/goverment/Passport';
import Immigration from './pages/goverment/Immigration';
import Wokr from './pages/goverment/Work';
import Generation from './pages/goverment/Generation';
import Income from './pages/goverment/Income';
import Car from './pages/goverment/Car';
import Covid from './pages/goverment/Covid';
import Ground from './pages/goverment/Ground';
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
import EcommercePage from './pages/Ecommerce/EcommercePage';
import PostDetails from './pages/PostDetails';
import UserSearchPage from './pages/MyPage/UserSearchPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/goverment24' element={<Goverment/>}/>
          <Route path='/kiosk' element={<KioskPage/>}/>
          <Route path='/ecommerce' element={<EcommercePage/>}/>
          <Route path='/post/postWrite' element={<PostWritepage/>}/>  
          <Route path='/login' element={<Login/>}/>
          <Route path='/postpage' element={<Postpages/>}/>
          <Route path='/postdetails' element={<PostDetails/>}/>
          <Route path='/joinpage' element={<Joinpage/>}/>
          <Route path="/postHistoryPage" element = {<PostHistoryPage />}></Route>
          <Route path="/answerHistoryPage" element = {<AnswerHistoryPage />}></Route>
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
          <Route path="/Two" element = {<Two />}></Route>
          <Route path="/Mega" element = {<Mega />}></Route>
          <Route path="/Ediya" element = {<Ediya />}></Route>
          <Route path="/Angel" element = {<Angel />}></Route>
          <Route path="/Paikdabang" element = {<Paikdabang />}></Route>
          <Route path="/Hollys" element = {<Hollys />}></Route>
          <Route path="/Lotteria" element = {<Lotteria />}></Route>
          <Route path="/Mom" element = {<Mom />}></Route>
          <Route path="/Mcdo" element = {<Mcdo />}></Route>
          <Route path="/Burger" element = {<Burger />}></Route>
          <Route path="/Kfc" element = {<Kfc />}></Route>
          <Route path="/Sulbing" element = {<Sulbing />}></Route>
          <Route path="/Br" element = {<Br />}></Route>
          <Route path="/Waffle" element = {<Waffle />}></Route>
          <Route path='/goverment24' element={<Goverment />} />
          <Route path='/main' element={<Main />} />
          <Route path='/post/postWrite' element={<PostWritepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/joinpage' element={<Joinpage />} />
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
          <Route path="/userSearchPage" element={<UserSearchPage />}></Route>
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
           <Route path='/Transfer' element={<Transfer />} />
          <Route path='/Passport' element={<Passport />} />
          <Route path='/Immigration' element={<Immigration />} />
          <Route path='/Work' element={<Wokr/>} />
          <Route path='/Generation' element={<Generation/>} />
          <Route path='/Income' element={<Income/>} />
          <Route path='/Car' element={<Car/>} />
          <Route path='/Covid' element={<Covid/>} />
          <Route path='/Ground' element={<Ground/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;