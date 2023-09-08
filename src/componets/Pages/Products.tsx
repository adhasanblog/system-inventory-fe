import Table from "../Elements/Table";
import {Theme} from "@radix-ui/themes";
import {useEffect, useState} from "react";

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
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/products');

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const responseJson = await response.json();

                const {data} = responseJson

                console.log(data)

                const products = data.map(({brand_id, category_id, brand, created_at, updated_at, category, ...product}) => {
                    return{
                        ...product,
                        brand: brand.brand_name,
                        category: category.category_name,
                    }
                })
                setProducts(products)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <Theme scaling="100%" radius="large">
            <Table tableRootProps={{variant: "surface"}} tableBodyData={products} tableHeaderKey={headerTable}/>
        </Theme>
    )
};

export default Products;