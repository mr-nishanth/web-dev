import React from 'react';
import { posts } from '../Constants/dummy';
import Post from './Post';
import '../Styles/posts.scss';
const Posts = () => {
    return (
        <div className='posts__container'>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
};

export default Posts;
