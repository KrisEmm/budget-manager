/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Error } from './Error';

const Form = ({ setExpense, setThereAreNewExpense }) => {
    const [spendingName, setSpending] = useState('')
    const [amountBySpending, setAmountBySpending] = useState(0)
    const [error, setError] = useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (amountBySpending < 1 || isNaN(amountBySpending) || spendingName.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        const spending = {
            id: nanoid(),
            name: spendingName,
            amount: amountBySpending
        }
        setExpense(spending)
        setThereAreNewExpense(true)
        setSpending('')
        setAmountBySpending(0)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <h2>Tus gastos han sido en:</h2>
                {
                    error
                        ? <Error message="Algo ha ido mal, Intenta de nuevo." />
                        : null
                }
                <div className="campo">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={spendingName}
                        onChange={e => setSpending(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={isNaN(amountBySpending) ? '' : amountBySpending}
                        onChange={e => {
                            setAmountBySpending(parseInt(e.target.value, 10))
                        }}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar"
                    />
                </div>
            </form>
        </>
    )
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setThereAreNewExpense: PropTypes.func.isRequired
}

export { Form };

