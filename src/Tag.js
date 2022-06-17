import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tag =(props)=>{
    const {title, value , logo} = props;
    return(
    <div className='flex flex-f-d-c flex-a-c'>
        <h1>{title}<FontAwesomeIcon icon={logo} /></h1>
        <p>{value}</p>
    </div>
    )
}

export default Tag;
