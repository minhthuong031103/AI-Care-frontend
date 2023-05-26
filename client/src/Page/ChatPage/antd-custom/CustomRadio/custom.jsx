import { Radio, Row } from "antd";
import { useState } from "react";

export const RadioWithButton = (props) => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log("checked = ", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group
        className="grid w-full max-w-sm gap-3 text-lg font-medium"
        onChange={onChange}
      >
        {props.options.map((row) => {
          if (value == (row.value))
            return (
              <Row className="container border-2 outline outline-2 outline-primary border-primary rounded-lg p-2 bg-white w-full shadow h-12  flex align-center">
                <Radio className="w-full" value={row.value}>
                  {row.label}
                </Radio>
              </Row>
            );
          return (
            <Row className="container border-2 hover:border-primary rounded-lg border-primary/[0.5] p-2 bg-white w-full shadow h-12  flex align-center">
              <Radio className="w-full" value={row.value}>
                {row.label}
              </Radio>
            </Row>
          );
        })}
      </Radio.Group>
    </>
  );
};
