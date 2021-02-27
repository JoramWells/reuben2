import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import IndexRoutes from './components/IndexRoutes';
import Navigation from './components/Navigation';
import Details from './components/Details';
import Header from "./components/Header";
import Contact from './components/Contact';




function App() {
  return (
<>
<Router>
<Navigation />
<Header />
  <Route path="/" exact component={IndexRoutes} />
  <Route path="/post" component={Details} />
  <Contact />
</Router>

</>
  );
}

export default App;
