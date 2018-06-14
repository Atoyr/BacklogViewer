import React from 'react';
import {Image} from 'react-bootstrap';

const member = ({id,name,imgSrc,nameVisiility,imgVisibility}) =>(
    <div>
        <p><Image src={imgSrc} circle />
        {name}</p>
    </div>
);

export default member;