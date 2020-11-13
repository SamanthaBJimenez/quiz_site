// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Err from './components/Error';
import Footer from './components/Footer';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Quizzes from './components/Quizzes';
import Music from './components/Music';
import Movies from './components/Movies';
import Love from './components/Love';
import Food from './components/Food';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"}>
          <Landing/>
        </Route>
        <Route exact path={"/quizzes"}>
          <Quizzes/>
        </Route>
        <Route exact path={"/quizzes/food"}>
          <Food/>
        </Route>
        <Route exact path={"/quizzes/love"}>
          <Love/>
        </Route>
        <Route exact path={"/quizzes/movies"}>
          <Movies/>
        </Route>
        <Route exact path={"/quizzes/music"}>
          <Music/>
        </Route>
        <Route path={"*"}>
          <Err/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
