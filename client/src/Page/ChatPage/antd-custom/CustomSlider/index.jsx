import { Form, InputNumber, Slider } from "antd";
import { useState } from "react";

export const CustomSlider = (props) => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(100);
  const onChangeFirst = (newValue) => {
    setFirstValue(newValue);
  };
  const onChangeSecond = (newValue) => {
    setSecondValue(newValue);
  };
  const onAfterChange = (newValue) => {
    const [firstValue, secondValue] = String(newValue).split(",");
    setFirstValue(Number(firstValue));
    setSecondValue(Number(secondValue));
  };
  return (
    <div className="flex mb-6">
      <InputNumber
        min={1}
        max={secondValue}
        style={{ margin: "0 16px" }}
        value={firstValue}
        onChange={onChangeFirst}
      />
      <Form.Item name={"Khoảng lương mong muốn"} className="grow-1 w-full mb-0" initialValue={[1,100]}>
        <Slider min={1} max={100} onAfterChange={onAfterChange} {...props} />
      </Form.Item>
      <InputNumber
        min={firstValue}
        max={100}
        style={{ margin: "0 16px" }}
        value={secondValue}
        onChange={onChangeSecond}
      />
    </div>
  );
};
