# level_1: 리액트 React 설치와 개발환경 셋팅 (2022 ver)

## 리액트 설치방법 
1. node.js설치
2. 폴더 - powershell로 터미널 열어서 npx create-react-app '프로젝트명'
> npx는 node.js에서 딸려온 프로젝트 생성 명령어

3. vsCode 열어서 프로젝트폴더 **제대로** 열어주고, 터미널에서 npm start 하면 미리보기 가능!

<br>

## 리액트 폴더들 설명
- **node_modules** 프로젝트 구동에 필요한 모든 라이브러리 코드를 모아둔 폴더
- **public** static(html, 이미지..)파일 보관하는 곳
- **src** 코드 직접 짜는곳! ==> app.js가 메인!
- **package.json** 프로젝트 정보 파일 (프로젝트명, 버전..), 라이브러리 이름들..


<!-------------------------------------------------------------------->
<br><br><br>


# level_2: 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
## jsx란?
- js에서 html을 쓸 수 있게 도와주는 언어
-  원래 리액트에서 html을 작성하려면 js에서
```javascript
    React.createElement('div', null, 'Hello World')
```
- but, 쉽게 html을 jsx로 html을 작성할 수 있음

<br>

## jsx문법
1. class => classN

2. 서버에서 데이터 가져와서 꽂기 (중괄호 문법 사용)
- 원래는 이렇게 하잖어?
```javascript
    document.querySelector('h4').innerHTML = post; 
```
- 하지만 리액트에서는!
```javascript
     let post = '강남 우동 맛집'
    <h4>{ post }</h4>
```
> 상상하는 어느곳에나 {} 사용가능! (ex: id, src..)

3. html태그에 스타일태그를 쓰려면..
```javascript
    <h4 style={ {color: 'red', fontSize: '16px'} }>블로그임</h4>
```
- 스타일 값은 오브젝트 형식로 써야함 (ex: 'red')
- js에서 하이픈은 빼기로 해석하기 때문에 카멜케이스 사용(ex: fontSize)

> 에러 메시지는 브라우저, 터미널, 콘솔창에서 확인해서 디버깅하기


<!-------------------------------------------------------------------->
<br><br><br>


# level_3: 중요한 데이터는 변수말고 state에 담습니다
## 레이아웃 짤 때 주의사항
- return () 안에 짜야한다는 것, **병렬로 태그 2개 이상 작성X**

<br>

## 변수 대신 쓸 수 있는 state 사용법
1. import{useState}
2. useState('보관할 자료')
3. let [a, b] = useState('보관할 자료')
    - a는 보관한 자료, b는 state 변경을 도와주는 함수

* state는 JS의 Destructuring 문법이 기반
    ```javascript
        let num = [1, 2]; // array중 중요한 데이터를 변수로 저장하고 싶을 때
        let a = num[0]; // 1
        let b = num[1]; // 2

        // 이렇게↑ 할 수도 있지만
        let [a, b] = [1, 2]; // ←이렇게 할 수도 있음

        // so !
        let [글제목, b] = useState('남자 코트 추천')
        // 여기서 useState('남자 코트 추천')은
        // ['남자 코트 추천', b] 라는 배열 형식으로 저장됨
    ```

* state, 언제 쓸까?
    - 변수랑 차이점? 
        - 일반 변수는 만약 글제목이 변경되면, 직접 데이터를 수정해줘야함 but, **state에 쓴 html은 자동으로 재렌더링이 된다**

    - 변동 시 자동으로 html에 반영되게 하고 싶으면 state써라.
    > 타이틀, 로고 이런거 자주 변경안되니까 쓸데없이 state 안써도됨 ㅎㅎ
    > ( ex: let [logo, setLogo] = useState('ReactBlog') )


<!-------------------------------------------------------------------->
<br><br><br>


# level_4: 버튼에 기능개발을 해보자 & 리액트 state변경하는 법
## /* eslint-disable */
- lint 꺼주는 기능
- **lint?** 선언하고 안쓴 변수들 알려주는 부가기능

<br>

## 좋아요 누르면 +1
1. 버튼에 이벤트핸들러 달기
    ```javascript
        onClick={ ()=>{ 따봉변경(따봉+1) } }
    ```

2. state 변경하는 법
    * state 변경하려면 state 변경함수 써야함!
    * state변경함수(변경할state)
    ```javascript
        let [따봉, 따봉변경] = useState(0);
        따봉변경(따봉+1)
    ```
    > 등호로 변경X


