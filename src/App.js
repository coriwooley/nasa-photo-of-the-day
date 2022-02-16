import axios from "axios";
import React, {useEffect, useState} from "react";
import "./App.css";
import {API_KEY} from './Constants'
import defaultData from "./defaultData";
import Media from "./content";

function App() {
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      setData(res.data);
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      < Media content={data} mediaType={data.media_type} explanation={data.explanation} url={data.url} title={data.title} date={data.date}/>
    </div>
  );
}

export default App;
