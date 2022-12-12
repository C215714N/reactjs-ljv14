import { useState } from "react";

const Image = (props) => {
    const { data } = props
    const [select, setSelect] = useState(false);
    const imgSRC = select ? data.images.original.url : data.images.downsized_still.url
    return (
        <article className="card">
            <img className="w-100"
                src={ imgSRC } 
                alt={data.title} 
                onClick={ () => setSelect(!select) } />
            <h3>{data.title}</h3>
            <p><strong>Author:</strong> {data.username}</p>
        </article>
) }

export default Image;