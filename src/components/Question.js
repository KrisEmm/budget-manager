import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Error } from "./Error";

const Question = ({
    setBudget,
    setRemainder,
    setShowQuestion
}) => {
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)
    const handleOnChange = (e) => {
        setAmount(parseInt(e.target.value, 10))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (amount < 1 || isNaN(amount)) {
            setError(true)
            return
        }
        setError(false)
        setBudget(amount)
        setRemainder(amount)
        setShowQuestion(false)
    }
    return (
        <>
            <h2>¿ Cual es tu presepuesto esta semana ?</h2>
            {error
                ? <Error
                    message="Vuelve a Intentar, Valor NO Valido."
                />
                : null}
            <form onSubmit={handleOnSubmit} >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleOnChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar"
                />
            </form>
        </>
    )
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemainder: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}

export { Question };

