import styled from '@emotion/styled';


export const Container = styled.div`
    color: #003087;
    font-family: Verdana;
`

export const Box = styled.div`
    margin: 0;
    padding: 0;
    font-size: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const VerticalRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const Col = styled.div`
    align-self: center;
    font-family: Garamond;
`

export const HomeImage = styled.img`
    width: 60%;
`

export const UsersImage = styled.img`
    width: 100%;
`

export const ImageContainer = styled.div`
    display: flex;
    height: 40vh;
    width: 30%;
    background-color: #6cace4;
    align-content: center;
    border-radius: 5px;
    text-align: center;
    margin: 20px;
    font-weight: bold;
    font-size: 2vw;
    box-shadow: 5px 5px 5px 0 rgba(46, 74, 117, 0.5);
`

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    background-color: #003087;
`

export const ListItem = styled.li`
    float: right;
    font-size: 1.5vw;
    color: #ffb81c;
    text-align: center;
    padding: 20px;
    text-decoration: none;
`

export const HomeHeader = styled.h1`
    color: #003087;
    font-size: 2.5vw
`
export const PageHeader = styled.h1`
    color: #0072ce;
    font-size: 2.25vw;
    text-align: center;
`
export const Table = styled.table`
    border: 2px solid #003087;
    width: 100%;
    font-size: 20px;
    text-align:center;
    border-collapse: collapse;
`
export const Th = styled.th`
    border: 2px solid #003087;
`

export const Td = styled.td`
    border: 2px solid #003087;
    `

export const Input = styled.input`
    border: 2px solid #ffb81c;
    border-radius: 4px;
`

export const Button = styled.button`
    margin: 5px;
    width: 150px;
`