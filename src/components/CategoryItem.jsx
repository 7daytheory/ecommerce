import styled from "styled-components";

const Container = styled.div`
flex:1;
margin: 5px;
position: relative;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`

const Title = styled.h1`
color: #FFF;
margin-bottom: 20px;
background: red;
padding: 10px;
border-radius: 4px;
`

const Button= styled.button`
border: none;
color: #999;
background: #FFF;
border-radius: 3px;
padding: 5px 10px;
cursor: pointer;
font-weight: 600;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;