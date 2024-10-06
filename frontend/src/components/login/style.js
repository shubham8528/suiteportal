

import Styled from "styled-components";

export const BoxContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-Top:30px;
.Container{
    transform: translate(-50 %, -50 %);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
    border-radius: 10px;
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, .8);

}
h2{
	margin:0 0 30px;
	padding:0;
	color:#fff;
	text-align:center;
}
.inputbox{     
input
{
	width:100%;
	padding:10px 0;
	font-size:16px;
	color:#fff;
	letter-spacing:1px;
	margin-bottom:30px;
	border:none;
	border-bottom:1px solid #fff;
	outline:none;
	background:transparent;
	}
	
}
label
{
	color:#fff;
}
input[type="submit"]
{
	background:transparent;
	border:none;
	outline:none;
	color:#fff;
	background:#03a9f4;
	padding:10px 20px;
	cursor:pointer;
	border-radius:5px;
}
`;



