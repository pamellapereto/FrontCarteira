export default function Panel(props) {

    var caminho = "";

    if (props.data.cardname == "Visa Gold") {
        caminho = "./img/holdingVisa.png";
    }

    else if (props.data.cardname == "Mastercard") {
        caminho = "./img/holdingMastercard.png";
    }

    else if (props.data.cardname == "Elo") {
        caminho = "./img/holdingElo.png";
    }

    return (
        
        <div className="panel">
            <img src={caminho}/>
            {console.log(caminho)}
        </div>
    );

}