import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.6;
    `;

  const Wrapper = styled.div`
    height: 100%;
  `;

  const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `;
  const ImgContainer = styled.div`
    height: 100vh;
  `;

  const Image = styled.img`
    height: 80%;
  `;

  const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  `;

  const Title = styled.h1`
  font-size: 70px;
  `;

  const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500px;
  letter-spacing:3px;`;

  const Button = styled.button`
  padding; 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  `;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNewOutlinedIcon />
            <Wrapper>
              
            </Wrapper>
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src="https://i.ibb.co/FW3Y4MM/kisspng-new-york-fashion-week-drawing-fashion-design-fashi-hand-painted-fashion-woman-5aa8189dd8fbd3.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Fashion Week</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et architecto aperiam iste non ab excepturi placeat sapiente.</Desc>
                <Button>Show More</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosOutlinedIcon />
            
        </Arrow>
    </Container>
  )
}

export default Slider;
