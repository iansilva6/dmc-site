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
   margin: 5px;
   cursor: pointer;
   :hover {
      color: #eab71e;
      transition: 0.3s;
      margin-top: -0.5px;
   }
`;