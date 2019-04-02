import styled from "styled-components";

const DashContainer = styled.div`
  width: -webkit-fill-available;
  border: 1px solid black;
  height: -webkit-fill-available;
  background: #f4f3ef;
`;
const Feed = styled.div`
  display: grid;
  border: 1px solid black;
  height: 33.5em;
`;

const BtmNav = styled.div`    
display: grid;
height: 3rem;
background:#26aaada8;
grid-template-columns: repeat(4,1fr);
}`;
const Nav = styled.div`
  display: grid;
  height: 3rem;
  border: 1px solid black;
  background: #26aaada8;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
`;
const Icons = styled.i`
  font-size: 3rem;
`;
const Input = styled.input`
  margin: auto;
`;
//colors
//green: 26aaad
// yellow fe9b3a
//grey : f4f3ef

export { DashContainer, Feed, BtmNav, Nav, Icons, Input };
