import styled from "styled-components";
import { motion, Variants, useMotionValue, useMotionValueEvent, useTransform, useScroll } from "framer-motion";


const Wrapper = styled(motion.div)`
  height: 200vh;
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



function MotionValue() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x, 
    [-800, 0 ,800], 
    [
      "linear-gradient(135deg,rgb(32, 241, 252),rgb(28, 0, 238))", 
      "linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238))",
      "linear-gradient(135deg,rgb(51, 241, 143),rgb(225, 248, 124))", 
    ]);

    const {scrollY, scrollYProgress} = useScroll();
    // scrollY는 스크롤이 움직인 만큼의 px 
    // scrollYProgress는 스크롤이 전체 페이지에서 얼마정도의 백분율만큼 움직이는지
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5])

  useMotionValueEvent(scrollYProgress, "change", (l) => {
    console.log(l);
  });

  return (
    <Wrapper
      style={{
        background: gradient
      }}
    >
      <Box
        style={{x, rotate: rotate, scale: scale}}
        drag="x"
        dragSnapToOrigin
        variants={boxVariants}
      />
    </Wrapper>
  );
}

export default MotionValue;