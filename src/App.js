import './App.css';
import Home from './Page/Home/home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
