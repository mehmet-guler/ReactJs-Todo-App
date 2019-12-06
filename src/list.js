import React from 'react';

const List = props=>(
    <ul>
        {
            props.items.map((e,i)=><li key={i} value={e} onClick={props.delete}>{e}</li>)
        }
    </ul>
);
export default List;