import React from "react"
import ProductRow from "./ProductRow.jsx"

const ProductTable = props => {
    // console.log(props);
    return (
        <table style={{
            marginLeft: "50%",
            transform: "translate(-50%)",
            backgroundColor: "red",
            height: "200px"
        }}>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                {props.products.map((product, index) => {
                    return (
                        <ProductRow key={index} product={product} />
                    )
                })}
            </tbody>
        </table>

    )
}



export default ProductTable 