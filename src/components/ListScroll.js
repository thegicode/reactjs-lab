import React from 'react';
import '../css/listscroll.css';

class ListScroll extends React.Component {
    render() {
        const items = [
            `item1`,
            `item2`,
            `item3`,
            `item4`,
            `item5`,
            `item6`,
            `item7`,
            `item8`,
            `item9`,
            `item10`,
        ];
        return (
            <ul className="list">
                { items.map( (item, index) => 
                    <li className="item" key={index}>
                        <span>{item}</span>
                    </li>
                )}
            </ul>
        );
    }
  }
  
  export default ListScroll;