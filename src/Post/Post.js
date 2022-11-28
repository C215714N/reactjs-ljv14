import { Component } from 'react';
import Button from './Button';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

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
            <div className='bg-light bg-gradient p-3'>
                <p>soy una publicacion</p>
                <Button 
                    className="mx-1 btn btn-outline-success"
                    value={this.props.val[0]} 
                    text="like" />
                <Button 
                    className="mx-1 btn btn-outline-danger" 
                    value={this.props.val[1]}
                    text="love" />
                <Button
                    className="mx-1 btn btn-outline-warning"
                    value={this.props.val[2]}
                    text="enjoy"
                />
                <button 
                    className="mx-1 btn btn-outline-primary" 
                    onClick={ this.changeState }>
                    comentar
                </button>
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