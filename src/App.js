import "./App.css";
import { Route, Switch } from 'react-router-dom';

// import components
import Admin from './components/admin/Admin';

function App() {
  return (
    <Switch>
      <Route exact path="/admin" component={Admin}/>
    </Switch>
  );
}

export default App;
