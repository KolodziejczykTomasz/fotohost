import './App.css';
import image1 from "./assets/Numer 1.jpg";
import image2 from "./assets/Numer 2.jpg";
import image3 from "./assets/Numer 3.jpg";
import image4 from "./assets/Numer 4.jpg";
import image5 from "./assets/Numer 5.jpg";
import image6 from "./assets/Numer 6.jpg";
import image7 from "./assets/Numer 7.jpg";
import image8 from "./assets/Numer 8.jpg";
import image9 from "./assets/Numer 9.jpg";

function App() {
  return (
    <div className="App">
      <div><img src={image1} alt="Świeczka z wosku" /></div>
      <div><img src={image2} alt="Świeczka z wosku" /></div>
      <div><img src={image3} alt="Świeczka z wosku" /></div>
      <div><img src={image4} alt="Świeczka z wosku" /></div>
      <div><img src={image5} alt="Świeczka z wosku" /></div>
      <div><img src={image6} alt="Świeczka z wosku" /></div>
      <div><img src={image7} alt="Świeczka z wosku" /></div>
      <div><img src={image8} alt="Świeczka z wosku" /></div>
      <div><img src={image9} alt="Świeczka z wosku" /></div>
    </div>
  );
}

export default App;
