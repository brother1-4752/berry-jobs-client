import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
`;

const HeaderTitle = styled.h1`
  font-weight: 800;
`;

// 헤더 3번째 컬럼 변수명 짓는 컨벤션이 있을까?
const HeaderColRight = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-evenly;
`;
const CategoryWrapper = styled.main``;

export default function Home() {
  return (
    <>
      <HeaderWrapper>
        <div style={{ marginLeft: "15px" }}>✖</div>
        <HeaderTitle>Berry Jobs</HeaderTitle>
        <HeaderColRight>
          <div>😎</div>
          <div>🖌</div>
        </HeaderColRight>
      </HeaderWrapper>
    </>
  );
}
