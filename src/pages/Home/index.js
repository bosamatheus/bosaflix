import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import data from '../../data/data.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription="1ª Temporada - Episódio 1"
      />

      <Carousel
        ignoreFirstVideo
        category={data.categories[0]}
      />

      <Footer />
    </div>
  );
}

export default Home;
