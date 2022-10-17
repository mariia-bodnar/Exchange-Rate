import { createGlobalStyle } from "styled-components";
import { ExchangeRate } from "./ExchangeRate";

const GlobalStyles = createGlobalStyle`
:root {
  --main-color: rgb(0, 114, 229);
}

  body{
    margin: 0;
    padding: 0;
    background-color: #f4fbfd;
  }
  body #root {
    margin: 0;
  }
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`;
function App() {
  return (
    <div className="container">
      <GlobalStyles />
      <ExchangeRate />
    </div>
  );
}

export default App;
