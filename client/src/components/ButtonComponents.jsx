import React from 'react'
import { Button } from 'react-bootstrap'


const ButtonComponents = ({submitButtonText,color}) => {
    console.log(submitButtonText)
    return (
        <Button type="submit" variant={color}>{submitButtonText}</Button>
    )
}

export default ButtonComponents