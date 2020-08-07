import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import TemplateDefault from '../../components/TemplateDefault';

function Home() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setValues(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err.message);
      });
  }, []);

  return (
    <TemplateDefault paddingAll={0}>
      {values.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      {values.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={values[0].videos[0].title}
                url={values[0].videos[0].url}
                videoDescription={values[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={values[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </TemplateDefault>
  );
}

export default Home;
