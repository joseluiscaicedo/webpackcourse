import '../css/index.css';
import search from './search';
import render from './render';

const id= prompt('who is his name?')

search(id)
  .then((data)=>{
      render(data)
  })
  .catch(()=> {
    console.log('no hubo pokemon')
  })