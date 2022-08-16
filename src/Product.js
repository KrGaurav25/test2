import React from "react";
import "./product.css";
import ProductData from './ProductData'
import { NavLink } from "react-router-dom"
import Table from 'react-bootstrap/Table';
export default function Product() {
    return (
        <>
            <div className='nav-style'>
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Product'>Product</NavLink>
            </div>
            <Table striped>
                <tbody>
                    {
                        ProductData.map((item,i) =>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Author}</td>
                                <td>{item.Price}</td>
                                <td>{item.Rating}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}