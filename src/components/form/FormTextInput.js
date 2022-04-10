import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

function FormTextInput({
  label,
  placeholder,
  value,
  onChange,
  isRequired = true,
  isNumber = false,
}) {
  return (
    <FormControl p="1vw" isRequired={isRequired}>
      <FormLabel fontWeight="bold" fontSize="sm">
        {label}
      </FormLabel>
      <Input
        placeholder={placeholder}
        value={value ?? ""}
        type={isNumber ? "number" : "text"}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </FormControl>
  );
}

export default FormTextInput;
