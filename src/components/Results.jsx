import { useState } from "react";
import Image from './Image';

const Results = (props) => {
    const { data, word } = props
    return(
        <main>
            <h2>
                { word.length >= 3 ? 
                'Resultados de ' + word : 
                'Gifs Mas Populares' }
            </h2>
            { data.length >= 1 ? data.map(image => 
                <Image key={ image.id } data={ image } />  ) : '' }
        </main>
    )
}

export default Results;