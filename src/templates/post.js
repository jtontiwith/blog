import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import styled from 'styled-components';


export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug  } }) {
            frontmatter {
                title
                author
            }
            body
        }
    }
`;

const P = styled.p` 
    font-size: 0.75rem;
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <P>Posted by {post.frontmatter.author}</P>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to='/'>&larr; back to all posts</ReadLink>
    </Layout>

);

export default PostTemplate;