import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navbar, HomePage, Video, Sidebar } from './components';
import { AppContext } from './context/contextApi';

function App() {
  const [toggal, setToggal] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width <= 767) {
      setToggal(false);
    } else {
      setToggal(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  // console.log(width, toggal);
  // const toggalMenu = () => {
  //   setToggal(!toggal);
  // };
  
  return (
    <AppContext>
      <div className="mx-3 relative">
        <Navbar setToggal={setToggal} toggal={toggal}/>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage toggal={toggal}/>} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </div>
    </AppContext>
  );
}

export default App;
