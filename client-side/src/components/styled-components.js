import styled from "styled-components";

const DashContainer = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  height: -moz-available;
  height: -webkit-fill-available;
`;
const Feed = styled.div`
  height: 33.6rem;
  background: #f4f3ef;
  max-width:100%
  margin-top: 3rem;
`;

const BtmNav = styled.div`    
display: grid;
position: fixed;
height: 3rem;
z-index: 1;
width: -webkit-fill-available;
width: -moz-available;
height: -moz-available;
background: #26aaade0;
grid-template-columns: repeat(4,1fr););
bottom:0;

}`;
const Navigation = styled.div`
  margin-top: -3rem;
  display: grid;
  height: 3rem;
  z-index: 99;
  width: -webkit-fill-available;
  width: -moz-available;
  position: fixed;
  background: #26aaade0;
  grid-template-columns: repeat(3, 1fr);
  -webkit-box-pack: start;
  -webkit-justify-content: start;
  -ms-flex-pack: start;
  justify-content: start;
`;
const Icons = styled.i`
  font-size: 3rem;
`;
const Input = styled.input`
  margin: auto;
`;

export { DashContainer, Feed, BtmNav, Navigation, Icons, Input };
