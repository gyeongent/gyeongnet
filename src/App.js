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

import NewsOne from './componenets/news/220314';
import NewsTwo from './componenets/news/220405';
import NewsThree from './componenets/news/220629';
import NewsFour from './componenets/news/220728';
import NewsFive from './componenets/news/221017';

import Anxiety from './componenets/discography/anxiety';
import Aurora from "./componenets/discography/aurora";
import Mellow from './componenets/discography/mellow';

import './App.css';

function App() {

  return (
    <div>
      <Header />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/discography" element={<Discography />}></Route>
              <Route path='/discography/anxiety' element={ <Anxiety />}></Route>
              <Route path='/discography/aurora' element={ <Aurora />}></Route>
              <Route path='/discography/mellow' element={ <Mellow />}></Route>
              <Route path="/support" element={<Support />}></Route>
              <Route path="/download" element={<DownloadPage />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path="/news" element={ <News /> }></Route>
              <Route path="/news/221017" element={ <NewsFive /> }></Route>
              <Route path='/news/220728' element={ <NewsFour/> }></Route>
              <Route path='/news/220629' element={ <NewsThree/> }></Route>
              <Route path='/news/220405' element={ <NewsTwo/> }></Route>
              <Route path='/news/220314' element={ <NewsOne />}></Route>
              {/* <Route path='/download/launchpad' element={<LaunchpadPj />}></Route> */}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
