import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Portfolio from './componenets/portfolio';
import Header from './componenets/header';
import Home from './componenets/home';
import Footer from './componenets/footer';
import NotFound from './componenets/404';
import News from './componenets/news';
import Discography from "./componenets/discography";
import Support from "./componenets/support";
import DownloadPage from './componenets/download';
import Register from './componenets/register';

import Anxiety from './componenets/discography/anxiety';
import Aurora from "./componenets/discography/aurora";
import Mellow from './componenets/discography/mellow';

import './App.css';
import ToonsPage from './componenets/toons';
import Zone from './componenets/toons/zone';

function App() {

  return (
    <div>
      <Header />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/discography" element={<Discography />} />
              <Route path='/discography/anxiety' element={ <Anxiety />} />
              <Route path='/discography/aurora' element={ <Aurora />} />
              <Route path='/discography/mellow' element={ <Mellow />} />
              <Route path="/support" element={<Support />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/news" element={ <News /> } />
              <Route path="/news/:newsId" element={<News />} />
              <Route path='/toons' element={ <ToonsPage />} />
              <Route path='/toons/zone' element={ <Zone />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
