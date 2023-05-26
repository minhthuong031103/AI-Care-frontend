import { Radio, Col, Row } from "antd";
import React, { useState } from 'react';

export const CustomRadioGroup = (props) => (
  <Radio.Group {...props} buttonStyle={{}}>
      {props.type == "children"
        ? props.children
        : props.list.map((child) => {
            return (
                <Radio.Button value={child.value}>{child.label}</Radio.Button >
            );
          })}
  </Radio.Group>
);

export const CustomRadio = (props) => (
    <Radio {...props}>{props.label}</Radio>
  );
  

