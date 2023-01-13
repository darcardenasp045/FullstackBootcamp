const Descripcion = (props) =>{
    return <h1 style = {{color: props.color}}> 
    {props.message}
    </h1>
  }//los colores son con doble llave, y van dentro de la etiqueta
   //los componentes siempre se inician con mayusculas, por que las etiquetas de HTML se inician con minusculas

export default Descripcion
