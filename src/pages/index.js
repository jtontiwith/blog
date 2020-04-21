import React from 'react';
import LayOut from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
    const posts = usePosts();
    // <pre>{JSON.stringify(post, null, 2)}</pre>
    return (
        <>
            <Hero />
            <LayOut>
                <h2>Read my Blog</h2>
                {posts.map(post => (
                    <PostPreview key={post.slug} post={post} />
                ))}
                <Insta />
            </LayOut>
        </>
    );
};
