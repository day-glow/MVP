import React, { useState } from 'react';

function NewUser({ addNewUser }) {

  const [firstName, setFirst] = useState('tester');
  const [lastName, setLast] = useState('testerLast');
  const [userName, setUserName] = useState('testerEmail');

  const handleSubmit = () => {
    addNewUser({
      'firstName': firstName,
      'lastName': lastName,
      'userName': userName
    });
  }
  //console.log(firstName, lastName, userName);

  return (
    <div>

      <div className="container-new-user">New User Form</div>
      <br />
      <div className="new-user-box">
        <div className="new-user-form">
          <form>
            <label>
              First Name:
              <input type="text" name='first name' onChange={(e) => setFirst(e.target.value)}/>
              Last Name:
              <input type="text" name='last name' onChange={(e) => setLast(e.target.value)}/>
              Username:
              <input type="text" name='username' onChange={(e) => setUserName(e.target.value)}/>
            </label>
          </form>
        </div>
      </div>
      <div>
        <button type='submit' className='new-user submit' id='new-user-btn' onClick={() => handleSubmit()}>submit</button>
      </div>

    </div>
  )
}

export default NewUser;