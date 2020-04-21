import React from 'react';
import styled from 'styled-components';
import Image from "gatsby-image";
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';

const Article = styled.article`
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-top: 0;
    padding-bottom: 1rem;
    :first-of-type {
        margin-top: 1rem;
    }
`;

const ImgLink = styled(props => <Link {...props} />)`
    margin: 1rem 1rem 0 0;
    width: 100px;
`;

const Div = styled.div`
    margin-top: 1rem;
`;

const PostPreview = ({ post }) => (
    <Article>
        <ImgLink to={post.slug}>
            <Image fluid={post.image.sharp.fluid} style={{ marginTop: 0 }} alt={post.title} />
        </ImgLink>
        <Div>
            <h3><Link to={post.slug}>{post.title}</Link></h3>
            <p>{post.exerpt}</p>
            <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
        </Div>
    </Article>

)

export default PostPreview;