import '@radix-ui/themes/styles.css';
import React from "react";
import {TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow} from "@radix-ui/themes";


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

}

const Table: React.FC<TableProps> = ({
                                         tableRootProps,
                                         tableHeaderRowProps,
                                         tableBodyRowProps,
                                         tableCellProps,
                                         tableColumnHeaderCellProps,
                                         tableHeaderKey,
                                         tableBodyData
                                     }) => {
    console.log(tableRootProps)
    return (
        <TableRoot {...tableRootProps}>
            <TableHeader>
                <TableRow {...tableHeaderRowProps}>
                    {tableHeaderKey?.map((key, index) => (
                        <TableColumnHeaderCell key={index} {...tableColumnHeaderCellProps}>{key}</TableColumnHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {tableBodyData?.map((data, index) => (
                    <TableRow key={index} {...tableBodyRowProps}>
                        {Object.values(data).map((value, index) =>
                            {
                                if(typeof value === "object"){
                                    return <TableCell key={index} {...tableCellProps}>{value[Object.keys(value)[0]]}</TableCell>
                                }
                                return  <TableCell key={index} {...tableCellProps}>{value}</TableCell>
                            }
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </TableRoot>
    )
};

export default Table;