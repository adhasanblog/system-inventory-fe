import '@radix-ui/themes/styles.css';
import React from "react";
import {
    Button,
    Flex,
    TableBody,
    TableCell,
    TableColumnHeaderCell,
    TableHeader,
    TableRoot,
    TableRow
} from "@radix-ui/themes";
import {EyeOpenIcon, Pencil2Icon, TrashIcon} from "@radix-ui/react-icons";


type tableRootPropTypes = React.ComponentProps<typeof TableRoot>;
type tableRowPropTypes = React.ComponentProps<typeof TableRow>;
type tableCellPropTypes = React.ComponentProps<typeof TableCell>;
type tableColumnHeaderCellPropTypes = React.ComponentProps<typeof TableColumnHeaderCell>;


interface TableProps {
    tableRootProps?: tableRootPropTypes;
    tableHeaderRowProps?: tableRowPropTypes;
    tableBodyRowProps?: tableRowPropTypes;
    tableCellProps?: tableCellPropTypes;
    tableColumnHeaderCellProps?: tableColumnHeaderCellPropTypes;
    tableHeaderKey?: string[];
    tableBodyData?: object[];
    isRoute?: boolean;

}

const Table: React.FC<TableProps> = ({
                                         tableRootProps,
                                         tableHeaderRowProps,
                                         tableBodyRowProps,
                                         tableCellProps,
                                         tableColumnHeaderCellProps,
                                         tableHeaderKey,
                                         tableBodyData,
                                         isRoute = false
                                     }) => {
    console.log(tableRootProps)
    return (
        <TableRoot {...tableRootProps}>
            <TableHeader>
                <TableRow {...tableHeaderRowProps}>
                    {tableHeaderKey?.map((key, index) => (
                        <TableColumnHeaderCell key={index} {...tableColumnHeaderCellProps}>{key}</TableColumnHeaderCell>
                    ))}
                    <TableColumnHeaderCell  {...tableColumnHeaderCellProps}>Control</TableColumnHeaderCell>

                </TableRow>
            </TableHeader>

            <TableBody>
                {tableBodyData?.map((data, index) => (
                    <TableRow key={index} {...tableBodyRowProps}>
                        {Object.values(data).map((value, index,) => {

                                return <TableCell key={index} {...tableCellProps}>{value}</TableCell>
                            }
                        )}
                        <TableCell  {...tableCellProps}>
                            <Flex gap="2">
                                <Button>
                                    <Pencil2Icon width={15} height={15}/>
                                </Button>
                                <Button>
                                    <TrashIcon width={15} height={15}/>
                                </Button>
                                {isRoute && <Button>
                                    <EyeOpenIcon width={15} height={15}/>
                                </Button>}
                            </Flex>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableRoot>
    )
};

export default Table;