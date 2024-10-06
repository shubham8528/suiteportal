import Styled from "styled-components";

export const NavBar = Styled.div`
  height: 50px;
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  background-color: rgb(236, 232, 232);
  .navLink{
  text-decoration: none;
  }
  .backBtn{
 font-size: 24px; 
   align-items: center;
  display: flex; 
  }
  .logoutBtn{
    font-size:20px;
  cursor:pointer;
  }
`;