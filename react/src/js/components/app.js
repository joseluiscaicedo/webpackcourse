import React, {useState} from 'react'
import data from './data.json';
import Loader from './loader'
console.log(data)
function App() {
  const [loaderList,setLoaderList] = useState([])
  function manejador(){
    setLoaderList(data.loaders)
  }
  return (
    <div>
      Love You Baby marce&jOseL
      <ul>
        {
            loaderList.map((item)=> <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button onClick={manejador}>Show info from json file</button>
    </div>
  )
}
export default App;