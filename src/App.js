import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Class from './components/Class';
import Hello from './components/Hello';



function App() {
  return (
    <div className="App">
   {/* <Greet name="sajith">
    <p>this is sajith children</p>
   </Greet>
   <Greet name ="abijith"><button>click me</button></Greet>
   <Greet name = "aliyan"/> */}
   <Class name="sajith" ><p>this is sajith</p></Class>
   <Class name ="abijith"/>
   <Class name="hey"/>
   <Hello/>

    </div>
  );
}

export default App;
