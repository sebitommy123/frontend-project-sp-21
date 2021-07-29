import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/listing/:id">
          <ListingPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
