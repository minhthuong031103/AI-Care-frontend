import { Checkbox, Row } from "antd";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const CheckboxWithButton = ({
  customValueUseState,
  options,
  handleRemoveOption = () => {},
}) => {
  const [value, setValue] = customValueUseState;
  const onChange = (checkedValues) => {
    setValue(checkedValues);
  };
  return (
    <>
      <Checkbox.Group
        className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 text-lg font-medium"
        onChange={onChange}
        value={value}
      >
        {options.map((row) => {
          if (value.includes(row.value))
            return (
              <div key={row.id} className="relative">
                <Row className="container border-2 outline outline-2 outline-primary border-primary rounded-lg bg-white w-full shadow h-12  flex align-center">
                  <Checkbox className="w-full p-2" value={row.value}>
                    {row.label}
                  </Checkbox>
                </Row>
              </div>
            );
          return (
            <div key={row.id} className="relative">
              <Row className="container border-2 hover:border-primary rounded-lg border-primary/[0.5] bg-white w-full shadow h-12  flex align-center">
                <Checkbox className="w-full p-2" value={row.value}>
                  {row.label}
                </Checkbox>
                <AiFillCloseCircle
                  onClick={() => handleRemoveOption(row.id)}
                  className="absolute top-[-5px] right-[-5px] text-[20px] text-red-600 hover:opacity-80 hover:cursor-pointer"
                />
              </Row>
            </div>
          );
        })}
      </Checkbox.Group>
    </>
  );
};
