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
    const [formData, dispatchForm] = useReducer(formReducer, { username: 'admin' });
    const [isLoading, setIsLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [lettersUsed, setLettersUsed] = useState([]);
    const [result, setResult] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult([]);
        setIsLoading(true);

        const { data } = await axios.post('/api/passwordle-login', formData);
        const { success, lettersUsed: currentLettersUsed, result: currentResult } = data;

        setIsLoading(false);
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
                <input className= 'input' name='username' input='username' onChange={({ target: { value, name }}) => dispatchForm({ name, value })} placeholder='admin' disabled={successful} required></input>
              </div>
            </div>
            <div className='field'>
              <label className='label' htmlFor='password'>Password</label>
              <div className='control'>
                <input className= 'input' name='password' type='password' input='password' onChange={({ target: { value, name }}) => dispatchForm({ name, value })} disabled={successful} required></input>
              </div>
            </div>
            <div className='field passwordle-result'>
              {result.map((char, index) => (
                <span className={`fade-in-bottom--delay-${index + 1}`} key={index}>{char}</span>
              ))}
            </div>
            <div className='field'>
              <div className='control'>
                <button className={`button is-primary ${isLoading && 'is-loading'}`} type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className='column is-half'>
          <p className='block'>
            Are you annoyed with your users constantly forgetting their password and requiring you to reset it?
            Does 0Auth and 2FA cause your mind to boggle? Did your Security Engineer leave because they said they &quot;weren&apos;t getting paid enough&quot;?
            Worry no more! Passwordle is a simple way of letting your users guess their password without having to contact you about it.
          </p>
          <p className='block'>
            The form follows the same rules as wordle - When the form is submitted, the password field is checked against the users password and if it is wrong,
            it returns information about which letters are out of place. If a letter in the submitted password is not in the users password, it will appear below
            the input field as 🟥. If a letter is in the correct place of the password, it will be 🟩. If the letter does appear in the users password, but it is
            not in the right place, it will be 🟨.
          </p>
        </div>
      </div>
    );
};

export default Passwordle;
