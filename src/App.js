
import { useState } from 'react';
import './App.css';
import SlideShow from './SlideShow/SlideShow';

function App() {

  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ]

  const [text, setText] = useState("")
  const [limit,setLimit]=useState(slideImages.length-1);
  const handleLimit = ()=>{
    if(Number(text)<limit){
      setLimit(Number(text))
    }
  }

  const [widthval,setWidthval]=useState("");
  const [heightval,setHeightval]=useState("")
  const [width,setWidth]=useState("650");
  const [height,setHeight]=useState("300")
  
  const handleWidth =(e)=>{
    setWidthval(e.target.value);
  }
  const handleHeight =(e)=>{
    setHeightval(e.target.value);
  }

  const handleContainer =()=>{
    setHeight(heightval);
    setWidth(widthval);
  }

  const [movement,setmovement]=useState(true);
  const handleMovement = (e)=>{
    if(e.target.value === "Manual")
    {
      setmovement(false)
    } 
    else{
      setmovement(true);
    }
  }

  const [delay,setDelay]= useState(1500);
  const handleDelay = (e)=>{
      setDelay(Number(e.target.value));
  }

  const [direction, setDirection] = useState("right");
  const handleDirection = (e)=>{
    setDirection(e.target.value);
  }
  return (
    <div className="App">
      <h1>React SlideShow</h1>
      <div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Choose Number of Images To Be Shown : </h4>
            <input type="number" placeholder='choose number of images shown' value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleLimit}>Add Limit</button>
          </div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Select Width and Height with your choice : </h4>
            <select onChange={handleWidth}>
              <option value="650" key="1">Select Width of Container</option>
              <option value="50" key="50">50px</option>
              <option value="100" key="100">100px</option>
              <option value="200" key="200">200px</option>
              <option value="300" key="300">300px</option>
              <option value="400" key="400">400px</option>
              <option value="500" key="500">500px</option>
              <option value="600" key="600">600px</option>
              <option value="700" key="700">700px</option>
              <option value="800" key="800">800px</option>
              <option value="900" key="900">900px</option>
              <option value="1000" key="1000">1000px</option>
            </select>
            <select onChange={handleHeight}>
              <option value="300" key="1">Select Height of Container</option>
              <option value="50" key="50">50px</option>
              <option value="100" key="100">100px</option>
              <option value="200" key="200">200px</option>
              <option value="300" key="300">300px</option>
              <option value="400" key="400">400px</option>
              <option value="500" key="500">500px</option>
              <option value="600" key="600">600px</option>
              <option value="700" key="700">700px</option>
              <option value="800" key="800">800px</option>
              <option value="900" key="900">900px</option>
              <option value="1000" key="1000">1000px</option>
            </select>
            <button onClick={handleContainer}>Add</button>
          </div>
          <div style={{border: "1px solid gray", padding: "10px"}}>
            <h4>Select Movement with your Choice : </h4>
            <select onChange={handleMovement}>
              <option value="Automatic" key="A">Automatic</option>
              <option value="Manual" key="M">Manual</option>
            </select>
          </div>
          {
          movement && <div style={{border: "1px solid gray", padding: "10px"}}>
             <h4>Select Time Delay : </h4>
             <select onChange={handleDelay}>
               <option value="1500" key="1">Select Delay Time</option>
               <option value="500" key="2">500</option>
               <option value="1000" key="3">1000</option>
               <option value="2000" key="4">2000</option>
               <option value="3000" key="5">3000</option>
               <option value="4000" key="6">4000</option>
               <option value="5000" key="7">5000</option>
             </select>
          </div>
          }
          {
            movement && <div style={{border: "1px solid gray", padding: "10px"}}>
                     <h4>Select Direction Either Right or Left : </h4>
                   <select onChange={handleDirection}>
                     <option value="right" key="right">Right</option>
                     <option value="left" key="left">Left</option>
                   </select>
            </div>
          }
      </div>
      <SlideShow 
        images = {slideImages}
        autoplay = {delay}
        movement={movement}
        direction={direction}
        limit={limit}
        width={width}
        height={height}
      />
    </div>
  );
}

export default App;
