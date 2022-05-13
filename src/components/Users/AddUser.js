import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState('')

  const nameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }


  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    if(+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }


    props.onAddUser(enteredUsername, enteredAge)

    
    setEnteredUsername('')
    setEnteredAge('')
  }


  const handlerError = () => {
    setError(null)
  }

  return (
    <div>
      {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={handlerError}/> }
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" value={enteredUsername} onChange={nameChangeHandler}/>
          <label htmlFor="userage">User Age</label>
          <input type="number" id="userage" value={enteredAge} onChange={ageChangeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
