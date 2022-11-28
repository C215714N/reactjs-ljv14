import { Component } from 'react';
import Button from './Button';

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
        return(
            <div>
                <p>soy una publicacion</p>
                <Button text="like" />
                <Button text="love" />
                <button onClick={ this.changeState }>comentar</button>
                <textarea style={ 
                    this.state.hide ? 
                    { display: 'none' } : 
                    { display: 'block' } 
                }>
                </textarea>
            </div>
        )
    }
}

export default Post;