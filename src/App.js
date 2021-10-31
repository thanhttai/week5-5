import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SearchPages from './pages/SearchPages'
import MoviePages from './pages/MoviePages'

function App() {


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search/:id" component={SearchPages} />
        <Route exact path="/movie/:id" component={MoviePages} />

      </Switch>
    </div>
  );
}

export default App;
