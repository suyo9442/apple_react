# leve2_1: 새로운 프로젝트 생성 & Bootstrap 사용하기

## React-Bootstrap Get started

<!-------------------------------------------------------------------->

<br><br><br>

# leve2_2: 이미지 넣는 법 & public 폴더 이용하기

1. css에서 이미지 사용하기
```css
.main-bg {
  height: 300px;
  background-image: url("./img/bg.png");
  background-size: cover;
  background-position: center;
}
```

2. html(App.js)에서 이미지 사용하기
   > import하고, 변수명 입력하기

```javascript
import bg from "./img/bg.png";
<div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>;
```

3. public 폴더 이미지 사용 시
- /이미지.png 최상위 루트 사용
- 주의사항: .com/어쩌구/ 히위 경로에 발행할 때 문제

   1) 해결법1
   ```html
   <img src="/어쩌구/이미지.png"/>
   ```

   2) 해결법2 (권장방식)
   ```html
   <img src={process.env.PUBLIC_URL + '/logo192.png'} />
   ```


<!-------------------------------------------------------------------->
<br><br><br>


# leve2_3: 코드 길어지면 import export 하면 됩니다

- 코드가 길어지면 다른 파일에 따로 뺀다
- 다른 파일에 있는 자료를 가져오려면 import / export 문법 사용, 변수를 export하고 import하면 됨

<br>

## export 문법
1. 변수가 하나일 때
   ```javascript
   export default 변수명;
   {작명}
   ```

2. 요소가 여러개일 때
   ```javascript
   export {a, b};
   import {a, b} from './data.js'; //작명X
   {a} {b}
   ```

컴포넌트도 export도 가능

jsx에서 object자료 사용하기

> let data = [{}, {}, {}]

- array
  let a = ['kim', 20]
  a[0]

- object
  let b = { name: 'kim', age: 20 }
  b.name
  b.age

복잡한 자료에서 데이터 뽑을 땐 시작기호 보기
console.log(shoes); // [ 로 시작함 => array

> shoes[0]

console.log(shoes[0]); // { 로 시작함 => object

> shoes[0].content

<!-------------------------------------------------------------------->

<br><br><br>

# leve2_4: 저번시간 숙제 해설 (Card 컴포넌트 만들기)

> 박스 컴포넌트화 하고, 데이터바인딩하기
> 부모 state 전송하기 props

1. 컴포넌트화 하기
   > 반복되는 건 하나로 만들고, 반복문써서 출력

1) 컴포넌트 만들기

2) state는 props로 가져와 쓰기
   function Card(props)
   <Card shoes={shoes}/>

2. 같은 컴포넌트를 각각 다른 디자인으로 출력하기
   > 함수 파라미터 문법 사용하기

1) 컴포넌트에선 state전체를 바인딩하고
   {props.shoes.title}

2) App에서 해당자료의 순번대로 props해서 쓰기
   <Card shoes={shoes[0]}/>
   <Card shoes={shoes[1]}/>
   <Card shoes={shoes[2]}/>

3. 사진주소는 어떻게?

1) 해당 숫자 props로 전송하기
   <Card shoes={shoes[0]} i={1}/>

2) js코드로 {} 바꿔주고 props 삽입
   <img src={"https://codingapple1.github.io/shop/shoes" + props.i +".jpg"} />

4.  map반복문으로 같은 컴포넌트 여러개 출력하기
    > shoes의 갯수만큼 <Card>를 생성해주세요~
    > {
    > shoes.map(function(a, i){
        return (
        <Card shoes={shoes[i]} i={i}/>
        )
    })
    }

<!-------------------------------------------------------------------->

<br><br><br>

# leve2_5: 리액트 라우터 1 : 셋팅이랑 기본 라우팅

> 페이지나누기 (상세페이지, 장바구니페이지..)
> url마다 페이지 구분하기 (/detail, /cart)

1. 컴포넌트 만들어서 상세페이지 내용 채움
2. /detail 접속하면 기존 html내용을 지우고 해당 컴포넌트를 보여줌

   > 조건문을 사용해서 /detail에 접속하면 ~컴포넌트 보여주세요 해도
   > 되지만 코드가 길어지기 때문에 react-router-dom 라이브러리를 사용하자!

3. 터미널에서 install
4. index.js에서
   import { BrowserRouter } from 'react-router-dom';
   <BrowserRouter>
   <App />
   </BrowserRouter>
   > 경로가 없는 import는 라이브러리, 있는건 내가 만든거
5. App.js에서
   import { Routes, Route, Link } from 'react-router-dom'
   <Routes>
   <Route path="/" element={} />
   <Route path="/detail" element={} />
   </Routes>

