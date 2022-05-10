import React, { useReducer, useState } from 'react';
import axios from 'axios';

const formReducer = (state, payload) => {
    const { value, name } = payload;
    return {
        ...state,
        [name]: value
    };
};

const Passwordle = () => {
    const [formData, dispatchForm] = useReducer(formReducer, {});
    const [successful, setSuccessful] = useState(false);
    const [lettersUsed, setLettersUsed] = useState([]);
    const [result, setResult] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult([]);

        const { data } = await axios.post('/api/passwordle-login', formData);
        const { success, lettersUsed: currentLettersUsed, result: currentResult } = data;

        setSuccessful(success);
        setLettersUsed(currentLettersUsed);
        setResult(currentResult);
    };

    return (
      <div className='columns'>
        <div className='column is-half'>
          <form method='post' onSubmit={handleSubmit}>
            <div className='field'>
              <label className='label' htmlFor='username'>Username</label>
              <div className='control'>
                <input className= 'input' name='username' input='username' onChange={({ target: { value, name }}) => dispatchForm({ name, value })} required></input>
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor='password'>Password</label>
              <div className='control'>
                <input className= 'input' name='password' type='password' input='password' onChange={({ target: { value, name }}) => dispatchForm({ name, value })} required></input>
              </div>
            </div>
            <div className='field'>
              {result.map((char, index) => (
                <span className='anim fade-in-bottom' key={index}>{char}</span>
              ))}
            </div>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary anim fade-in-bottom' type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Passwordle;
