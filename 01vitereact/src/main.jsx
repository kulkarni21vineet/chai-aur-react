import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp() {

  return (
    <a href='https://google.com' target='_blank'>React TAG way to visit google</a>
  )
}

/*const ReactElement ={
  type:'a',
  props:{
      href:'https://google.com',
      target: '_blank'
  },
  Children: 'Click me to visit google'
}*/

const anotherElement = (
  <a href='https://google.com' target='_blank'>Another Element to visit google</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'React custom way to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <App/>
    <MyApp/>
    <Chai/>
    {anotherElement}
    <br/>
    <br/>
    {reactElement}
  </>

  
)
