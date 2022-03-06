import PropTypes from 'prop-types';
import React from 'react';
import { Spending } from "./Spending";

const List = ({ expenses }) => {
    return (
        <>
            <h2>Lista de gastos</h2>
            <ul className="gastos-realizados">
                {expenses.map(spending => <Spending key={spending.id} value={spending} />)}
            </ul>
        </>
    )
}
List.propTypes = {
    expenses: PropTypes.array.isRequired
}
export { List };

