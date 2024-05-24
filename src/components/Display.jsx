import React from 'react';

const Display = ({ data }) => { // Change 'error' to 'errors'
  // Destructure formData to access individual fields
  const { firstname, lastname, username, email, password, phoneCountryCode, phone, country, city, pancard, aadhar } = data || {};

  return (
    <div className='flex flex-col justify-center items-center gap-y-5 h-screen bg-orange-200 '>
      <h1 className='text-[40px] text-green-900 font-extrabold '>Your Data </h1>
      <div className=' overflow-x-auto shadow-xl blur-shadow-xl shadow-green-600  px-4 py-5 m-3 rounded-md  w-6/12 flex flex-col gap-y-2 bg-green-500 cursor-pointer '>
        <p className='font-bold text-2xl text-slate-700'>First Name: <span className='text-xl text-white'>{firstname}</span></p>
        <p className='font-bold text-2xl  text-slate-700'>Last Name:  <span className='text-xl  text-white'>{lastname} </span></p>
        <p className='font-bold  text-2xl text-slate-700'>Username:  <span className='text-xl t text-white'>{username} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>Email:  <span className='text-xl  text-white' >{email} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>Password: <span  className='text-xl  text-white'> {password} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>Phone:  <span className='text-xl  text-white'>{phoneCountryCode} {phone} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>Country: <span className='text-xl  text-white'> {country} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>City:  <span className='text-xl  text-white'>{city} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>PAN Number:  <span className='text-xl  text-white'>{pancard} </span></p>
        <p className='font-bold text-2xl  text-slate-700'>Aadhar Number:  <span className='text-xl  text-white'>{aadhar} </span></p>
      </div>
      
    </div>
  );
};

export default Display;
