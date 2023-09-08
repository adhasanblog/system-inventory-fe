import React from "react";
import {TextField} from "@radix-ui/themes";

type rootPropsType = React.ComponentProps<typeof TextField.Root>;
type slotPropsType = React.ComponentProps<typeof TextField.Slot>;
type inputPropsType = React.ComponentProps<typeof TextField.Input>;

interface InputProps {
    rootProps?: rootPropsType;
    slotProps?: slotPropsType;
    inputProps?: inputPropsType;
}

const Input: React.FC<InputProps> = ({rootProps, slotProps, inputProps}) => {
    return (
        <TextField.Root {...rootProps}>
            <TextField.Slot {...slotProps}>
                <TextField.Input {...inputProps} />
            </TextField.Slot>
        </TextField.Root>
    )
}

export default Input;