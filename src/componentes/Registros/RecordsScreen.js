import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RecordsScreen(){
    const navigate = useNavigate();
    const {user} = useContext(MyContext);
    const [list, setList] = useState([]);

    console.log(user.token)

    function cashIn(){
        navigate("/cashIn", {replace: true})
    }

    function cashOut(){
        navigate("/cashOut", {replace: true})
    }

    function exit(){
        navigate("/",{replace:true});
    }

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };    
    
    
    function getListExpenses() {
        
        const promise =  axios.get('http://localhost:5000/list-expenses',config);

        promise.then(res => {
            setList(res.data);
        })

        .catch(err => {
            console.log(err.response.data)
        })
    }
    getListExpenses();
    
    function pegaSaldo() {
        if (list.length > 0) {
          return list.reduce((previous, current) => {
            if (current.type === 'entrada') {
              return previous + current.value;
            }
    
            return previous - current.value;
          }, 0);
        } else {
          return 0;
        }
      }
    
      const saldo = pegaSaldo();
    
    return(
        <Container>
            <Top>
                <h2>Olá, {user.name}</h2>
                <ion-icon onClick={exit} name="exit-outline"></ion-icon>
            </Top>
            <Records>
                <Gastos>
                {list.map((list, index) => <MiniContainer key={index}><FirstBlock>
                                                <p>{list.time}</p>
                                                <span>{list.description}</span></FirstBlock>
                                                <Line color={list.type === 'entrada' ? '#03AC00' : '#C70000'}><p>{list.value}</p></Line></MiniContainer>)}
                </Gastos>
                <Bottom color={saldo >= 0 ? '#03AC00' : '#C70000'}><span>SALDO</span> {saldo}</Bottom>
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
    padding: 10px;
    
`;

const Bottom = styled.div` 
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: ${props => props.color};

    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
`;

const Gastos = styled.div`
    width: 100%;
    height: 520px;
    overflow-X: auto;
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

const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    width: 100%;
    height: auto;
    justify-content: right;

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.color};
    }


`;

const FirstBlock = styled.div` 
    display: flex;
    flex-direction: row;
    align-items:center;
    width: 100%;
    height: auto;

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        width: auto;
        margin-right: 10px;
        margin-bottom: 15px;
    }

    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        width: auto;
        margin-right: 10px;
        margin-bottom: 15px;
    }

`;

const MiniContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`;

