import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Button } from "@material-ui/core";
import Moment from "react-moment";
import {useList, useListVals} from 'react-firebase-hooks/database'

import style from "./ValidacionDelUsuarioStyle.module.css";

function ValidacionDeUsuario(props) {
  const [usuario, setUsuario] = useState(); //Datos completos del usuario
  const [DNI, setDNI] = useState(props.dni); //DNI del Usuario que se busca
  const [loadPago, setPago] = useState(false); //Handler de contenido cuando el usuario existe
  const [nombre, setNombre] = useState(props.usuario); //Nombre del usuario que se busca
  const [noUser, setNoUser] = useState(false); //Handler de contenido cuando el usuario no existe

  const [values,loading,error] = useListVals(firebase.database().ref("usuarios"))
  console.log(values)
  console.log(loading)
  console.log(error)

  const buscarUsuario = () => {
    let lista = values; //Guarda el parámetro en una variable
    let nombreState = nombre.toLowerCase(); //Pasa el nombre del input a minusculas

    if (nombre !== "" && DNI === "") {

      lista.find((element)=>{
        let nombreElement = element.nombre.toLowerCase();
        if ((nombreElement === nombreState)) {
          setUsuario(element);
          setPago(true)
        }else {
             setNoUser(true);
             console.log("notUser1");
            } 
      })
    } else if (DNI !== "" && nombre === "") {
      lista.find((element)=>{
        console.log(element)
        let dniElement = element.dni;
        if ((dniElement === DNI)) {
          setUsuario(element);
          setPago(true);
        }else {
          setNoUser(true);
          console.log("notUser2");
         } 
      })
    } else if (DNI !== "" && nombre !== "") {
      lista.find((element)=>{
        let nombreElement = element.nombre.toLowerCase();
        let dniElement = element.dni;
        if ((nombreElement === nombreState) && (dniElement === DNI)) {
          setUsuario(element);
          setPago(true)
        } else {
          alert("Los datos no coinciden con ningun usuario");
        }
      })
    } else {
      alert("Debe ingresar el nombre o DNI del asociado");
    }
  };
  useEffect(() => {
    buscarUsuario()
  }, [loading])


  return (
    <div>
      {loadPago && usuario.pago && (
        <div className={style.containerValido}>
          Nombre y Apellido: {usuario.nombre}
          <br />
          DNI: {usuario.dni}
          <br />
          pago:{usuario.pago.toString()}
          <br />
          <Moment local format="DD/MM/YYYY" />
        </div>
      )}
      {loadPago && !usuario.pago && (
        <div className={style.containerInvalido}>
          Nombre y Apellido: {usuario.nombre}
          <br />
          DNI: {usuario.dni}
          <br />
          pago:{usuario.pago.toString()}
          <br />
          <Moment local format="DD/MM/YYYY" />
        </div>
      )}

      {noUser && !loadPago &&(
        <div>
          <p>El usuario no existe o los datos son erroneos</p>
        </div>
      )}

      <Button onClick={props.getUser} variant="contained">
        Volver
      </Button>
    </div>
  );
}

export default ValidacionDeUsuario;
