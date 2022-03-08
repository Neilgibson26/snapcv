import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

function FormTextInputNotRequired({ label, placeholder, value, onChange }) {
  return (
    <FormControl p="1vw">
      <FormLabel fontWeight="bold" fontSize="sm">
        {label}
      </FormLabel>
      <Input
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </FormControl>
  );
}

export default FormTextInputNotRequired;
