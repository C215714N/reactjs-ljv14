import { Component } from 'react';
import Button from './Button';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Post extends Component{
    constructor(props){
        super(props);
        /* Vinculamos el metodo con su invocacion */
        this.changeState = this.changeState.bind(this);
    }
    state = {
        hide: this.props.hidden || true
    }

    changeState(){
        /*  Modifica el valor (No renderiza el resultado)
            this.state.hide = !this.state.hide; 
        */
        this.setState({ hide: !this.state.hide });
    }

    render(){
        const { title, val, content } = this.props;
        const text = ['like', 'love', 'enjoy'];
        const color = ['success', 'danger', 'warning']
        return(
            <article className='card m-2 col-md p-0'>
                <h2 className='card-header'>{ title }</h2>
                <p className='card-body'>{ content }</p>
                <footer className='card-footer d-flex flex-wrap p-4 gap-2'>
                    { val.map( (n,i) =>
                        <Button key={'button-'+ i }
                            className={"col btn btn-outline-"+color[i]}
                            value={n}
                            text={text[i]}/>
                    ) }
                    <button 
                        className="col btn btn-outline-primary" 
                        onClick={ this.changeState }>
                        comentar
                    </button>
                    <textarea 
                        className='form-control mt-2'
                        style={ 
                        this.state.hide ? 
                        { display: 'none' } : 
                        { display: 'block' } 
                    }>
                    </textarea>
                </footer>
            </article>
        )
    }
}

export default Post;