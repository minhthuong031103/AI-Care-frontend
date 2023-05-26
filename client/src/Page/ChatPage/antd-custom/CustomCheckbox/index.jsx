import { Checkbox, Col, Row } from "antd";
import React, { useState } from 'react';

export const CustomCheckboxGroup = (props) => (
  <Checkbox.Group {...props}>
    <Row>
      {props.type == "children"
        ? props.children
        : props.list.map((child) => {
            return (
              <Col span={child.colSpan && 1}>
                <Checkbox value={child.value}>{child.label}</Checkbox>
              </Col>
            );
          })}
    </Row>
  </Checkbox.Group>
);

export const CustomCheckbox = (props) => (
    <Checkbox {...props}>{props.label}</Checkbox>
  );
  

