import { Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

export const CustomTextArea = (props)=>{
    return ( <TextArea {...props}/>)
}