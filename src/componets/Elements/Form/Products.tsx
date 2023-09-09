import React from "react";
import Input from "../Input";
import {Button, Flex, Text} from "@radix-ui/themes";
import Select from "../Input/Select.tsx";

interface FormProductProps {
    dataBrands?: object[];
    dataCategories?: object[];
}

const FormProduct: React.FC<FormProductProps> = ({dataBrands, dataCategories}) => {
    const [productCode, setProductCode] = React.useState("");
    const [productType, setProductType] = React.useState("");
    const [brand, setBrand] = React.useState(dataBrands[0].brand_id.toString());
    const [category, setCategory] = React.useState(dataCategories[0].category_id.toString());
    const [unit, setUnit] = React.useState("");
    const [purchasePrice, setPurchasePrice] = React.useState("");
    const [sellingPrice, setSellingPrice] = React.useState("");
    const [description, setDescription] = React.useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            product_code: productCode,
            product_type: productType,
            brand_id: brand,
            category_id: category,
            unit: unit,
            purchase_price: purchasePrice,
            selling_price: sellingPrice,
            description: description,
        };

        console.log(newProduct)
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <Flex direction="column" gap="3">
                <label>
                    <Text as="span" weight="bold" size="2">
                        Product Code
                    </Text>
                    <Input
                        rootProps={{}}
                        slotProps={{}}
                        inputProps=
                            {
                                {
                                    style: {width: "100%"},
                                    value: productCode,
                                    onChange: (e) => setProductCode(e.target.value)
                                }
                            }
                    />
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Product Type
                    </Text>
                    <Input
                        rootProps={{}}
                        slotProps={{}}
                        inputProps={{
                            value: productType,
                            onChange: (e) => setProductType(e.target.value)
                        }}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Brand
                    </Text>
                    <Select selectItems={dataBrands} prefix="brand"
                            selectRootProps={{
                                value: brand,
                                onValueChange: (e) => setBrand(e.target.value)
                            }}
                            selectTriggerProps={{style: {width: '100%'}}}
                            selectContentProps={{position: ""}}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Category
                    </Text>
                    <Select selectItems={dataCategories}
                            prefix="category"
                            selectRootProps={{
                                value: category,
                                onValueChange: (e) => setCategory(e.target.value)
                            }}
                            selectTriggerProps={{style: {width: '100%'}}}
                            selectContentProps={{}}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Unit
                    </Text>
                    <Input rootProps={{}} slotProps={{}} inputProps={{}}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Purchase Price
                    </Text>
                    <Input rootProps={{}} slotProps={{}} inputProps={{}}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Selling Price
                    </Text>
                    <Input rootProps={{}} slotProps={{}} inputProps={{}}/>
                </label>
                <label>
                    <Text as="span" weight="bold" size="2">
                        Description Price
                    </Text>
                    <Input rootProps={{}} slotProps={{}} inputProps={{}}/>
                </label>
                <Button type="submit">Add Product</Button>
            </Flex>

        </form>
    );
}

export default FormProduct;