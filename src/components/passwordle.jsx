import React, { useReducer, useState } from 'react';
import axios from 'axios';
import classnames from 'classnames';

const formReducer = (state, payload) => {
    const { value, name } = payload;
    return {
        ...state,
        [name]: value
    };
};

const Field = ({ label, htmlFor, name, type, input, onChange, isSuccessful, required, placeholder }) => {
  return (
    <div className='field'>
      <label className='label' htmlFor={htmlFor}>{label}</label>
      <Input name={name} input={input} type={type} onChange={onChange} placeholder={placeholder} isSuccessful={isSuccessful} required={required}/>
    </div>
  );
};

const Input = ({ name, type, input, onChange, isSuccessful, required, placeholder }) => {
  const classes = classnames(
    'input', { 'is-success': isSuccessful, 'is-danger': isSuccessful === false }
  );

  return (
    <div className='control'>
      <input className={classes} name={name} type={type} input={input} onChange={onChange} placeholder={placeholder} disabled={isSuccessful} required={required}></input>
    </div>
  );
};

const Passwordle = () => {
    const [formData, dispatchForm] = useReducer(formReducer, { username: 'admin' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successful, setSuccessful] = useState(undefined);
    const [lettersUsed, setLettersUsed] = useState([]);
    const [result, setResult] = useState([]);

    const formUpdate = ({ target: { value, name }}) => dispatchForm({ name, value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult([]);
        setLoading(true);

        try {
          const { data } = await axios.post('/api/passwordle-login', formData);
          const { success, lettersUsed: currentLettersUsed, result: currentResult } = data;

          setLoading(false);
          setSuccessful(success);
          setError(false);
          setLettersUsed(currentLettersUsed);
          setResult(currentResult);
        } catch (e) {
          console.log('Error logging in');

          setLoading(false);
          setSuccessful(false);
          setError(true);
          setLettersUsed([]);
          setResult([]);
        }
    };

    return (
      <div className='columns'>
        <div className='column is-half'>
          <div className='box'>
            <form method='post' onSubmit={handleSubmit}>
              <Field label='Username' htmlFor='username' name='username' input='username' onChange={formUpdate} placeholder='spencer' isSuccessful={successful} isError={error} required/>
              <Field label='Password' htmlFor='password' name='password' input='password' type='password' onChange={formUpdate} placeholder='password' isSuccessful={successful} isError={error} required/>
              <div className='field passwordle-result'>
                {result.map((char, index) => (
                  <span className={`fade-in--delay-${index + 1}`} key={index}>{char}</span>
              ))}
              </div>
              <div className='field is-grouped'>
                <div className='control is-flex'>
                  <button className={`button mr-2 is-primary ${loading && 'is-loading'}`} type='submit' disabled={successful}>Submit</button>
                  {successful && <span className='fade-in-right block is-size-4 is-primary'>Success!</span>}
                </div>
              </div>
            </form>
          </div>
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
