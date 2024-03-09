import './App.css';
import {Header} from "./components/header/Header";
import {Helmet} from "react-helmet";
import {useEffect} from "react";
import {Home1} from "./components/home/Home1";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {RentalService} from "./components/rentalServices/RentalService";
import {EditRentalService} from "./components/rentalServices/EditRentalService";
function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
        script.async = true;

        const scriptContainer = document.getElementById('script-container');
        if (scriptContainer) {
            scriptContainer.appendChild(script);
        }

        return () => {
            if (scriptContainer) {
                scriptContainer.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.startbootstrap.com/sb-forms-latest.js';
        script.async = true;

        const scriptContainer = document.getElementById('script-container1');
        if (scriptContainer) {
            scriptContainer.appendChild(script);
        }

        return () => {
            if (scriptContainer) {
                scriptContainer.removeChild(script);
            }
        };
    }, []);
  return (
      <>
          <Helmet>
              <meta charSet="utf-8"/>
              <title>Khanh</title>

              <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>

              <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
              <link
                  href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                  rel="stylesheet"/>
          </Helmet>
          <Header/>
          <BrowserRouter>
              <Routes>
                  <Route path={""} element={<Home1/>}></Route>
                  <Route path={"/service"} element={<RentalService/>}></Route>
                  <Route path={"/service/edit/:id"} element={<EditRentalService/>}></Route>
              </Routes>
          </BrowserRouter>
          <Footer/>
          <div id="script-container"></div>
          <div id="script-container1"></div>
      </>
  );
}

export default App;
