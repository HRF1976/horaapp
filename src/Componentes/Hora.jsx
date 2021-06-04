import React from 'react';

function dameHora (){
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    return `${horas} : ${minutos}`
}

function Hora() {
    return(
        <div>
            <h1>
                Hora {dameHora()}
            </h1>
        </div>
    )
}

export default Hora;