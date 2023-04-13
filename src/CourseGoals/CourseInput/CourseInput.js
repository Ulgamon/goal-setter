import React from "react"

import Button from '../../UI/Button/Button'

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = React.useState('')

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        props.onAddGoal(enteredValue)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )

}
