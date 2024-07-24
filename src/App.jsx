import './App.css'
import UseContext from './components/UseContext/UseContext'
import UseEffect from './components/UseEffect/UseEffect'
import UseImperativeHandle from './components/UseImperativeHandle/UseImperativeHandle'
import UseReducer from './components/UseReducer/UseReducer'
import UseRef from './components/UseRef/UseRef'
import UseState from './components/UseState/UseState'

function App() {
  return (
    <>
      <h1>React Hooks Tutorial</h1>
      <img src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png" alt="React Hooks" width={300}/>
      <UseState/>
      <UseReducer/>
      <UseEffect/>
      <UseRef/>
      <UseImperativeHandle/>
      <UseContext/>
      <h4>Source code: <a href='https://github.com/ehabmohamed6699/react-hooks'>https://github.com/ehabmohamed6699/react-hooks</a></h4>
      <h4>Reference: <a href='https://www.youtube.com/@PedroTechnologies'>https://www.youtube.com/@PedroTechnologies</a></h4>
    </>
  )
}

export default App
