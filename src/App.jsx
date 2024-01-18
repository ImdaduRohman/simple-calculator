import { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import './App.css'

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState();

  const handleToggleDarkMode = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  return (
    <div>
      <div className='bg-[#fff0d2] p-4'>
        <div>
          <input 
            type='checkbox' 
            id='toggle-dark-mode' 
            className='hidden'
            checked={toggleDarkMode || ''}
            value={toggleDarkMode || ''}
            onChange={handleToggleDarkMode}
          />
          <label htmlFor='toggle-dark-mode'>
            <div className={`w-[48px] rounded-full p-[1px] cursor-pointer bg-white`}>
              <div className='w-5 h-5 rounded-full bg-[#f1af60] toggle-circle flex justify-center items-center'>
                {!toggleDarkMode ? <CiLight className='text-white font-medium' /> : <CiDark className='text-white font-medium' />}
              </div>
            </div>
          </label>
        </div>
        <div>
          <div>Input</div>
          <div>Result</div>
        </div>
      </div>
    </div>
  )
}

export default App
