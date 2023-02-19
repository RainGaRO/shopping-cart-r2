import React, {useEffect, useState} from 'react';
import { Footer } from '../components/Footer';
import { ProductItems } from './ProductItems';
import { EmptyProduct } from './EmptyProduct';
// import { data } from '../data';
import './styles/ShoppingCart.scss'

export default function ShoppingCart() {
    const [items, setItems] = useState([]);

    const result = items.reduce((prevValue, currentItem) => 
        prevValue + currentItem.rating.count * currentItem.price
    , 0)

    const fixSum = result.toFixed(1);

    async function fetchPoducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=10')
            let resResult = await response.json();
           setItems(resResult)
        } catch (error) {
            alert(`${error.name}: Данные с сервера не получены!`);
        }
    }

    useEffect(() => {
        fetchPoducts()
    }, [])

    const handlerRemoveItem = (id) => {
        setItems(items.filter( item => item.id !== id ))
    }

    const handlerIncrementCount = (id) => {
        setItems(items.map(item => {
            if(item.id === id) {
                item.rating.count++;
            }
            return item;
        }))
    }

    const handlerDecrementCount = (id, count) => {
        if(count < 2) {
            handlerRemoveItem(id);
        } else {
            setItems(items.map(item => {
                if(item.id === id) {
                    item.rating.count--;
                }
                return item;
            }))
        }
    }

    return (
        <div>
            <h1> Корзина товаров</h1>
            {
                !!items.length ?
                <ProductItems items={items} removeItems={handlerRemoveItem} incrementCount={handlerIncrementCount} decrementCount={handlerDecrementCount}/>
                : <EmptyProduct />
            }
            {!!items.length && <Footer result={fixSum}/>}
        </div>
    );
}