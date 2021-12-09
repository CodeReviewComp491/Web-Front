import styled from 'styled-components'
import { Carousel } from 'antd'

export const MyCarouselCenter = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

interface MyCarouselProps {
  width: string;
}

export const MyCarousel = styled(Carousel)`
  width: ${(props: MyCarouselProps) => props.width};
`

export const CarouselTxt = styled.h3`
  font-size: 40px;
  height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
`
