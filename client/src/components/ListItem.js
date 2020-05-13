import React from 'react';

const ListItem = ({className, word}) => {
    
        return(
            <div className = {className}>
                {word}
            </div>
        )
    
}

export default ListItem;