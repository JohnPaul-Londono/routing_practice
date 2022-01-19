import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Word_Number from './views/Word_Number';
import Background from './views/Background';



function App() {
  return (
    <div className="App">
      <h1 className='name'>Jon London Routing Practice</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/home">
            <Home />
          </Route>
          <Route exact path ="/:word/:color1/:color2">
            <Background />
          </Route>
          <Route exact path ="/:word">
            <Word_Number />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