<!-------------------------------------------------------------------->
<br><br><br>


# level_5: array, object state 변경하는 법
## state변경함수 이용해서 array데이터 변경하면 다 바뀌어요ㅠㅠ
- state가 갈아치워져서 그럼
    ```javascript  
        글제목변경('여자 코트 추천') 
    ```

- so, 대체시켜야함
    ```javascript
        글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])
    ```

- but, 확장성 당연히 없지! 그럼 array를 어떻게 변경할까?
    ```javascript
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목);
    ```

- but, 원본은 보존해야되! copy문법을 쓰자
    ```javascript
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(글제목);
    ```

- [...글제목] ?
    - state변경함수 특징: 기존state == 신규 state의 경우 같기 때문에 변경X
    - array/object 특징: 이렇게만 쓰면 같다고 해석해서 변경이 안됨
        ```javascript
            let copy = 글제목;
            copy[0] = '여자 코트 추천';
        ```

- 정리!!!
    - state변경함수를 써서 array를 변경할 때 기존 state와 신규 state가 같다고 해석되면 변경이 되지 않아. 예를 들어,
        ```javascript
            글제목[0] = '여자 코트 추천';
            글제목변경(글제목)
        ```
        - 해도 변수이름, 화살표는 똑같다고 해석해서 변경X

    - 예를 들어2,
        ```javascript
            let copy = 글제목;
            copy[0] = '여자 코트 추천';
        ```
        - 해도 변수의 화살표는 똑같기 때문에 변경X

    - 그래서 array를 담은 state를 변경하기 위해서는 '화살표'를 바꿔줘야해. 어떻게? 
        ```javascript
            [...글제목]
        ```
        - sprea문법을 사용해서 괄호 벗기고, 괄호 다시 씌워주세요! 해줘야 화살표도 달리짐(새로운 state로 인식!)
        > 이런 문법 특징을 Reference data type라고 칭해



<!-------------------------------------------------------------------->
<br><br><br>


# level_6: Component : 많은 div들을 한 단어로 줄이고 싶으면
## Component 만들기
* react에서는 여러 div들을 깔끔하게 한줄로 축약할 수 있음
* 언제 쓰면 좋을까?
    - 반복적인 html태그들을 축약할 때 (ex: list들)
    - 큰 페이지들
    - 자주 변경되는 것들
* but! **컴포넌트 쓰려면 state 위치를 주의해야함**

1. function App() 밖에 함수만들기 (**작명은 대문자**로 시작)

2. return()안에 div박스 만들기 (retun안에는 태그 하나만 써야함)
    - 굳이 태그를 1개이상 만들고 싶으면 <> </> 안에 묶어주기

3. function App()에 
    ```javascript
        <Modal></Modal> 
        // 컴포넌트를 넣어줌
    ```

    ```javascript
        - <Modal/> 
        // 이렇게 써줘도 됨
    ```

<br>

## Component 만드는 문법
1. 첫 번째 방법
    ```javascript
        function Modal() {
            return()
        }
    ```

2. 두 번째 방법
    ```javascript
        const Modal = () => {
            retrun()
        }
    ```
    > const로 만드는 것이 좋음 => 재선언 방지

> function App()도 컴포넌트임, index.js를 보면 <App/> 확인 가능


<!-------------------------------------------------------------------->
<br><br><br>


# level_7: 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)
## 동적인 UI 만드는 3-step
### 1. HTML, CSS로 UI 미리 디지인 완성

### 2. UI 현재상태를 state로 저장
- 변경함수는 보통 앞에 'set'을 붙여주기도 함 
    - let [modal, setModal] = useState('');

- state값은 UI의 기본값으로 설정 (ex: 닫힘, 0, false..)
    - let [modal, setModal] = useState(false);

### 3. state에 따라 UI가 어떻게 보일지 작성 (ex: 조건문..)
- state가 true면 UI 보여주세요
> 리액트에서는 버튼 누르면 모달창 스위치만 건드리고, 쌩 JS에서는 버튼 누르면 모달창 HTML을 직접 건드림..
> 쌩 JS에서 익숙한 사람들은 정신개조가 필요함(ㅋㅋ)
    
1. function App()안에 {} 중괄호 열어서 작성
    - html작성하는 곳이기 때문에 JS문법 사용X so, 삼항연산자 사용(ternary operator)
        ```javascript
            //조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
            1 == 1 ? '맞음' : '아님' //맞음
            modal == true ? <Modal/> : null
        ```
        > 비어있는 html을 쓸 때 null값을 주로 사용

