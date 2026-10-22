import Greet from './greet.jsx'

function App({name}) {
  return (
    <>
    <h1>Hello, React with me! | {name}</h1>
    <Greet name={name} />
    </>
  )
}

export default App
