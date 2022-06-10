import Navigation from "./components/header/Navigation";
import Container from "./components/main/Container";
import Login from "./components/user/Login";
import "./css/styles.css";


function App() {

  return (
    <div>
      <Login/>
      <Navigation/>
      <Container/>
    </div>
  );
}

export default App;