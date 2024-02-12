import "./Card.css"
export function Card(prop:{cardRef:string}){
    return (
    <div className="container">
        <div className="box-gradient">
         <img src={prop.cardRef}></img>
        </div>
    </div>
    )
}