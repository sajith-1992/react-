import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Class from './components/Class';
import Hello from './components/Hello';



function App() {
  return (
    <div className="App">
   <Greet name="sajith" />
   <Greet name ="abijith"/>
   <Greet name = "aliyan"/>
   <Class/>
   <Hello/>

    </div>
  );
}

export default App;
