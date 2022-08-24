import Item from "../item/item";
import "./list.css"
function List(props) {
    
    
    return (
        <div className="list">
            {props.pets.map(pet => {
                return (<Item key={pet.desertionNo} data={pet} onSelected={props.onSelected} />)
            })}
        </div>
    );
}

export default List;