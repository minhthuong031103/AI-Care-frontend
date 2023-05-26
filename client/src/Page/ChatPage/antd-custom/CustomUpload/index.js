import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import React from "react";
const { Dragger } = Upload;

export const CustomDragger = (props) => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading
      company data or other band files
    </p>
  </Dragger>
);

export const CustomUpload = (props) => {
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};
