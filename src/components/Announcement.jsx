import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: red;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            15% off hats! Free Shipping on orders of $200
        </Container>
    )
}

export default Announcement;