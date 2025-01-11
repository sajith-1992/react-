import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Class from './components/Class';
import Hello from './components/Hello';
import State from './components/State';
import Counter from './components/Counter';
import Decon from './components/Destructuringporps'



function App() {
  return (
    <div className="App">
   
     <Counter/>
     <Decon name="sajith" heroName="hello"></Decon>
     <Class name="whiernsdklfnlkasjdflkj"></Class>
    </div>
  );
}

export default App;
