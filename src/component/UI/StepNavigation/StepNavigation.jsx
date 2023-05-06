import React from 'react'
import { useSelector } from 'react-redux'
import './StepNavigation.css'

import Step from './Step/Step'

const StepNavigation = () => {
    const labelArray = useSelector(state => state.form.stepsTitle)
    return (
        <div className='stepWrapper'>
            {labelArray.map((item, index) => <Step key={index} index={index} label={item}></Step>)}
        </div>
    )
}

export default StepNavigation