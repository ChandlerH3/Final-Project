import styled from "styled-components"

export const Sidebar = () => {
    return (
        <Wrapper>
            <Top>
                <Title>
                    123
                </Title>
                <Rank>
                    123
                </Rank>
            </Top>
            <Popular>
                <Title>
                    123
                </Title>
                <Item>
                    123
                </Item>
            </Popular>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display:flex;
flex-direction: column;
`
const Top = styled.div`
display:flex;
flex-direction: column;
`
const Popular = styled.div`
display:flex;
flex-direction: column;
`
const Title = styled.h1`
`
const Rank = styled.div`
`
const Item = styled.div`
`