import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx"
import Card from "./components/Card/Card.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { image1, image2, image3, image4 } from './assets/images'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header name="Galería de Imágenes con React"></Header>
            <Card title="The Big Bang Theory" description="The CW" url={image1}></Card>
            <Card title="The Flash (2014)" description="The CW" url={image2}></Card>
            <Card title="Stranger Things" description="Netflix" url={image3}></Card>
            <Card title="Big Mouth" description="Netflix" url={image4}></Card>
          </div>

        </div>

        <Footer>  </Footer>


      </div>


    </div >
  );
}

export default App;
