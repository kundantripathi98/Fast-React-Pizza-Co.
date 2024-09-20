import { useState } from 'react';
import Button from '../../ui/Button';
import {create} from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    navigate("/menu");
    dispatch(create(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        className='input w-72 mb-8'
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary" >Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
