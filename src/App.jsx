
import { createGlobalStyle } from 'styled-components'
import { ExchangeRate } from './ExchangeRate'




const GlobalStyles = createGlobalStyle`
:root {
  --container-xl-pd : 100px;
}

  body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #282828;
  }
  body #root {
    width: 100%;
    height: 100vh;
    margin: 0;
  }
  .container {
    width: calc(100% - 2*var(--container-xl-pd));
    padding: var(--container-xl-pd);
    height: calc(100% - 2*var(--container-xl-pd));
    display: flex;
    justify-content: center;
  }
`
function App() {

  return (
    <div className='container'>
      <GlobalStyles/>
      <ExchangeRate/>
    </div>
  )
}

export default App
