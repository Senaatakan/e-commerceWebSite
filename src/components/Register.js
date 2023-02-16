// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Register = ({ setShowRegister }) => {
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [passwordConfirm, setPasswordConfirm] = useState('')
//   const [error, setError] = useState(null)

//   const history = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     if (!username || !email || !password || !passwordConfirm) {
//       setError('Please fill out all the fields')
//       return
//     }

//     if (password !== passwordConfirm) {
//       setError('Passwords do not match')
//       return
//     }

//     try {
//       // Make a request to the server to register the user
//       // ...

//       // Redirect the user to a different page (e.g. the homepage)
//       history.push('/')
//     } catch (error) {
//       setError(error.message)
//     }
//   }

//   return (
//     <div className='fixed top-0 left-0 right-0 bottom-0 bg-opacity-75 bg-black'>
//       <form
//         className='bg-white p-8 rounded-lg m-auto mt-32 max-w-xs'
//         onSubmit={handleSubmit}
//       >
//         <h1 className='text-2xl font-medium mb-4'>Register</h1>
//         {error && <p className='text-red-500'>{error}</p>}
//         <input
//           type='text'
//           placeholder='Username'
//           className='mb-4 border-2 border-gray-300 w-full py-2 px-3'
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//         <input
//           type='email'
//           placeholder='Email'
//           className='mb-4 border-2 border-gray-300 w-full py-2 px-3'
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           className='mb-4 border-2 border-gray-300 w-full py-2 px-3'
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Confirm Password'
//           className='mb-4 border-2 border-gray-300 w-full py-2 px-3'
//           value={passwordConfirm}
//           onChange={(event) => setPasswordConfirm(event.target.value)}
//         />
//         <button
//           type='submit'
//           className='bg-brand-color text-white font-medium py-2 px-4 rounded-full hover:bg-opacity-75 transition-all hover:shadow-md focus:outline-none'>
//           Kaydol
//         </button>
//       </form>
//     </div>
//   )
// }



// export default Register

// import Modal from "react-modal";
// import React, { useState, useEffect } from 'react';

// function Register(props) {
//     const { showRegister, hideRegister } = props;
//     const [name, setName] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errName, setErrName] = useState(false);
//     const [errLastname, setErrLastName] = useState(false);
//     const [errEmail, setErrEmail] = useState(false);
//     const [errPassword, setErrPassword] = useState(false);

//     const customStyles = {
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//         },
//     };
    
//     const handleRegister = () => {
//         (name) ? setErrName(false) : setErrName(true);
//         (lastname) ? setErrLastName(false) : setErrLastName(true);
//         (email) ? setErrEmail(false) : setErrEmail(true);
//         (password) ? setErrPassword(false) : setErrPassword(true);

//     //     if(name && lastname && email && password) {
//     //         fetch('http://localhost:5000/register', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify({
//     //                 first_name: name,
//     //                 last_name: lastname,
//     //                 email,
//     //                 password
//     //             })
//     //         })
//     //         .then(response => response.json())
//     //         .then((body) => {
//     //             if(body.success) {
//     //                 hideRegister();
//     //             } else {
//     //                 alert(body.errorMessage);
//     //             }
//     //         })
//     //     }
//     // }

//     return (
//         <Modal
//         isOpen={showRegister}
//         onAfterOpen={()=>{}}
//         onRequestClose={()=>{hideRegister()}}
//         contentLabel="Example Modal"
//         style={customStyles}
//       >
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
//                         İsim
//                     </label>
//                     <input 
//                         value={name}
//                         onChange={(val) => {setName(val.target.value)}}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                         id="username" 
//                         type="text" 
//                         placeholder="İsim" />
//                     {errName && <p className="text-red-500 text-xs italic">İsim boş kalmamalıdır.</p>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
//                         Soyisim
//                     </label>
//                     <input 
//                         value={lastname}
//                         onChange={(val) => {setLastname(val.target.value)}}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                         id="username" 
//                         type="text" 
//                         placeholder="Soyisim" />
//                     {errLastname && <p className="text-red-500 text-xs italic">Soyisim boş kalmamalıdır.</p>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
//                         Email
//                     </label>
//                     <input 
//                         value={email}
//                         onChange={(val) => {setEmail(val.target.value)}}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                         id="username" 
//                         type="text" 
//                         placeholder="Email" />
//                     {errEmail && <p className="text-red-500 text-xs italic">Email boş kalmamalıdır.</p>}
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
//                         Şifre
//                     </label>
//                     <input 
//                         value={password}
//                         onChange={(val) => {setPassword(val.target.value)}}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//                         id="password" 
//                         type="password" 
//                         placeholder="******************" />
//                     {errPassword && <p className="text-red-500 text-xs italic">Şifre boş kalmamalıdır.</p>}
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button 
//                     onClick={() => handleRegister()}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
//                     type="button">
//                         Kayıt ol
//                     </button>
//                 </div>
//             </form>
//       </Modal>
//     );
//   }
// }
//   export default Register;

import React, { useState } from 'react'


const Register = ({ setShowRegister }) => {
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordConfirm, setPasswordConfirm] = useState('')
        const [error, setError] = useState(null)
      
    
      
        const handleSubmit = async (event) => {
          event.preventDefault()
          if (!username || !email || !password || !passwordConfirm) {
            setError('Please fill out all the fields')
            return
          }
      
          if (password !== passwordConfirm) {
            setError('Passwords do not match')
            return
          }
        }
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10'>

      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2' for='username'>
              E-mail
            </label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
              id='username' 
              type='text' 
              placeholder='E-mail' 
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2' for='password'>
              Şifre
            </label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
              id='password' 
              type='password' 
              placeholder='Şifre' 
            />
          </div>
          <input
          type='password'
          placeholder='Şifre doğrulama'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
         
          <div className='flex items-center justify-between mt-5'>
            <button 
              className='bg-brand-color hover:bg-brand-color-dark text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
              type='button'
            >
              Giriş Yap
            </button>
            <button 
              className='bg-brand-color hover:bg-brand-color-dark text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
              type='button'
              onClick={() => setShowRegister(false)}
            >
              Kapat
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
