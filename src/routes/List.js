import React from 'react';
import '../css/list.css';

class List extends React.Component {
    render() {
        const texts = [
            `item1 ei gieg eigig eigigggggggggggggggggggg`,
            `item2 ei gieg eigig eigigggggggggggggggggggg`,
            `item3 ei gieg eigig eigigggggggggggggggggggg`,
            `item4 ei gieg eigig eigigggggggggggggggggggg`,
            `item5 ei gieg eigig eigigggggggggggggggggggg`,
        ];
        return (
            <ul className="list">
                { texts.map( (text, index) => 
                    <li className="item" key={index}>
                        <p>{text}</p>
                    </li>
                )}
                <li className="space"></li>
            </ul>
        );
    }
  }
  
  export default List;