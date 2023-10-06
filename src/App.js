import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Carousel from './Components/Carousel/Carousel';
import TopBanner from './Components/TopBanner/TopBanner';
import Products from './Components/Products/Products';
import flashSaleData from './data/flashSaleData';
import barazMallData from './data/barazMallData';

function App() {
  return (
    <main>
    < Navbar />
    < LogoSearchBar />
    < Carousel />
    < TopBanner />
    < Products title='FLASH SALE' products={flashSaleData} />
    < Products title='BARAZ MALL' products={barazMallData} />
    </main>
  );
}

export default App;
