import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import Albums from './components/Albums';
import ErrorPage from './components/Error';
import ReviewForm from './components/ReviewForm';
import AlbumForm from './components/AlbumForm';

class App extends Component {

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route exact path="/albums" component={ Albums } />
          <Route exact path="/albums/new" component={ AlbumForm } />
          <Route exact path="/reviews" component={ Reviews } />
          <Route exact path="/reviews/new" component={ ReviewForm } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;