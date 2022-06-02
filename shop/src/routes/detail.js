import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`
let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props) {
    let { id } = useParams();
    // console.log(id)

    return (
        <div className="container">
            {
                alert == true
                    ?
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            <YellowBtn bg="blue">버튼</YellowBtn>
            <Box>박스</Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;