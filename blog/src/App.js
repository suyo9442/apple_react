/* eslint-disable */
import './App.css';
import { useState } from 'react';


function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']) 
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>
      <button onClick={ ()=>{
        let 글제목정렬 = [...글제목];
        글제목정렬.sort(function(a, b){
          if (a < b) {
            return -1
          } else {
            return 1
          }
        })
        글제목변경(글제목정렬);
      } }>가나다순 정렬</button>
      
      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>

        <span onClick={ ()=>{
          let copy1 = [...글제목];
          copy1[0] = '여자 코트 추천';
          글제목변경(copy1);
          } }>👩‍🦰</span>

        <span onClick={ ()=>{
          let copy2 = [...글제목];
          copy2[0] = '남자 코트 추천';
          글제목변경(copy2);
        } }>👨‍🦰</span>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ 
            if(modal == false) {
              setModal(true) 
            } else {
              setModal(false)
            }
          } }>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
            <h4 onClick={ ()=>{ 
              if(modal == false) {
                setModal(true) 
              } else {
                setModal(false)
              }
              } }>{ 글제목[i] }
              <span onClick={ ()=>{
                let 따봉copy = [...따봉];
                따봉copy[i] += 1;
                따봉변경(따봉copy) 
                }}>
              👍</span> { 따봉[i] }
              </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
      {
        // 조건식? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        // 1 == 1 ? '맞음' : '아님'
        modal == true ? <Modal color = {'skyblue'} 글제목 = {글제목} 글제목변경 = {글제목변경}/> : null
      }

    </div>
  );
} // App

function Modal(props) {
  return(
    <div className="modal" style={{background : props.color}}>
        <h4>{ props.글제목 }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={function(){
          let 여자코트 = [...props.글제목]
          여자코트[0] = '여자 코트 추천'
          props.글제목변경(여자코트)          
        }}>글수정</button>
    </div>
  )
}

export default App;
