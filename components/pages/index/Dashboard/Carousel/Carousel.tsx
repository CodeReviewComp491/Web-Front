import React, { useEffect, useState } from 'react'

//css
import * as Styled from 'components/pages/index/Dashboard/Carousel/styles';

const Carousel = (): JSX.Element => {
  const [carouselWidth, setCarouselWidth] = useState<string>('0px');

  useEffect(() => {
    const carouselCenterElement = document.getElementById('MyCarouselCenter');

    if (carouselCenterElement) {
      setCarouselWidth(carouselCenterElement.offsetWidth + 'px');
    }
  }, []);

  return (
    <Styled.MyCarouselCenter id={'MyCarouselCenter'}>
      <Styled.MyCarousel width={carouselWidth}>
        <div>
          <Styled.CarouselTxt>
            Help the community and review code
          </Styled.CarouselTxt>
        </div>
        <div>
          <Styled.CarouselTxt>TEST</Styled.CarouselTxt>
        </div>
      </Styled.MyCarousel>
    </Styled.MyCarouselCenter>
  )
}

export default Carousel;