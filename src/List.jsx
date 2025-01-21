import propTypes from 'prop-types';

function List(props){
    //this is an array of fruit
    const category = props.category;
    const itemList = props.items;

    
    //for each fruit in the fruits array-> put it in a list
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b></li>);

    //return the array as unordered list
    return(
        <>
            <h3 className="list-category" >{category}</h3>
            <ol className="list-item">{listItems}</ol>  
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number,
                                            name: propTypes.string,
                                            calories: propTypes.number
                                        }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List