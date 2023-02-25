import styled from "styled-components";
import { motion } from "framer-motion";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        initial={{scale: 0}}
        // Element의 초기값을 지정

        transition={{type: "spring", damping: 5, delay: 1}} 
        //type은 물리법칙, damping은 반동, stiffness는 경직도 등 다양한 옵션을 설정 할 수 있음.

        animate={{scale: 1, rotateZ: 360}}
        //최종 스타일
      />
    </Wrapper>
  );
}

export default App;