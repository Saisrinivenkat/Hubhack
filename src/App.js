import './App.css';
import Home from './Page/Home/home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import User from './Page/users/User';
import Repo from './Page/users/Repo';
import Search from './Page/users/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/users' component={User}/>
          <Route path='/repo' component={Repo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
