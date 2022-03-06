import PropTypes from 'prop-types'
import React from 'react'

const Spending = ({ value }) => {
    return (
        <li>
            <p>
                <strong>{value.name}</strong>
                <span className="gasto">${value.amount}</span>
            </p>
        </li>
    )
}

Spending.propTypes = {
    value: PropTypes.object.isRequired
}

export { Spending }

