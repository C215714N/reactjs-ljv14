import Post from './Post';
function PostBox(props) {
    const { posts, text, color} = props;
    return ( 
    <section className="row p-3 gap-3">
        {
        posts.map( (post,i) => <Post key={"post-"+i} title={post.title} content={post.content} val={post.val} text={text} color={color}/>)
        } 
    </section>
) }

export default PostBox;