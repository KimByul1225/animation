import styled from "styled-components";
import { motion, Variants, useMotionValue, useMotionValueEvent } from "framer-motion";


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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;


const boxVariants: Variants = {

  

}



function App() {
  const x = useMotionValue(0);
  useMotionValueEvent(x, "change", (l) => {
    console.log(l);
  });
  return (
    <Wrapper>
      <Box
        style={{x}}
        drag="x"
        dragSnapToOrigin
        variants={boxVariants}
      />
    </Wrapper>
  );
}

export default App;