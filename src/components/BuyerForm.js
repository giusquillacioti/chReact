const BuyerForm = ({ setBuyer }) => {

    const getData = (e) => {
        setBuyer(buyer => ({ ...buyer, [e.target.name]: e.target.value }))
    }

    return (
        <div className="formContainer">
            <h2>Completá tus datos</h2>
            <div className="form">
                <h4>Nombre completo</h4>
                <input type="text" name='name' onChange={getData} />
                <h4>Dirección de correo electrónico</h4>
                <input type="email" name='email' onChange={getData} />
                <h4>Celular</h4>
                <input type="number" name='phone' onChange={getData} />
            </div>
        </div>
    )
}
export default BuyerForm