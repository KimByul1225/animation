
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AnimatePresenceStudy from "./AnimatePresenceStudy";
import Draging from "./Draging";
import DragingdragConstraints from "./DragingdragConstraints";
import Gestures from "./Gestures";
import Home from "./Home";
import LayoutAnimation from "./LayoutAnimation";
import MotionValue from "./MotionValue";
import MultiLayoutAnimation from "./MultiLayoutAnimation";
import Slider from "./Slider";
import SvgAnimation from "./SvgAnimation";
import VariantsComponents from "./Variants";

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/animatepresence" element = {<AnimatePresenceStudy />} />
          <Route path="/draging" element = {<Draging />} />
          <Route path="/dragingdrag_constraints" element = {<DragingdragConstraints />} />
          <Route path="/gestures" element = {<Gestures />} />
          <Route path="/layoutAnimation" element = {<LayoutAnimation />} />
          <Route path="/motion_value" element = {<MotionValue />} />
          <Route path="/multi_layout_animation" element = {<MultiLayoutAnimation />} />
          <Route path="/slider" element = {<Slider />} />
          <Route path="/svg" element = {<SvgAnimation />} />
          <Route path="/variants" element = {<VariantsComponents />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;