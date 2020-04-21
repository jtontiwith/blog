import React from 'react';
import { Link } from 'gatsby'
import LayOut from '../components/layout';

const About = () => (
    <LayOut>
        <Link to='/'>home</Link>
        <h1>About Lean Product</h1>
        <p>Lean product is a custom software dev shop that keeps your development lean.</p>
    </LayOut>
)

export default About;