
import React,{useEffect, useState}from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [inputCity,setinputCity]=useState("")
  const [ data,setData] =useState({})
  const getwatherDetails =(cityName)=>{
    if(!cityName) return
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+ cityName +  "&lat=44.33&lon=10.99&appid=8ed3f99b990f0729259666db523764eb"
   axios.get(url).then((response)=>{
    setData(response.data)
    console.log("response",response)
   }).catch((err) => {
    console.log("error",err)
   })
  }
  const handlchageinput=(e)=>{
    setinputCity(e.target.value)

  }

   const handlesearch=()=>{
    getwatherDetails(inputCity)
   }


  useEffect(() =>{
    getwatherDetails("dhaka")
 },[] )
  
  return (
    <div className="app">
      <div className="form-control">
        <input type='text'onChange={handlchageinput} value={inputCity} placeholder='city name'></input>
        <button onClick={handlesearch} >search</button>
      </div>
     
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{Math.floor((data?.main?.temp)-273.2)}°C </h1>
          </div>
          <div className="description">
            <p>{data?.weather?.main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p> feels like :{Math.floor((data?.main?.temp)-273.2)}°C</p>
          </div>
          <div className="humidity">
            <p>humidity : {data?.main?.humidity}%</p>
          </div>
          <div className="wind">
           wind speed : {Math.floor((data?.wind?.speed)/.62)} mph 
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
