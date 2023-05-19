import styled from "styled-components"

export const Container = styled.div`
  background-color: ${(props) => props.isHide ? 'blue' : 'black'};
  /* нижняя и верхняя строки аналогичны !!! Проверено !!! */
   /* background-color: ${({ isHide })=> isHide ? 'blue' : 'black'}; */
  width: 300px;
  &:hover{
    background-color: orange;
  }
  div>h5 {
    color: white;
  }
`

export const Photo = styled.img`
  width: 300px;
`