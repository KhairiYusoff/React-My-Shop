import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
flex-wrap: wrap;
`
const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products")
            } catch (err) {

            }
        };
        getProducts()
    }, [cat])

    return (
        <div>
            <Container>
                {popularProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}

export default Products