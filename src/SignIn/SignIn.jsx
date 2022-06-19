import React, { useState } from 'react';
import styles from './SignIn.module.css';

const SignIn = (props) => {

    return (
      <div className={styles.sign}>
        <div className={styles.head}>
          <h2 className={styles.heading}>Sign In</h2>
        </div>
        <div className={styles.bott}>
          <form>
            <h3 className={styles.t2}>Sign In using your mobile number</h3>
            <div>
              <br />
              <label className={styles.lab}>Mobile Number</label>
              <br />
              <input
                type='text'
                name='phone'
                className={styles.inp}
                placeholder='Enter your number'
              />
            </div>
            <div>
              <br />
              <input type='submit' name='Submit' className={styles.sub} />
            </div>
          </form>
        </div>
      </div>
    );
  
}

export default SignIn;