2. 이제 Modal의 state만 조정하면 됨
    - 클릭시 state조절
        ```javascript
            <h4 제목누르면 modal state를 true로>{ 글제목[2] }</h4>
            // state 변경함수를 활용
            <h4 onClick={ ()=>{ setModal(true) } }>{ 글제목[2] }</h4>
        ```


    - 조건문으로 작성
        ```javascript
            <div className="list">
                <h4
                    onClick={ ()=>{
                        if(modal == false) {
                        setModal(true)
                        }
                    else="else"
                    {
                    setModal(false)="setModal(false)"
                    }="}">{ 글제목[2] }</h4>
                <p>2월 17일 발행</p>
            </div>
        ```  

<br>

## HW: 글제목을 누르면 다시 안보이도록
- onClick은 버튼 누를 때마다 클릭수 +1하면 왜.. => 1, 1, 2, 1, 1 ??      
    ```javascript
            <h4 onClick={ ()=>{ 
            클릭수 += 1;
            console.log(클릭수)

            if(클릭수 % 2 != 0) {
                setModal(true) 
            } else {
                setModal(false)
            }

            } }>{ 글제목[2] }</h4>
    ```

    > false면 true, true면 false로 바꿔주세요 하면 되긴 해..

> !? readme에서 react 코드블럭 만드려면 어떻게..?
> !? onClick은 버튼 누를 때마다 클릭수 +1하면 왜..?


<!-------------------------------------------------------------------->
<br><br><br>


# level_8: map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
- 반복문으로 같은 HTML 반복 생성하는 법


### map 사용법
- 모든 array자료에 붙일 수 있음
- array 개수만큼 함수를 실행
    ```javascript
        [1, 2, 3].map(function() {
            console.log(1)
        });
    ``` 
    > (3) 1


- map 함수의 파라미터는 array 자료를 뜻함
    ```javascript
        [1, 2, 3].map(function(a) {
            console.log(a);
        });
    ```
    > 1,2,3


- return 값을 array에 그대로 담아줌
    ```javascript
        [1,2,3].map(function(){
            return '1233211'; 
        });
    ```
    > array 개수만큼 담아줌
    > (3) ['1233211', '1233211', '1233211']

<br>

### list들 반복생성하기
> JS에서는 보통 for문을 쓰지만 JSX안에서는 {} 중괄호안에 for문을 사용X

- 중괄호 안에 작성
    ```javascript
        [1,2,3].map(function(){
            return <div>안녕</div>
        })
    ```
    > 안녕 안녕 안녕


- HTML이 여러줄 들어간다면 () 소괄호 안에 작성
    ```javascript
        [1,2,3].map(function(){
          return (
            <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
    ```


- 실제글의 제목수만큼 생성해주세요~
    ```javascript
        글제목.map(function(){
          return (
            <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
    ```
    
    
- 왜 같은 글만 3개 보임? (파라미터 사용하자)
    ```javascript
        글제목.map(function(a){
          return (
            <div className="list">
            <h4>{ a }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
    ```


- 두번 째 파라미터는 0부터 증가하는 정수 (두 번째 파라미터 이용해도 동일)
    ```javascript
        글제목.map(function(a, i){
          return (
            <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
    ```
    > 글제목[i] = 글제목[0], 글제목[1], 글제목[2]

<br>

### HW: 따봉 누를때마다 모든 따봉들이 증가하는 것 해결
> 따봉을 기록할 state가 하나 밖에 없어서
- 따봉 state를 여러개 만들어도 되겠지만 state가 여러 값을 저장할 수 있는 배열이라는 점을 활용하자
- *array를 사용할 때 주의점*을 생각하자❗❗

<br>

### 일반 반복문으로 HTML을 생성하려면?
1. 변수에 *array* 추가
2. 반복문 작성
3. return()안에 사용
```javascript
  var 일반반복 = [];
  for(let i = 0; i < 3; i++){
    일반반복.push(<div key={i}>안녕</div>)
  }

  return(
    { 일반반복 }
  )
```

<br>

### 중괄호안에 HTML을 추가하면 오류가 뜨는 것 해결
> Warning: Each child in a list should have a unique "key" prop.
- 반복문 돌릴 때 마다 생성한 HTML은 각각 *다른 key값*을 가져야함❗


<!-------------------------------------------------------------------->
<br><br><br>


# level_9: 


<!-------------------------------------------------------------------->
<br><br><br>


# level_10: 