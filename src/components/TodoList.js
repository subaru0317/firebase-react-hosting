import React, {useContext} from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { Table, Button } from 'reactstrap';

function TodoList() {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext)
  return (
    <Table>
      <tbody>
        {todos && todos.map((todo, index) => (
          <tr key={index}>
            <th className="text-start" style={{ textDecoration: todo.complete ? "line-through" : ""}}>
              {todo.text}
            </th>
            <td className="text-end">
              <Button
                color={todo.complete ? "success" : "secondary"}
                className="me-2"
                onClick={() => completeTodo(index)}>
                  {todo.complete ? "Complete!" : "Incomplete"}
              </Button>
              <Button
                color="danger"
                onClick={() => removeTodo(index)}>
                  delete
                </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TodoList