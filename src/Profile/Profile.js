import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            baseURL: 'https://jsonplaceholder.typicode.com',
            users: [],
            posts: [],
            isLoaded: false
        }
    }

    render(){
        return(
            this.state.users.length > 1 ? 
            <h2>Usuario</h2> : 
            <h2>Cargando Usuarios</h2>
        )
    }
    componentDidMount(){
        fetch(`${this.state.baseURL}/users?id=${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState( { users: data } ) )
    }
    componentWillUnmount(){

    }
}
export default Profile;