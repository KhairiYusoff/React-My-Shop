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
                const res = await axios.get(cat ? `http://localhost:3000/api/products?category=${cat}` : "http://localhost:3000/api/products")
                setProducts(res.data)
            } catch (err) {

            }
        };
        getProducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => {
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value))
            })
        )
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
    }, [sort])

    return (
        <div>
            <Container>
                {filteredProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}

export default Products