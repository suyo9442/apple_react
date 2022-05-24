/* eslint-disable */
import './App.css';
import React, { useState } from 'react';


function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']) 
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  

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
            <div className="list" key={i} style={{overflow:'hidden'}}>
            <h4 onClick={ (e)=>{ 
                if(modal == false) {
                  setModal(true) 
                } else {
                  setModal(false)
                }

                setTitle(i)
              } }>
              { 글제목[i] }
              <span onClick={ (e)=>{
                e.stopPropagation();
                let 따봉copy = [...따봉];
                따봉copy[i] += 1;
                따봉변경(따봉copy) 
                }}>
              👍</span> 
              { 따봉[i] }
              </h4>
            <p>{`${year}년 ${month}월 ${date}일 발행`}</p>
            <button style={{float: 'right'}} onClick={(e)=>{
              let copy = [...글제목]
              copy.splice(i, 1)
              글제목변경(copy)
            }}>삭제</button>
          </div>
          )
        })
      }


      <input className='input' onChange={(e)=>{
        입력값변경(e.target.value)
        // console.log(입력값)
      }} />
      
      <button onClick={()=>{
        let input =  document.querySelector('.input')
        let copy1 = [...글제목]
        let copy2 = [...따봉]

        if(input.value == '') {
          return
        } else {
          // 입력값 추가
          copy1.unshift(입력값)
          글제목변경(copy1)
          
          // 따봉 추가
          copy2.unshift(0)
          따봉변경(copy2)

          input.value = ''
          input.focus()
        }
      }}>올리기</button>


      {
        // 조건식? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        // 1 == 1 ? '맞음' : '아님'
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }

    </div>
  );
} // App


function Modal(props) {
  return(
    <div className="modal" style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
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

function List() {
  return (
    <div className="list">
    <h4>{ 글제목[1] }</h4>
    <p>2월 17일 발행</p>
    </div>
  )
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim' }
  }

  changeName = () => {
    this.setState( {name: 'Park'} )
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 { this.state.name} 입니다</p>
        <button onClick={ ()=> {
          this.changeName
        } }>버튼</button>
      </div>
    )
  }
}

export default App;
