import React from 'react'

const Login = ({ setShowLogin }) => {
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
          <div className='flex items-center justify-between'>
            <button 
              className='bg-brand-color hover:bg-brand-color-dark text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
              type='button'
            >
              Giriş Yap
            </button>
            <button 
              className='bg-brand-color hover:bg-brand-color-dark text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
              type='button'
              onClick={() => setShowLogin(false)}
            >
              Kapat
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
