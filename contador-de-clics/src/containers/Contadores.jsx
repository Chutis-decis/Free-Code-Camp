import '../style/contador.css'

function Contadores ({ numClics }){
    return(
        <div className="contador">
            {numClics}
        </div>
    )
}
export default Contadores