import React, {useState} from 'react'
import data from './data.json';
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'
console.log(data)
function App() {
  const [loaderList,setLoaderList] = useState([])
  function manejador(){
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <p className="less">This is less</p>
      <p className="sass">This is sass</p>
      <p className="stylus">This is stylus</p>
      <h1>testing Url-loader..</h1>
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