<!-------------------------------------------------------------------->

<br><br><br>

# leve2_6: 리액트 라우터 2 : navigate, nested routes, outlet

## 외부 컴포넌트 사용하기

1. 외부파일 만들어서 export
2. App.js에서 import
   import Detail from "./detail.js"
3. 사용~

<br/>

## 페이지 이동 도와주는 useNavigate

<Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
<Nav.Link onClick={() => { navigate(1) }}>앞으로</Nav.Link>
<Nav.Link onClick={() => { navigate(-1) }}>뒤로</Nav.Link>

<br/>

## 404 페이지

- 별표는 이외의 모든 페이지를 뜻함
  <Route path="\_" element={<div>없는페이지</div>} />

<br/>

## Nested Routed

1. outlet으로 컴포넌트에 구멍 뚫기
   function Nested() {
   return (
   <div>
   <h3>오늘의 이벤트</h3>
   <Outlet />
   </div>
   )
   }

2. Nested Routed 구성하기
   <Route path="/event" element={<Nested />}>
   <Route path="one" element={
   <h4>첫 주문 시 양배추즙 서비스</h4>
   } />
   <Route path="two" element={
   <h4>생일기념 쿠폰받기</h4>
   } />
   </Route>


<!-------------------------------------------------------------------->
<br><br><br>


# leve2_7: 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기
> 상품이 100개있으면 Route 100개 만들거야? ㄴㄴ


## URL 파라미터 문법 사용
path="/detail/:id"

### params로 현재 URL값 가져오기
import { useParams } from 'react-router-dom'
let { id } = useParams();
console.log(id)

* id라는 변수가 이상하면 상품없다는 UI보여주세요~ 조건문사용
* 정렬을 하면 detail/0이 정렬순서대로 바뀌는 문제?


<!-------------------------------------------------------------------->
<br><br><br>


# leve2_8: styled-components 쓰면 CSS 파일 없어도 되는데
## js파일안에서 css문법 다 해결하고 싶을 때
- 장점?
    - 스타일이 다른 js파일로 간섭되지 않음
        - App.css에 쓴 속성들은 다른 js에서도 적용이 됨 (압축되는 과정에서 합쳐짐)
        > 해결법? App.modules.css로 작명하면 App.js에서만 적용됨

    - 페이지 로딩시간 단축
    - 협업 시 이슈


- 단점?
    - JS파일 복잡해짐
    - 중복스타일은 컴포넌트 간에 import해야하는데 CSS와 다를 바 없게됨


- props를 사용해서 다른 스타일을 적용해서 재활용 가능
background: ${props => props.bg};
<YellowBtn bg="blue">버튼</YellowBtn>


- 다른 스타일 컴포넌트를 복붙해서 사용 가능
let newBtn = styled.button(YellowBtn)``


<!-------------------------------------------------------------------->
<br><br><br>


# leve2_10: Lifecycle과 useEffect 1
## 컴포넌트 lifecycle: 컴포넌트 장착(mount), 업데이트(update), 제거(unmount)
> 왜 배우는가? 중간중간 갈고리를 걸어서 간섭가능(코드실행 가능)

1. mount, update 될 때
    // mount, update될 때 실행
    useEffect(() => {
        console.log('안녕')
    })

    > 밖에다 써도 똑같이 작동하는데?
        - useEffect는 실행지점이 조금 다름, useEffect는 HTML 렌더링이 다 끝나고 동작됨
        - 로드가 오래걸리는 코드는 HTML 렌더링이 끝나고 동작시키는게 좋기 때문에 useEffect를 사용
        - 어려운 연산, 서버에서 데이터 가져올 때, 타이머 장착, Side Effect를 보관할 때


<!-------------------------------------------------------------------->
<br><br><br>


# leve2_11: Lifecycle과 useEffect 2
## useEffect 실행조건 넣기 []
- []안의 state가 변경될 때 코드 실행
- [] 사용X : undate, mount될 때마다 실행
- [] 사용O : mount될 때 1회 실행


## useEffect 동작 전에 실행되는 return() => {} 
> 기존 타이머는 제거해주세요~, 기존 데이터요청 제거해주세요~
- 재렌더링 될 때마다 실행되는 useEffect, 무한으로 실행되는 것 막을 수 있음


## 빡통식 정리 ㅋㅋ
1. 재렌더링 마다 코드실행하고 싶을 때 사용
    useEffect(()=>{})

2. mount시 1회 코드실행하고 싶을 때
    useEffect(()=>{}, [])

3. unmount시 1회 코드실행하고 싶을 때
    useEffect(()=>{
        return() -> {}
    }, [])
