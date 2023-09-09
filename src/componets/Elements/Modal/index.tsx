import React from "react";
import {Button, DialogContent, DialogRoot, DialogTrigger, Flex} from "@radix-ui/themes";

type DialogContentPropsType = React.ComponentProps<typeof DialogContent>;

interface ButtonTriggerProps {
    Icon?: React.ReactNode;
    Name?: string;
}

interface ModalProps {
    dialogContent?: DialogContentPropsType;
    buttonTrigger?: ButtonTriggerProps;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({dialogContent, buttonTrigger, children}) => {
    return (
        <DialogRoot>
            <DialogTrigger>
               <Flex justify="end">
                   <Button>{buttonTrigger.icon} {buttonTrigger.name}</Button>
               </Flex>
            </DialogTrigger>
            <DialogContent {...dialogContent}>
                {children}
            </DialogContent>
        </DialogRoot>
    )
}

export default Modal;