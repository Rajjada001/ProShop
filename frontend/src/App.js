import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Product from "./components/Product"
import HomeScreen from "./screens/HomeScreen";
function App()  {
  return (
    <>
    <Header />
    <main>
      <Container>
        <HomeScreen />
      </Container>
    </main>
     <Footer />
    </>
  );
}

export default App;
