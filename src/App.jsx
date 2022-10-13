
import { createGlobalStyle } from 'styled-components'
import { ExchangeRate } from './ExchangeRate'




const GlobalStyles = createGlobalStyle`
:root {
  --container-ml-pd : 10%;
  --container-s-pd : 5%;
  --main-color: #90f310;
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
    width: calc(100% - 2*var(--container-ml-pd));
    padding: var(--container-ml-pd);
    height: calc(100% - 2*var(--container-ml-pd));
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      width: calc(100% - 2*var(--container-s-pd));
    padding: var(--container-s-pd);
    height: calc(100% - var(--container-s-pd));
    }
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
