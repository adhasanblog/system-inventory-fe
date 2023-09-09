import React, {useEffect, useState} from "react";
import Table from "../Elements/Table";
import {Flex, Theme} from "@radix-ui/themes";
import Modal from "../Elements/Modal";
import {PlusIcon} from "@radix-ui/react-icons";
import FormProduct from "../Elements/Form/Products.tsx";

const headerTableProduct = [
    "No.",
    "Product Code",
    "Product Type",
    "Category",
    "Brand",
    "Unit",
    "Purchase Price",
    "Selling Price",
    "Description"
]
const Products = () => {
    const [headerTable] = useState(headerTableProduct)
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const brands = await fetch('http://localhost:3000/brands');
                const categories = await fetch('http://localhost:3000/categories');

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const responseJson = await response.json();
                const brandsJson = await brands.json();
                const categoriesJson = await categories.json();

                const {data} = responseJson

                const products = data.map(({
                                               product_id,
                                               product_code,
                                               product_type,
                                               brand_id,
                                               category_id,
                                               brand,
                                               created_at,
                                               updated_at,
                                               category,
                                               ...product
                                           }) => {
                    return {
                        product_id,
                        product_code,
                        product_type,
                        brand: brand.brand_name,
                        category: category.category_name,
                        ...product
                    }
                })
                setProducts(products)
                setBrands(brandsJson.data)
                setCategories(categoriesJson.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <Theme scaling="100%" radius="large">
            <Flex direction="column" gap="3">
                <Modal buttonTrigger={{icon: <PlusIcon width={18} height={18}/>, name: "Add Product"}}>
                    <FormProduct dataBrands={brands} dataCategories={categories}/>
                </Modal>
                <Table tableRootProps={{variant: "surface"}} tableBodyData={products} tableHeaderKey={headerTable}/>
            </Flex>
        </Theme>
    )
};

export default Products;
