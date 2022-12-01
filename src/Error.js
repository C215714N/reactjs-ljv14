const Error = (props) => 
    <div className="card col-md-6 my-3 mx-auto">
        <h2 className="card-header">Felicitaciones <br/> Logro:{props.code}</h2>
        <p className="card-body">
            Has desbloqueado una ruta inexistente, ganaste 100 puntos
        </p>
    </div>

export default Error;