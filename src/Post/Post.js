import { Component } from 'react';
import Button from './Button';

import 'bootstrap/dist/css/bootstrap.css';

class Post extends Component{
    constructor(props){
        super(props);
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
        console.log(this.state.hide);
    }

    render(){
        const { title, val, content, text, color } = this.props;
        return(
            <div className='card'>
                <h2 className='card-header'>{ title }</h2>
                <p className='card-body'>{ content }</p>
                <footer className='card-footer'>
                    { val.map( (n,i) =>
                        <Button key={'button-'+ i }
                            className={"mx-1 btn btn-outline-"+color[i]}
                            value={n}
                            text={text[i]}/>
                    ) }
                    <button 
                        className="mx-1 btn btn-outline-primary" 
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
            </div>
        )
    }
}

export default Post;