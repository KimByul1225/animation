import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/animatepresence">animatepresence</Link>
                </li>
                <li>
                    <Link to="/draging">draging</Link>
                </li>
                <li>
                    <Link to="/dragingdrag_constraints">dragingdrag_constraints</Link>
                </li>
                <li>
                    <Link to="/gestures">gestures</Link>
                </li>
                <li>
                    <Link to="/layoutAnimation">layoutAnimation</Link>
                </li>
                <li>
                    <Link to="/motion_value">motion_value</Link>
                </li>
                <li>
                    <Link to="/multi_layout_animation">multi_layout_animation</Link>
                </li>
                <li>
                    <Link to="/slider">slider</Link>
                </li>
                <li>
                    <Link to="/svg">svg</Link>
                </li>
                <li>
                    <Link to="/variants">variants</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Home;


