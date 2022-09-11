import { useContext } from "react";
import MyContext from "../Context/MyContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function RecordsScreen(){
    const navigate = useNavigate();
    const {name, token} = useContext(MyContext);

    function cashIn(){
        navigate("/cashIn", {replace: true})
    }

    function cashOut(){
        navigate("/cashOut", {replace: true})
    }

    function exit(){
        navigate("/",{replace:true});
    }

    return(
        <Container>
            <Top>
                <h2>Olá, {name}</h2>
                <ion-icon onClick={exit} name="exit-outline"></ion-icon>
            </Top>
            <Records>

            </Records>
            <AddData>
                <Data onClick={cashIn}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova</p>
                    <p>Entrada</p>
                </Data>
                <Data onClick={cashOut}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova</p>
                    <p>Saída</p>
                </Data>
            </AddData>
        </Container>
    )
}

const Container = styled.div`
    padding:30px;
    width: 100%;
    height: auto;
`;

const Top = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

    h2{
        width: auto;
        height: auto;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 31px;
        color: #FFFFFF;
    }

    ion-icon{
        width: 40px;
        height: 40px;
        color: #FFFFFF;

        :hover{
            cursor: pointer;
        }
    }
`;

const Records = styled.div`
    width: 100%;
    height: 600px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 30px;
`;

const AddData = styled.div`
    margin-top: 20px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Data = styled.div`
    width: 190px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    text-align: left;
    padding:10px;
    margin-left: 20px;
    margin-right: 20px;
    
    p{
        flex-wrap: wrap;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF; 
    }

    ion-icon{
        margin-bottom: 30px;
        color: #fff;
        width: 25px;
        height: 25px;
       
    }

    :hover{
        cursor: pointer;
    }
`;
