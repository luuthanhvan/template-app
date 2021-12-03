import "./App.css";
import { Route, Switch, } from 'react-router-dom';
// import components
import Admin from './components/admin/Admin';
import Home from './components/home/Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/admin" component={Admin} exact/>
    </Switch>
  );
}

export default App;
