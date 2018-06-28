import React from 'react';
import {Image} from 'react-bootstrap';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const member = ({id,name,imgSrc}) =>(
    <p>
        <OverlayTrigger 
            placement='top' 
            overlay={<Tooltip id={id}>{name}</Tooltip>}
            delayShow={300}
            delayHide={150}>
            <Image src={imgSrc} circle width='30px' height='30px'/>
        </OverlayTrigger>
    </p>
);

export default member;