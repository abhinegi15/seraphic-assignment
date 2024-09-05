import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  Routes, Route } from "react-router-dom";
import Layout from 'components/Layout';
import Home from 'pages/Home';
import ProfileShared from 'pages/ProfileShared';
import RentDetails from 'pages/RentDetails';
function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Layout />}>
              <Route index  path="/" element={<Home />} />
              <Route path="/profile-shared" element={<ProfileShared />} />
              <Route path="/rent-details" element={<RentDetails />} />
          </Route>
       </Routes>
    </>
  );
}

export default App;
