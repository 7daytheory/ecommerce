import styled from "styled-components";

const Container = styled.div`
flex:1;
margin: 5px;
position: relative;
`
const Image = styled.div
`
height: 100%;
width: 100%;
object-fit: cover;
`
const Title= styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
flex-direction: column;
`

const Info= styled.div`
color: #fff;
margin-bottom: 20px;`

const Button= styled.div`
border: none;
padding: 10px;
background-color: #fff;
color: #666;
cursor:pointer;
border-radius: 3px;
font-weight: 600;`

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