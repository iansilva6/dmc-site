import styled from 'styled-components';

export const Social = styled.ul`
   display: flex;
   list-style: none;
   margin: 0px;
   padding: 0px;
   transition: 0.3s;
  
`;

export const Item = styled.li`
   color: #fff;
   cursor: pointer;
   margin: 5px;
   a {
      text-decoration: none;
      color: #fff;
      :hover {
         color: #eab71e;
         transition: 0.3s;
      }
   }
`;