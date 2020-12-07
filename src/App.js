import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Filter } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route sensitive strict exact path="/" component={Home} />
        <Route sensitive strict exact path="/filter" component={Filter} />
      </Switch>
    </Router>
  );
}

export default App;
