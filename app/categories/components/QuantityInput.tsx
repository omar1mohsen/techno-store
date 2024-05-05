"use client"
import * as React from 'react';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import { FaMinus, FaPlus } from 'react-icons/fa';


const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <FaPlus />,
          className: 'increment',
        },
        decrementButton: {
          children: <FaMinus />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput({setQuantity , quantity}:any) {
  return <NumberInput aria-label="Quantity Input" value={quantity} min={1} max={99} onChange={(event, val)=> setQuantity (val)} defaultValue={1} />;
}


const StyledInputRoot = styled('div')(
  ({ theme }) => `
  max-width:150px;
  color: var(--tes-light-gry-color);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border:1px solid var(--tes-light-gry-color);
  padding:.5rem 1rem;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color:#000;
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.785rem;
  box-sizing: border-box;
  line-height: 1.5;
  color: #191C1F;
  width: 24px;
  height: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);
