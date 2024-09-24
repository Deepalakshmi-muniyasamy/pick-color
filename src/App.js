
import { useState,useEffect } from "react";
import Clock from './clock.js'

function useTime(){
  const[time,setTime]=useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {setTime(new Date());
    },1000);
    return() =>clearInterval(id);  
  },[]);
  return time;
}

function App(){
  const time = useTime();
  const [color,setColor] = useState('blue');

return(
  <div>
  <p>Pick a Color: {''}</p>
  <select value={color} onChange={e =>setColor(e.target.value)}>
  <option value='blue'>Blue</option>
  <option value='yellow'>yellow</option>
  <option value='green'>Green</option>
  </select>
  <Clock color={color} time={time.toLocaleTimeString()}/>
  </div>

)}
export default App;
