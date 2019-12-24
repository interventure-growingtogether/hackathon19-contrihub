import React  from 'react';
import { Input } from "antd";

function CustomInput(props) {
    return (
        <div style={{width: '200px'}}>
            <Input size="large" {...props}/>
        </div>
    );
}

export default CustomInput;
