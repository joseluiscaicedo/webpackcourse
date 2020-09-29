import React, {useState} from 'react'
import data from './data.json';
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

console.log(data)
function App() {
  const [loaderList,setLoaderList] = useState([])
  function manejador(){
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <h1>testing Url-loader</h1>
      <h3>img, video and fonts</h3>
      <br />
      <video src={video} width={360} controls poster={logo}> </video>
      <p>
        <img src={logo} alt="logo" width={100}/>
      </p>
    </div>
  )
}
export default App;