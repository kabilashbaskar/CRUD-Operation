import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import{
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

function AddStudents() {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUsers = {
      id: uuid(),
      name
    }
    addUser(newUsers)
    navigate('/');
  }


  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}

export default AddStudents