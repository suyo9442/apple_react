# level_1: 리액트 React 설치와 개발환경 셋팅 (2022 ver)

## 리액트 설치방법 
### 1. node.js설치
### 2. 폴더 - powershell로 터미널 열어서 npx create-react-app '프로젝트명'
> npx는 node.js에서 딸려온 프로젝트 생성 명령어

### 3. vsCode 열어서 프로젝트폴더 **제대로** 열어주고, 터미널에서 npm start 하면 미리보기 가능!


## 리액트 폴더들 설명
* node_modules: 프로젝트 구동에 필요한 모든 라이브러리 코드를 모아둔 폴더
* public: static(html, 이미지..)파일 보관하는 곳
* src: 코드 직접 짜는곳! ==> app.js가 메인!
* package.json: 프로젝트 정보 파일 (프로젝트명, 버전..), 라이브러리 이름들..


<!-------------------------------------------------------------------->
<br><br>


# level_2: 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
## jsx
- .js에서 html을 쓸 수 있게 도와주는 언어
-  원래 리액트에서 html을 작성하려면 js에서
=> React.createElement('div', null, 'Hello World')
==> but, 쉽게 html을 jsx로 html을 작성할 수 있음


## jsx문법
1. class => className

2. 서버에서 데이터 가져와서 꽂기 (중괄호 문법) = '데이터바인딩'
document.querySelector('h4').innerHTML = post; 원래는 이렇게 하잖어?
=> let post = '강남 우동 맛집'
   <h4>{ post }</h4>
** 상상하는 어느곳에나 {} 사용가능! (ex: id, src..)

3. html태그에 스타일태그를 쓰려면
=> <h4 style={ {color: 'red', fontSize: '16px'} }>블로그임</h4>
==> 스타일 값은 오브젝트 형식로 써야함 (ex: 'red')
==> js에서 하이픈은 빼기로 해석하기 때문에 카멜케이스 사용(ex: fontSize)

* 에러 메시지는 브라우저, 터미널, 콘솔창에서 확인해서 디버깅하기


<!-------------------------------------------------------------------->
<br><br>


# level_3: 중요한 데이터는 변수말고 state에 담습니다
## 레이아웃 짤 때 주의사항
1. return () 안에 짜야한다는 것
   병렬로 태그 2개 이상 작성X


## 변수 대신 쓸 수 있는 state 사용법
1. import{useState}
2. useState('보관할 자료')
3. let [a, b] = useState('보관할 자료')
=> a는 보관한 자료, b는 state 변경을 도와주는 함수

** let [a, b] -> JS의 Destructuring 문법
    let num = [1, 2]; // array중 중요한 데이터를 변수로 저장하고 싶을 때
    let a = num[0]; // 1
    let b = num[1]; // 2
    
    // 이렇게 할 수도 있지만
    let [a, b] = [1, 2]; //이렇게 할 수도 있음

    // so, 
    let [글제목, b] = useState('남자 코트 추천')
    // 여기서 useState('남자 코트 추천')은 ==> ['남자 코트 추천', b] 라는
    // 배열 형식으로 저장됨

** state, 언제 쓸까?
- 변수랑 차이점? 
=> 일반 변수는 만약 글제목이 변경되면, 직접 데이터를 수정해줘야함
=> state에 쓴 html은 자동으로 재렌더링이 된다

** 변동 시 자동으로 html에 반영되게 하고 싶으면 state써라.
- 블로그 타이틀 이런거 자주 변경안되니까 쓸데없이 state 안써도됨 ㅎㅎ
(let [logo, setLogo] = useState('ReactBlog');)


<!-------------------------------------------------------------------->
<br><br>


# level_3: 버튼에 기능개발을 해보자 & 리액트 state변경하는 법
## /* eslint-disable */
-> lint 꺼주는 기능
-> lint? 선언하고 안쓴 변수들 알려주는 부가기능


## 좋아요 누르면 +1
1. 버튼에 이벤트핸들러 달기
    onClick={ ()=>{ 따봉변경(따봉+1) } }

2. state 변경하는 법
- state변경함수(변경할state)
      let [따봉, 따봉변경] = useState(0);
      ex: 따봉변경(따봉+1)

* 등호로 변경X
* state 변경하려면 state 변경함수 써야함!


<!-------------------------------------------------------------------->
<br><br>


# level_3: array, object state 변경하는 법
## state변경함수 이용해서 array데이터 변경하면 다 바뀌어요ㅠㅠ
=> state가 갈아치워져서 그럼
    글제목변경('여자 코트 추천') 

=> 대체시켜야함
    글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])

