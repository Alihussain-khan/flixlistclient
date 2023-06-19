
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Protect from './Pages/Protect';
import Singin from './Pages/Signin';
import SingleMovie from './Pages/SingleMovie';
import Category from './Pages/Category';
import UserMovies from './Pages/UserMovies';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Protect/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/single/:id" element={<SingleMovie />} />
      <Route path="/cat/:category" element={<Category />} />
      <Route path='/usermovies' element={<UserMovies/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Singin/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    

  )
  
}

export default App;
