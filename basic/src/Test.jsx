import Header from "./Header.jsx";
import './test.css'
//컴포넌트 생성 Test(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <h1>Test 컴포넌트</h1>
            <Aside />
        </>
    )
}

//다른 컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;

//자식컴포넌트
function Aside(){
    return(
        <aside>
            <h1 style={{borderBottom:'2px solid #ccc', color:'red', textAlign:'left'}}>판매메뉴</h1>
            <a href="#">뚝배기불고기</a>
            <hr />
            <a href="#">닭도리탕</a>
            <hr />
            <a href="#">부대찌개</a>
            <hr />
            <a href="#">양념치킨</a>
            <hr />
            <a href="#">뼈해장국</a>
            <hr />
            <a href="#">순대국밥</a>
            <hr />
            <a href="#">소머리국밥</a>
            <hr />
            <a href="#">마라훠궈</a>
        </aside>
    )   
    
}