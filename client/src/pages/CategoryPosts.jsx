import React, { useState } from 'react'; 
import POSTS from '../data'; 
import PostItem from '../components/PostItem'; 

const CategoryPosts = () => {
  const [posts, setPosts] = useState(POSTS); 

  return (
    <section>
      {posts.length > 0 ? ( 
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found 🔎</h2>
      )}
    </section>
  );
};

export default CategoryPosts;
