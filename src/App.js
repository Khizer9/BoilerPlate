import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    // <BrowserRouter>
    // <div className="App">
    //   <Switch>
    //     <Route exact path="/" component={Home}/>
    //     <Route path="/login" component={Login}/>
    //     <Route exact path="/register" component={Register}/>
    //   </Switch>
    //   </div>
   // </BrowserRouter>

    <div className="App">
      <h1>Hello</h1>
    </div>
         
 
  );
}

export default App;
