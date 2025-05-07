import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  MyCarousel from './mems';

function App() {
  const images = [
    { src: "hrt.jpg", alt: "Image 1" },
    { src: "hrt1.jpg", alt: "Image 2" },
    // Add more images as needed
  ];
  return (
    <div>
      <h1>Our Memories</h1>
      <MyCarousel images={images} />
    </div>
  );
}

export default App;
