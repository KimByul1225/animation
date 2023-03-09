import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child, div:last-child{
    grid-column: span 2;
  }
`

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

`

function BoxAnimation() {
  const boxArray = [1,2,3,4];
  // const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | number>(null);
  // const toggle = () => setClicked(prev => !prev)
  return (
    <Wrapper>
      <Grid>
        {boxArray.map(n => (
          <Box onClick={() => setId(n)} key={n} layoutId={n+""}/>
        ))}
        
      </Grid>
      <AnimatePresence>
        {
          id ? 
            <Overlay
              onClick={() => setId(null)}
              initial={{backgroundColor: "rgba(0, 0, 0, 0)"}} 
              animate={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} 
              exit={{backgroundColor: "rgba(0, 0, 0, 0)"}}
            >
              <Box layoutId={id+""} style={{width: 400, height: 200}}/>
            </Overlay> : null
        }
      </AnimatePresence>
    </Wrapper>
  );
}

export default BoxAnimation;