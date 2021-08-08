import Styled from "styled-components";
import image from "../../static/images/carddeck.png";
const HeaderLeftColumn = Styled.div`
padding-left:20px
`;
const HeaderRowStyle = Styled.div`
background-image: url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:29vh;
@media only screen and (min-width: 575px){
    height:35vh;
} 
.firstColumn{
    padding-left:25px;
    margin-top:15px;
    color:white;
}
.secondColumnParent{
    background-color:rgba(0, 0, 0, .3);
    height:29vh;
    @media only screen and (min-width: 575px){
        height:35vh;
    } 
}
.secondColumn{
    margin-top:40%; 
    @media only screen and (min-width: 575px){
        margin-top: 20%;
      } 
}
`;
const ButtonWrapper = Styled.div`
position: fixed;
bottom: 15px;
right: 15px;
@media only screen and (min-width: 575px){
    right: 28vw;
    bottom:30px;
} 
`;
const CardStyleWrapper = Styled.div`
width:100%;
margin:auto;
.ant-card-body{
    padding:0px;
    min-height:100vh;
    max-height:100%;
}
.logo{
    text-align:center;
}
.cardBackground{
    background-color:blue;
}
@media only screen and (min-width: 575px){
    width:50%;
  } 
`;
export { HeaderLeftColumn, HeaderRowStyle, ButtonWrapper, CardStyleWrapper };
