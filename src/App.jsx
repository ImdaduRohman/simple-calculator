import { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import './App.css'

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState();

  const handleToggleDarkMode = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  return (
    <div className='min-h-screen bg-[#ffffdd]'>
      <div className='bg-[#fff0d2] p-4 border-b-[4px] border-[#483e2e]'>
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
        <div className='mt-10 mr-2'>
          <div className='text-[#938c82] text-2xl text-end font-semibold'>45 X 24</div>
          <div className='text-[#483e2e] text-6xl text-end font-bold'>1080</div>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-end'>
          <button>
            <FiDelete className='h-10 w-10 text-[#f1af60]'/>
          </button>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
          <div className='bg-[#ffe3aa] col-span-3 p-5 rounded-md text-xl font-bold'>CLEAR</div>
          <div className='bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>/</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>7</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>8</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>9</div>
          <div className='bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>X</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>4</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>5</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>6</div>
          <div className='bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>-</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>1</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>2</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>3</div>
          <div className='bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>+</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold col-span-2'>0</div>
          <div className='bg-[#f5ce9f] p-5 rounded-md text-xl font-extrabold text-center'>.</div>
          <div className='bg-gradient-to-t from-[#f0920a] to-[#fede6f]  p-5 rounded-md text-xl font-extrabold text-center'>=</div>
        </div>
      </div>
    </div>
  )
}

export default App
