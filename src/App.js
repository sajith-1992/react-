import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Class from './components/Class';
import Hello from './components/Hello';
import State from './components/State';
import Counter from './components/Counter';
import Decon from './components/Destructuringporps'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Event from './components/Event';
import Parentcomp from './components/Parentcomp'

import Statements from './components/IfElse';



function App() {
  return (
    <div className="App">
        <Statements/>
      {/* <Parentcomp/> */}
     
     {/* <Counter/>
     <Decon name="sajith" heroName="hello"></Decon>
     <Class name="whiernsdklfnlkasjdflkj"></Class> */}
     {/* <FunctionClick/>
     <ClassClick /> */}
     {/* <Event/> */}
    </div>
  );
}

export default App;
