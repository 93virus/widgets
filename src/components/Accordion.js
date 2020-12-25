
import React, { useState } from 'react'

const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((items, index) => {

        const active = index === activeIndex ? 'active' : '';

        return <React.Fragment key={items.title}>
            <div className={"title " + active}
            onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {items.title}
            </div>
            <div className={"content " + active}>
                {items.content}
            </div>
        </React.Fragment>
    });

    return(
        <div className="ui styled accordion">{renderedItems}</div>
    );
}

export default Accordion;