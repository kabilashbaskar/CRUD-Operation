import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../Context/GlobalState'
import { Link, useNavigate } from 'react-router-dom';
import{
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export default function EditStudents (props) {
  const [selectedStudent, setselectedStudent] = useState({
    id: '',
    name: ''
  });
  const { students, editStudents } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentStudentId = props.match.params.id;

  useEffect(() => {
    const userId= currentStudentId;
    const selectedStudent = students.find(user => user.id === userId)
    setselectedStudent(selectedStudent)
  }, [currentStudentId,students])

  const onSubmit = () => {
    editStudents(selectedStudent)

    navigate.push('/');
  }


  const onChange = (e) => {
    setselectedStudent({...selectedStudent, [e.target.name]: e.target.value})
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' name='name' value={selectedStudent.name} onChange={onChange} placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}

