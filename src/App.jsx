import { CiDark, CiLight } from "react-icons/ci";
import { useState } from 'react';
import { RiDeleteBack2Line } from "react-icons/ri";
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

  // bg-[#ffffdd] 
  return (
    <div className='bg-[#F3F2F2] dark:bg-[#283345] relative min-h-screen'>
      <div className='flex items-center gap-4 p-4 absolute top-0 z-20'>
        {/* <div onClick={handleToggleDarkMode}className={`w-8 h-8 rounded-full toggle-circle flex justify-center items-center ${!toggleDarkMode ? 'bg-black' : 'bg-white'}`}>
          {!toggleDarkMode ? <CiLight className='text-white font-medium' size={22}/> : <CiDark className='text-black font-medium' size={25} />}
        </div> */}
        <input 
          type='checkbox' 
          id='toggle-dark-mode' 
          className='hidden'
          checked={toggleDarkMode || ''}
          value={toggleDarkMode || ''}
          onChange={handleToggleDarkMode}
        />
        <label htmlFor='toggle-dark-mode'>
          <div className={`w-[78px] h-9 rounded-full cursor-pointer flex items-center ${!toggleDarkMode ? 'label-light' : 'label-dark'}`}>
            <div className={`w-7 h-7 rounded-full toggle-circle flex justify-center items-center ml-[5px] ${!toggleDarkMode ? 'bg-white' : 'bg-black'}`}>
              {!toggleDarkMode ? <CiLight className='text-black font-medium' size={22}/> : <CiDark className='text-white font-medium' size={25}/>}
            </div>
          </div>
        </label>
        <div className='text-[#8c9298]'>Switch to {toggleDarkMode ? 'Light' : 'Dark'}</div>
      </div>
      <div className='p-4 pb-10 absolute bottom-0 w-full z-10'>
        <div className='mb-10 mr-2 border-b-[0.5px] border-gray-300 dark:border-[#fdfdfd] pb-3'>
          <div className='dark:text-[#edecea] text-[60px] leading-[71px] text-end font-semibold'>{result}</div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
          <button onClick={clear} className={`text-[#7E83FF] col-span-2 ${!toggleDarkMode ? 'button-light' : 'button-dark'}`}>CLEAR</button>
          <button onClick={backSpace} className={`${!toggleDarkMode ? 'button-light' : 'button-dark'}`}>
            <RiDeleteBack2Line className='text-[#7E83FF] m-auto'/>
          </button>
          <button onClick={handleClick} name='/' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E]`}>/</button>
          <button onClick={handleClick} name='7' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>7</button>
          <button onClick={handleClick} name='8' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>8</button>
          <button onClick={handleClick} name='9' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>9</button>
          <button onClick={handleClick} name='*' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E]`}>x</button>
          <button onClick={handleClick} name='4' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>4</button>
          <button onClick={handleClick} name='5' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>5</button>
          <button onClick={handleClick} name='6' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>6</button>
          <button onClick={handleClick} name='-' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E]`}>-</button>
          <button onClick={handleClick} name='1' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>1</button>
          <button onClick={handleClick} name='2' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>2</button>
          <button onClick={handleClick} name='3' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>3</button>
          <button onClick={handleClick} name='+' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E]`}>+</button>
          <button onClick={handleClick} name='0' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white col-span-2`}>0</button>
          <button onClick={handleClick} name='.' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white`}>.</button>
          <button onClick={calculate} className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E]`}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
