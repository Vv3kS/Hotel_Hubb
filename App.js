// App.js
import React, { useState } from 'react';
import { BrowserRouter as Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Login from './components/login';
import Register from './components/registration';
import UpdatePassword from './components/update_password';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/update_password':
        return <UpdatePassword />;
      default:
        return null;
    }
  };

  return (
    <Routes>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              {/* Image slides */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom"
                  alt="Slide 1"
                />
                <Carousel.Caption>
                  {/* You can add a caption here if needed */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/2022/1226/T1226MarriottResortPalmJumeirah_C_HR/Marriott-makes-its-UAE-debut-with-Palm-Jumeirah-re.jpg?tr=w-737%2Ch-416%2Cfo-auto"
                  alt="Slide 2"
                />
                <Carousel.Caption>
                  {/* You can add a caption here if needed */}
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://offplandxb.ae/wp-content/uploads/2020/07/bay-edge-5.jpg"
                  alt="Slide 4"
                />
                <Carousel.Caption>
                  {/* You can add a caption here if needed */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/11/46/87/06/king-guest-room-sea-view.jpg"
                  alt="Slide 5"
                />
                <Carousel.Caption>
                  {/* You can add a caption here if needed */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-md-6">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={() => handleOptionClick('/login')}>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => handleOptionClick('/register')}>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => handleOptionClick('/update_password')}>
                    <Link className="nav-link" to="/update_password">
                      Update Password
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {renderForm()}
          </div>
        </div>
      </div>
    </Routes>
  );
}

export default App;




