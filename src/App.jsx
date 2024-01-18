import { CiDark, CiLight } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import { useState } from 'react';
import './App.css'

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  let [result, setResult] = useState("0");

  const handleClick = (e) => {
    if(result.length >=16){
      setResult("!So Much Big Input");
      return;
    }
    if (result.charAt(0) === '0') {
      result = result.slice(1, result.length)
    }
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("0");
  }
  const backSpace = () => {
    if(result.length === 1) {
      setResult("0")
    } else {
      setResult(result.slice(0, result.length - 1))
    }
  }

  const calculate = () => {
    try {
      result=eval(result).toString()
      if(result.includes('.')){
        result=+ eval(result);
        result=result.toString();
        setResult(result);
      }else{
        setResult(eval(result).toString());
      }
    } catch (err) {
      setResult("Error");
    }
  }

  const handleToggleDarkMode = () => {
    if(toggleDarkMode === false) {
      // localStorage.setItem('dark', true)
      document.documentElement.classList.add('dark')
    } else {
      // localStorage.setItem('dark', false)
      document.documentElement.classList.remove('dark')
    }
    setToggleDarkMode(!toggleDarkMode);
  }

  return (
    <div className='min-h-screen bg-[#ffffdd] dark:bg-[#252628]'>
      <div className='bg-[#fff0d2] dark:bg-[#1b1c1e] p-4 border-b-[4px] border-[#483e2e] dark:border-[#fdfdfd]'>
        <div className='flex gap-2'>
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
          <div className='text-[#8c9298]'>Switch to {toggleDarkMode ? 'Light' : 'Dark'}</div>
        </div>
        <div className='mt-10 mr-2'>
          {/* <div className='text-[#938c82] dark:text-[#938c82] text-2xl text-end font-semibold'>45 X 24</div> */}
          <div className='text-[#483e2e] dark:text-[#edecea] text-4xl text-end font-bold'>{result}</div>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-end'>
          <button onClick={backSpace}>
            <FiDelete className='h-10 w-10 text-[#f1af60]'/>
          </button>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
          <button onClick={clear} className='dark:text-[#ffffff] bg-[#ffe3aa] dark:bg-[#847d6a] col-span-3 p-5 rounded-md text-xl font-bold'>CLEAR</button>
          <button onClick={handleClick} name='/' className='dark:text-[#ffffff] bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>/</button>
          <button onClick={handleClick} name='7' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>7</button>
          <button onClick={handleClick} name='8' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>8</button>
          <button onClick={handleClick} name='9' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>9</button>
          <button onClick={handleClick} name='*' className='dark:text-[#ffffff] bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>X</button>
          <button onClick={handleClick} name='4' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>4</button>
          <button onClick={handleClick} name='5' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>5</button>
          <button onClick={handleClick} name='6' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>6</button>
          <button onClick={handleClick} name='-' className='dark:text-[#ffffff] bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>-</button>
          <button onClick={handleClick} name='1' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>1</button>
          <button onClick={handleClick} name='2' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>2</button>
          <button onClick={handleClick} name='3' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>3</button>
          <button onClick={handleClick} name='+' className='dark:text-[#ffffff] bg-[#f1af60] p-5 rounded-md text-xl font-extrabold text-center'>+</button>
          <button onClick={handleClick} name='0' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold col-span-2'>0</button>
          <button onClick={handleClick} name='.' className='dark:text-[#ffffff] bg-[#f5ce9f] dark:bg-[#533d28] p-5 rounded-md text-xl font-extrabold text-center'>.</button>
          <button onClick={calculate} className='bg-gradient-to-t from-[#f0920a] to-[#fede6f]  p-5 rounded-md text-xl font-extrabold text-center'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
