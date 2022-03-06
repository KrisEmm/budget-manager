import PropTypes from 'prop-types'
import React from 'react'

const Error = ({ message }) => {
    return (
        <>
            <p className="alert alert-danger error">{message}</p>
        </>
    )
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export { Error }

