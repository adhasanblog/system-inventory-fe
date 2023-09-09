import React from "react";
import {SelectContent, SelectItem, SelectRoot, SelectTrigger} from "@radix-ui/themes";


type selectRootPropsType = React.ComponentProps<typeof SelectRoot>;
type selectTriggerPropsType = React.ComponentProps<typeof SelectTrigger>;
type selectContentPropsType = React.ComponentProps<typeof SelectContent>;

interface SelectProps {
    selectRootProps?: selectRootPropsType;
    selectTriggerProps?: selectTriggerPropsType;
    selectContentProps?: selectContentPropsType;
    selectItems?: object[];
    prefix?: string;
}

const dummySelectItems = [{id: "1", name: "test"}, {id: "2", name: "test2"}, {id: "3", name: "test3"}, {
    id: "4",
    name: "test4"
}];

const Select: React.FC<SelectProps> = ({
                                           selectRootProps,
                                           selectTriggerProps,
                                           selectContentProps,
                                           selectItems = dummySelectItems,
                                           prefix
                                       }) => {
    const [items] = React.useState(selectItems);

    return (
        <SelectRoot {...selectRootProps}>
            <SelectTrigger {...selectTriggerProps} />
            <SelectContent {...selectContentProps} >
                {items?.map((item, index) =>
                    <SelectItem key={index}
                                value={item[`${prefix}_id`].toString()}>{item[`${prefix}_name`]}</SelectItem>)}
            </SelectContent>
        </SelectRoot>
    )
};

export default Select;