import React, { useState } from 'react';

function NewUser() {

  return (
    <div>

      <div className="container-new-user">New User Form</div>
      <br />
      <div className="new-user-box">
        <div className="new-user-form">
          <form>
            <input>
              First Name:
            </input>
            <input>
              Last Name:
            </input>
            <input>
              Username:
            </input>
          </form>
        </div>
      </div>
      <div>
        <button type='submit' className='new-user submit' id='new-user-btn' onClick={() => console.log('NEW USER SUBMITTED')}>submit</button>
      </div>

    </div>
  )
}

export default NewUser;