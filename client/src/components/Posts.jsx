import React ,  {useState } from 'react'
import PostItem from './PostItem'

import SystemDesignThumbnail from '../images/blog1.png'
import BigONotationThumbnail from '../images/blog2.png'

const POSTS = [
    {
        id: '1',
        thumbnail: SystemDesignThumbnail,
        category: 'System Design',
        title: '🌐 Exploring Key System Design Concepts in Software Engineering',
        description: 'This is the first post',
        authorID: 1,
    },
    {
        id: '2',
        thumbnail: BigONotationThumbnail ,
        category: 'Concepts',
        title: '🚀 Unlocking the Power of Big O Notation',
        description: 'This is the first post',
        authorID: 1,
    }
]

const Posts = () => {
    const [posts , setPosts] = useState(POSTS)
    return (
        <section className="posts">
            <div className="container posts__container">
                {
                    posts.map(({ id, thumbnail, category, title, description, authorID }) =>
                    <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID ={authorID} />)
                }
            </div>
        </section>
    )
 }

export default Posts