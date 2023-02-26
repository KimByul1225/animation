
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

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
  hover: {
    rotateZ: 90
  },
  click: {
    borderRadius:"100px"
  },
  

}



function DragingdragConstraints() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <BiggerBox
        ref={biggerBoxRef}
      >
        <Box
          drag
          // dragConstraints={{top: -50, bottom:50, left: -50, right: 50}}
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          // 드래그 후 본래 자리로 돌아가게 하는 옵션

          dragElastic={0.5}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default DragingdragConstraints;