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
  async function manejador(){
    setLoaderList(data.loaders)
    const {alerta}= await import('./alert.js')
    alerta('modulo cargado dinamicamente')
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
      <ul>
        {
          loaderList.map(item=> <Loader{...item} key={item.id}/>)
        }
      </ul>
      <button onClick={manejador}>Mostrar lo aprendido</button>
    </div>
  )
}
export default App;