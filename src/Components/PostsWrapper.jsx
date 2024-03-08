/* eslint-disable */
import {Post} from "./Post.jsx";

/**
 * Post Wrapper
 * @param {any} posts
 * @returns {JSX.Element}
 * @constructor
 */
export function PostsWrapper({posts}) {


    return (
        <>
            <div className="row align-items-center justify-content-center mb-3 p-2">
                    {posts.map((post, index) => (
                       <Post
                           key={index}
                           id={post.id}
                           title={post.title}
                           image={`https://picsum.photos/id/${post.id}/280/180`}
                           description={post.body}
                           href={`#post:${post.id}`}
                           buttonLabel={"Lire l'article"}
                       />
                    ))}
            </div>
        </>
    )
}