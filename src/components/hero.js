import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';


const ImageBackground = styled(BackgroundImage)`
    background-image: url("/images/hero-hal-gatewood.jpg");
    background-position: top 20% center; 
    background-size: cover; 
    height: 50vh;
    + * {
        margin-top: 0;
    }
`;

const TextBox = styled.div`
    background-image: linear-gradient(to top, #ddbbffdd, 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0.5rem calc((100vw - 550px) / 2) 2rem;
    width: 100%;


        h1 {
            text-shadow: 1px 1px 3px #eeddff66;
            font-size: 2.25rem;
        }

        p,
        a {
            color: #222,
            margin-top: 0;
        }

        a {
            margin-top: 0.5rem;
        }


`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "hero-hal-gatewood.jpg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeUn='soft'>
            <TextBox>
                <h1>Bits and Atoms</h1>
                <p>Hello human being - <Link to='/about'>Learn about me &rarr;</Link></p>
            </TextBox>
        </ImageBackground>
    );
}

export default Hero;