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
        const { text, color } = this.props;
        const {id, userId, title, val, content} = this.props.data
        return(
            <div id={"post_" + id} className='card col-md p-0'>
                <h2 className='card-header'>{ title }</h2>
                <p className='card-body'>{ content }</p>
                <footer className='card-footer row gap-2'>
                    <address>
                        Publicado por { userId }
                    </address>
                    { val.map( (n,i) =>
                        <Button key={'button-'+ i }
                            gral="col mx-1 btn "
                            regular={"btn-outline-"+color[i]}
                            selected={"btn-"+color[i]}
                            value={n}
                            text={text[i]}/>
                    ) }
                    <button 
                        className="col mx-1 btn btn-outline-primary" 
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