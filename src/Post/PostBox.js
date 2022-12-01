import Post from './Post';
function PostBox(props) {
    const { posts, text, color} = props;
    return ( 
        posts.map( (post,i) => <Post key={"post-"+i} title={post.title} content={post.content} val={post.val} text={text} color={color}/>)
) }

export default PostBox;