import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const Manager = ({
    budget,
    remainder
}) => {
    const [alert, setAlert] = useState('alert alert-success')
    useEffect(() => {
        const alerts = {
            success: 'alert alert-success',
            warining: 'alert alert-warning',
            danger: 'alert alert-danger'
        }
        if ((budget / 4) > remainder) {
            setAlert(alerts.danger)
        }
        else if ((budget / 2) >= remainder) {
            setAlert(alerts.warining)
        }
        else {
            setAlert(alerts.success)
        }

    }, [remainder, budget])

    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={alert}>
                Disponible:  ${remainder}
            </div>
        </>
    )
}

Manager.propTypes = {
    budget: PropTypes.number.isRequired,
    remainder: PropTypes.number.isRequired
}

export { Manager }

