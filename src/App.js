  import React,{useState} from 'react';
  import './App.css';
  function App(){
    
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    var[bmi,setBmi]=useState();
    const[msg,setMsg]=useState("")
    const[weightunit,setWeightunit]=useState("Kg")
    const[heightunit,setHeightunit]=useState("Metre")
    const weightfunc=e=>{
      setWeight(e.target.value);
    }
    const heightfunc=e=>{
      setHeight(e.target.value);
    }
    
    const calc=()=>{
    if(weightunit==="Kg")  
    {
    bmi=weight/(height*height);
    }
    else if(weightunit==="Pound")
    {
      bmi=703*(weight/(height*height*144))
    }
    setBmi(bmi);
    let m;
    if(bmi<18.5)
    {
      m="underweight";
    }
    else if((bmi>=18.5) && (bmi<=24.9))
    {
      m="healthy";
    }
    else if((bmi>=25)&&(bmi<=29.9))
    {
      m="Overweight";
    }
    else if(bmi>29.9)
    {
      m="Obese";
    }
    setMsg(m);
    }
    const US=()=>{
      setHeightunit("Feet")
      setWeightunit("Pound")
    }
    const Metric=()=>{
      setHeightunit("Metre")
      setWeightunit("Kg")
    }
  return (
   <>
    <div className="header">
      <div className="bmi" >BMI Tracker</div>
      <div>
        
        <button className='toggle' onClick={US}>Units in US</button>
      </div>
      <div><button className='toggle' onClick={Metric}>Units in Metric</button></div>
    </div> 
      <div> 
        <div>{weightunit}</div>
        <input className="searchbar form-control me-2" type="text"  value={weight} onChange={weightfunc}></input>
      </div> 
      <div>
        <div>{heightunit}</div>
        <input className="searchbar form-control me-2" type="text" value={height}  onChange={heightfunc}></input>
      </div>
     <div>
      <button className="calculate btn btn-primary" type="submit" onClick={calc}>Calculate BMI</button>
     </div>
     <div className="msg">
         BMI={bmi}
         <div className="msg">{msg}</div>
     </div>
     
   </>
  );
}
export default App;