import React from 'react';

export const Footer = (props) => {

    function handlerClick() {
        alert(`Спасибо за оформление заказа! Общая стоимость: ${props.result}$`)
    }

    return (
        <footer>
                <div className='result-panel'>
                    <span>
                        Общаяя стоимость: <span className='value'> {props.result} руб. </span>
                    </span>

                    <button onClick={handlerClick}> Оформить </button>
                </div>
        </footer>
    )
}