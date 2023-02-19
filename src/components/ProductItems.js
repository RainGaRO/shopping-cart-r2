import React from 'react';
import './styles/ProductItems.scss';
 
export const ProductItems = ({ items, removeItems, incrementCount, decrementCount }) => {

    return (
        <table className='price-table'>
            <thead>
                <tr>
                    <th>Название товара</th>
                    <th>цена за 1 шт.</th>
                    <th>Кол-во</th>
                    <th>Цена (руб.)</th>
                    <th>Удалить</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td> {item.title} </td>
                        <td> {item.price} </td>
                        <td>
                            <button onClick={() => decrementCount(item.id, item.rating.count)}> - </button>
                            <span className='count'>{item.rating.count}</span>
                            <button onClick={() => incrementCount(item.id)}> + </button>
                        </td>
                        <td>{(item.price * item.rating.count).toFixed(1)}</td>
                        <td>
                            <button onClick={() => removeItems(item.id)}> X </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}