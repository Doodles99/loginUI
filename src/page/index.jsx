import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='status-bar'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='sks-container' />
      <div className='copy' />
      <span className='login'>LOGIN</span>
      <div className='divider' />
      <div className='divider-1'>
        <div className='divider-2' />
      </div>
      <button className='button'>
        <div className='label'>
          <div className='google' />
          <span className='google-3'>Google</span>
        </div>
      </button>
      <button className='button-4'>
        <div className='naver-logo'>
          <div className='label-5' />
          <div className='group'>
            <div className='vector' />
          </div>
          <span className='naver'>Naver</span>
          <div className='vector-6' />
        </div>
      </button>
      <button className='button-7'>
        <div className='kakao-talk-photo' />
        <div className='flex-column-c'>
          <div className='label-8'>
            <div className='google-9' />
          </div>
          <span className='kakao'>Kakao</span>
        </div>
      </button>
      <div className='home-indicator' />
      <div className='input-and-button'>
        <div className='field'>
          <input className='field-input' />
          <span className='email-label'>email@kyonggi.ac.kr</span>
        </div>
      </div>
      <div className='rectangle' />
      <span className='login-label'>로그인</span>
      <div className='input-button'>
        <div className='field-a'>
          <input className='field-input-b' />
          <span className='password-label'>password</span>
        </div>
      </div>
    </div>
  );
}
