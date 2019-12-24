import React from 'react';
import {Icon} from 'antd';

const ProjectIcon = ({type, number}) => <span style={{display: 'inline-block', marginLeft: '5px'}}><Icon type={type} /> {number}</span>; 

export default ProjectIcon;
