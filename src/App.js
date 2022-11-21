import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home';


function App() {
  
  return (
    <ChakraProvider>
      <div className="App">
      <header className="App-header">Todo list</header>
      <Home/>
      </div>
    </ChakraProvider>
  )
}

export default App;
