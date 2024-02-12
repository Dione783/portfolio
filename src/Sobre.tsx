import "./sobre.css";

export function Sobre(prop:{titulo:string,texto:string,obs:string}){
    return  (
    <div className="container-sobre">
        <h3>{prop.titulo}</h3>
        <p>{prop.texto}</p>
    </div>
    )
}