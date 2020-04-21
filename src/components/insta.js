import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import useInstagram from '../hooks/use-instagram';

const A = styled.a`
    box-shadow: 0;
    display: block;
    margin: 0.5rem;
    max-width: calc(33% - 1rem); 
    width: 120px;
    transition: 200ms box-shadow linear;
    :focus,
    :hover {
        box-shadow: 0 2px 14px #22222244
        z-index: 10;
    }
`;

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem -0.5rem; 
`

const Insta = () => {
    const instaPhotos = useInstagram();
    const { username } = instaPhotos[0];
    const photosArray = instaPhotos.map(photo => <A key={photo.id} href={`https://instagram.com/p/${photo.id}/`}>
        <Image
            fluid={photo.fluid}
            alt={photo.caption}
            style={{ width: '100%', marginTop: 0 }}
        />
    </A>)
    return (
        <>
            <h2>Instagram post from @{username}</h2>
            <Div>{photosArray}</Div>
            <a href={`https://instagram.com/${username}`}>see more on Instagram &rarr;</a>
        </>

    )


}

export default Insta;