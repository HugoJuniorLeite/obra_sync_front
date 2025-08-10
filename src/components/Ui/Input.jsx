import { ErrorText, StyledInput, StyledLabel } from "../../layouts/Theme";

export function Input({ label, register, name, error, ...rest }) {
  return (
    <div>
      {label && <StyledLabel >{label}</StyledLabel>}
      <StyledInput
        {...(register && name ? register(name) : {})} // <- só aplica register se existir
        {...rest}
      />
      {error && <ErrorText>{error.message}</ErrorText>}
    </div>
  );
}
