import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import data from './data/data.json';

function App() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription={'O que é frontend?'}
      />

      <Carousel
        ignoreFirstVideo
        category={data.categories[0]}
      />

      <Carousel
        category={data.categories[1]}
      />

      <Carousel
        category={data.categories[2]}
      />

      <Carousel
        category={data.categories[3]}
      />

      <Footer />
    </div>
  );
}

export default App;
