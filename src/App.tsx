import Container from "./components/Container";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Main />
      </Container>
      <Footer />
    </>
  );
};

export default App;
