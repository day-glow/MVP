import React, { useState } from 'react';

function NewUser({ addNewUser, currentUser }) {

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

  if (currentUser) {
    return (
    <div className='btn waves-effect waves-light logged-in-user'>{`Welcome, ${currentUser}!`}</div>
    )
  }

  return (
    <div>
      <div className="container-new-user">
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
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => handleSubmit()}>Submit
            <i className="material-icons right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewUser;