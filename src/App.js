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

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/goverment24' element={<Goverment/>}/>
        <Route path='/postwrite' element={<PostWritepage/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/kiosk' element={<Kiosk/>}/>
        <Route path='/eCormmerce' element={<Ecommerce/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/postpage' element={<Postpages/>}/>
        <Route path='/joinpage' element={<Joinpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
