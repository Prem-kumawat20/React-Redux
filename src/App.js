import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import { incNumber,decNumber } from './Actions/Index';
function App() {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (

  <div className="App">
   <div> 
    <h1>Increment/Decrement</h1>
    <h4>using react and redux</h4>
    <div>
      <a  title='decrement' style={{padding:'10px'}} onClick={()=>dispatch(decNumber())}>-</a>
      {/* <button onClick={()=>dispatch(decNumber())}>+</button> */}
      <input type="text" value={mystate} />
      <a  title='increment' style={{padding:'10px'}} onClick={()=>dispatch(incNumber())}>+</a>
    </div>
   </div>

    </div>
  );
}

export default App;
