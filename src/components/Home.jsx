import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Display from './Display';
import { useNavigate } from 'react-router-dom';

const Home = ({setData}) => {
  const countryToCities = {
    India: ["New Delhi", "Mumbai", "Bangalore", "Chennai"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
    Nepal: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"],
    Japan: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"]
  };
  const navigate=useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phoneCountryCode: "+91",
    phone: "",
    pancard: "",
    aadhar: ""
  });
  const [errors, setErrors] = useState({});

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCities(countryToCities[country] || []);
    setFormData((prev) => ({ ...prev, country, city: "" })); // Reset city
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (formData.pancard.length !== 10) newErrors.pancard = 'PAN number must be exactly 10 characters';
    if (formData.aadhar.length !== 12) newErrors.aadhar = 'Aadhar number must be exactly 12 characters';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted', formData);
      setData(formData)
      navigate('/display')
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center'>
      <form className=' m-4 flex flex-col p-5 gap-y-2 border border-orange-700 w-5/12 shadow-md shadow-orange-600 bg-orange-200' onSubmit={submitHandler}>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor='firstname'>First Name <span>*</span></label>
          <input type="text" name="firstname" value={formData.firstname} onChange={changeHandler} placeholder='Enter Your FirstName' id="firstname" />
          {errors.firstname && <span className='text-red-500'>{errors.firstname}</span>}
        </div>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor='lastname'>Last Name <span>*</span></label>
          <input type="text" placeholder='Enter Your LastName' name="lastname" value={formData.lastname} onChange={changeHandler} id="lastname" />
          {errors.lastname && <span className='text-red-500'>{errors.lastname}</span>}
        </div>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor='username'>User Name <span>*</span></label>
          <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder='Enter Your User Name' id="username" />
          {errors.username && <span className='text-red-500'>{errors.username}</span>}
        </div>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter Your Email' id="email" />
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>
        <div className='flex flex-row items-center gap-2 w-8/12'>
          <label htmlFor='password'>Password <span>*</span></label>
          <input type={passwordVisible ? 'text' : 'password'} name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Your Password' id="password" />
          <button type="button" onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.password && <span className='text-red-500'>{errors.password}</span>}
        </div>
        <div className='flex flex-row  w-8/12'>
          <label htmlFor='phone'>Phone no.</label>
          <select name='phoneCountryCode' value={formData.phoneCountryCode} onChange={changeHandler}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+977">+977</option>
            <option value="+81">+81</option>
            <option value="+86">+86</option>
          </select>
          <input type="text" id='phone' name='phone' value={formData.phone} onChange={changeHandler} placeholder='Enter Your Phone no.' />
          {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
        </div>
       
          <div className='flex flex-row gap-x-3'>
            <label htmlFor='country'>Country</label>
            <select id='country' name='country' value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Choose Country</option>
              {Object.keys(countryToCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <label htmlFor='city'>City</label>
            <select id='city' name='city' value={formData.city} onChange={changeHandler}>
              <option value="">Choose City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.country && <span className='text-red-500'>{errors.country}</span>}
            {errors.city && <span className='text-red-500'>{errors.city}</span>}
     
        </div>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor="pancard">Pan No.</label>
          <input type='text' name='pancard' value={formData.pancard} onChange={changeHandler} placeholder='Enter Your Pan No.' />
          {errors.pancard && <span className='text-red-500'>{errors.pancard}</span>}
        </div>
        <div className='flex flex-col gap-2 w-8/12'>
          <label htmlFor="aadhar">Aadhar No.</label>
          <input type='text' name='aadhar' value={formData.aadhar} onChange={changeHandler} placeholder='Enter Your Aadhar No.' />
          {errors.aadhar && <span className='text-red-500'>{errors.aadhar}</span>}
        </div>
        <button type='submit' className='text-white p-2 m-4 text-xl font-semibold bg-orange-500 hover:bg-orange-600 cursor-pointer duration-300 w-6/12 mx-auto rounded-md'>Submit</button>
      </form>
      {/* <Display formData={formData} errors={errors} /> */}
    </div>
  );
};

export default Home;
