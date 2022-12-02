import Post from './Post';
function PostBox(props) {
    const { posts, text, color} = props;
    return ( 
    <section className="row p-3 gap-3">
        {
        posts.map( (post,i) => <Post 
            key={"post-"+i} 
            data={post}
            text={text} 
            color={color}/>)
        } 
    </section>
) }

export default PostBox;