import React from 'react';

const Contacto = () => {
    return (
        <>
            <form className="form">
            <div className="container contact">
                <div className="row">

                    <div className="col-md-3">
                    <div className="contact-info">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt=''/>
                        <h4>¡Contactase con nosotros!</h4>
                    </div>
                    </div>

                    <div className="col-md-9">
                        <div className="contact-form">

                            <div className='mb-3'>
                                <label htmlFor="nombre">Nombre</label>  
                                <div className="input-group">
                                    <span className="input-group-text">Nombre y Apellido</span>
                                    <input type="text" aria-label="First name" className="form-control" placeholder="Nombre" required/>
                                    <input type="text" aria-label="Last name" className="form-control" placeholder="Apellido" required/>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required/>
                                    <label htmlFor="floatingInput">nombre@ejemplo.com</label>
                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="telefono">Teléfono</label>
                                <div className="form-group">
                                    <div className="">
                                        <input id="phone" name="phone" type="tel" placeholder="Escriba su numero de teléfono aquí..." className="form-control" required/>
                                    </div>
                                </div>
                            </div>
                        
                            <div className='mb-3'>
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">¿Quieres comentar algo?</label>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Escriba su opinion aquí..." id="floatingTextarea" defaultValue={""} />
                                    <label htmlFor="floatingTextarea">Escriba su opinion aquí...</label>
                                </div>
                            </div>

                            <div className='buttonsForm'>
                                <button type="reset" className="btn btn-warning">Limpiar</button>
                                <button type="submit" className="btn btn-success">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default Contacto;
