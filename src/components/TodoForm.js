import React, {useState, useContext} from 'react'
import { Form, InputGroup, Input, Button } from 'reactstrap';
import { TodosContext } from '../contexts/TodosContext'

function TodoForm() {
    const { addTodo } = useContext(TodosContext)
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault() // Formではsubmitした際にpageのreloadが発生する．これを妨げる．
        addTodo(value)
        setValue('')
    }
    return (
        <Form onSubmit={handleSubmit}>
          <InputGroup>
              <Input type="text"
                class="form-control"
                placeholder="Please write your task"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <Button type="submit" color="primary">Add</Button>
          </InputGroup>
        </Form>
    )
}

export default TodoForm