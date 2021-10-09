import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LazyLoader from './componenets/LazyLoader';
import 'font-awesome/css/font-awesome.css'
import './App.scss'

// Configure routes
const Home = React.lazy(() => import('./containers/Pages/Home'));



class App extends Component {
  render() {
    return (
      <Suspense fallback={<LazyLoader/>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
