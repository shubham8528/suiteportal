import Styled from "styled-components";

export const FormBox = Styled.form`
color: #fff;
    transform: translate(-50 %, -50 %);
    border-radius: 10px;
    margin-Top:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .formContainer{
        width: 30%;
        box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
        background: rgba(0, 0, 0, .8);
        padding:10px 20px;
}
input{
    margin-bottom:20px;
}
.InputField{
    .inputBox{
        display: flex;
        justify-content: space-between;
    }
}
.textAreaField{
    margin-Top:10px;
}
`