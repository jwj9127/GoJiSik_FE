import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom';
import Goverment from './components/Goverment'
import PostWritepage from './pages/PostWritepages';
import Main from './pages/Mainpage.js'
import Kiosk from './pages/Kiosk';
import Ecommerce from './pages/Ecommerce';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Postpages from './pages/PostPage';
import Joinpage from './pages/Joinpage';
import MyPage from "./pages/MyPage";
import PostHistoryPage from "./pages/PostHistoryPage";
import AnswerHistoryPage from "./pages/AnswerHistoryPage";
import InformationPage from "./pages/InformationPage";
import Withdrawal from "./components/Withdrawal";
import KioskPage from './pages/KioskPage';
import EcommercePage from './pages/EcommercePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/goverment24' element={<Goverment/>}/>
        <Route path='/post' element={<Postpage/>} />
      </Routes>
    </div>
  );
}

export default App;
