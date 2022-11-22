import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home';


function App() {
  
  return (
    <div className="todo-box">
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
    </div>
  )
}

export default App;
