import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'


function App() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
 
        (error) => {
          console.log(error)
        }
      )
  return (
    <Router>
      <Switch>
        <Route path="/hola">
          <div>
            mundo
          </div>
        </Route>
        <Route path="">
          <div>
            hola mundo
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