=> but, 확장성 당연히 없지! 그럼 array를 어떻게 변경할까?
    글제목[0] = '여자 코트 추천';
    글제목변경(글제목);

=> but, 원본은 보존해야되! copy문법을 쓰자
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(글제목);

* [...글제목] ?
- state변경함수 특징: 기존state == 신규 state의 경우 같기 때문에 변경X
- array/object 특징: 이렇게만 쓰면 같다고 해석해서 변경이 안됨
                        let copy = 글제목;
                        copy[0] = '여자 코트 추천';

** 정리!!!
- state변경함수를 써서 array를 변경할 때 
기존 state와 신규 state가 같다고 해석되면 변경이 되지 않아.
    예를 들어,
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목)
    해도 변수이름, 화살표는 똑같다고 해석해서 변경X

    예를 들어2,
        let copy = 글제목;
        copy[0] = '여자 코트 추천';
    해도 변수의 화살표는 똑같기 때문에 변경X

    그래서 array를 담은 state를 변경하기 위해서는 '화살표'를 바꿔줘야해
    어떻게? 
        [...글제목]
        sprea문법을 사용해서
        괄호 벗기고, 괄호 다시 씌워주세요 해줘야 화살표도 달리짐(새로운 state로 인식!)
        이런 문법 특징을 Reference data type라고 칭해



<!-------------------------------------------------------------------->
<br><br>


# level_4: Component : 많은 div들을 한 단어로 줄이고 싶으면
## Component 만들기
* react에서는 여러 div들을 깔끔하게 한줄로 축약할 수 있음
* 언제 쓰면 좋을까?
    => 반복적인 html태그들을 축약할 때 (ex: list들)
    => 큰 페이지들
    => 자주 변경되는 것들
* but! 컴포넌트 쓰려면 state 위치를 주의해야함

1. function App()밖에 함수만들기 (작명은 대문자로 시작)

2. return()안에 div박스 만들기 (retun안에는 태그 하나만 써야함)
    * 굳이 태그를 1개이상 만들고 싶으면
    => <> </> 안에 묶어주기

3. function App()에 <Modal></Modal> 컴포넌트를 넣어줌
    * <Modal/> 이렇게 써줘도 됨


## Component 만드는 문법
1. function Modal() {
    return()
}

2. const Modal = () => {
    retrun()
}
=> const로 만드는 것이 좋음 => 재선언 방지

*function App()도 컴포넌트임, index.js를 보면 <App/> 확인 가능


<!-------------------------------------------------------------------->
<br><br>


# level_5: 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)
## 동적인 UI 만드는 3-step
### 1. HTML, CSS로 UI 미리 디지인 완성

### 2. UI 현재상태를 state로 저장
    => let [modal, setModal] = useState('');
    * 변경함수는 보통 앞에 'set'을 붙여주기도 함 

    => let [modal, setModal] = useState(false);
    * state값은 UI의 기본값으로 설정 (ex: 닫힘, 0, false..)

### 3. state에 따라 UI가 어떻게 보일지 작성 (ex: 조건문..)
    * state가 true면 UI 보여주세요
    * 리액트에서는 버튼 누르면 모달창 스위치만 건드리고,
    썡 JS에서는 버튼 누르면 모달창 HTML을 직접 건드림
    => 쌩 JS에서 익숙한 사람들은 정신개조가 필요함(ㅋㅋ)
    
1) function App()안에 {} 중괄호 열어서 작성
    * html작성하는 곳이기 때문에 JS문법 사용X so, 삼항연산자 사용(ternary operator)
* {조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드}
* 1 == 1 ? '맞음' : '아님' //맞음
* modal == true ? <Modal/> : null
    * 비어있는 html을 쓸 때 null값을 주로 사용

2) 이제 Modal의 state만 조정하면 됨
* 클릭시 state조절
    => <h4 제목누르면 modal state를 true로>{ 글제목[2] }</h4>
    => state 변경함수를 활용
    ==> <h4 onClick={ ()=>{ setModal(true) } }>{ 글제목[2] }</h4>



## HW: 글제목을 누르면 다시 안보이도록
### onClick은 버튼 누를 때마다 클릭수 +1하면 왜.. => 1, 1, 2, 1, 1 ??      
        <h4 onClick={ ()=>{ 
          클릭수 += 1;
          console.log(클릭수)

          if(클릭수 % 2 != 0) {
            setModal(true) 
          } else {
            setModal(false)
          }

        } }>{ 글제목[2] }</h4>


* false면 true, true면 false로 바꿔주세요 하면 되긴 해..

