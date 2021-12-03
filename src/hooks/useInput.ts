import React, { useState } from "react";

const useInput = (validator: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validator(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        isValid: valueIsValid,
        register: {
          value: enteredValue,
          onChange: valueChangeHandler,
          onBlur: inputBlurHandler,
          hasError,
        },
        reset
    }
}

export default useInput