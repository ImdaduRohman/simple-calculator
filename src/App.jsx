import { RiCopyrightLine, RiDeleteBack2Line } from "react-icons/ri";
import { useState } from 'react';
import './App.css'

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  let [result, setResult] = useState("0");

  const handleClick = (e) => {
    if(result.length >=16){
      setResult("So Much Big Input!");
      return;
    }
    if (result.charAt(0) === '0') {
      result = result.slice(1, result.length)
    }
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("0");
  };
  const backSpace = () => {
    if(result.length === 1) {
      setResult("0")
    } else {
      setResult(result.slice(0, result.length - 1))
    }
  };

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
  };

  const handleToggleDarkMode = () => {
    if(toggleDarkMode === false) {
      // localStorage.setItem('dark', true)
      document.documentElement.classList.add('dark')
    } else {
      // localStorage.setItem('dark', false)
      document.documentElement.classList.remove('dark')
    }
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <div className='bg-[#F3F2F2] dark:bg-[#283345] relative min-h-screen'>
      <div className='flex items-center gap-4 p-4 absolute top-0 z-20'>
        <div onClick={handleToggleDarkMode}>
          {!toggleDarkMode ? <img src="/dark-logo.svg" alt="dark-logo"/> : <img src="/light-logo.svg" alt="dark-logo"/>}
        </div>
      </div>
      <div className='p-4 pb-5 md:pb-2 absolute bottom-0 w-full z-10'>
        <div className='mb-10 mr-2 border-b-[0.5px] border-gray-300 dark:border-gray-600 pb-3'>
          <div className={`dark:text-[#edecea] leading-[71px] text-end font-semibold ${result.length < 9 ? 'text-[60px]' : result.length >= 9 && result.length < 13 ? 'text-[40px]' : 'text-[30px]' }`}>{result}</div>
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
        <div className='text-gray-400 text-xs mt-5 flex-col items-center justify-center p-1 md:p-1 rounded-full'>
          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/imdadu-rohman-462739242/" 
              target="_blank" 
              rel="noreferrer" 
              className="mx-[2px]"
            >
              developed by <span className="text-[#7E83FF]">Imdadu R</span>,
            </a>
            <a 
              href="https://www.linkedin.com/in/mustofawisnudhamara/" 
              target="_blank" 
              rel="noreferrer" 
              className="ml-[2px]"
            >
              designed by <span className="text-[#7E83FF]">Mustofa W. D</span>
            </a>
          </div>
          <div className='flex justify-center items-center'>
            Copyright
            <RiCopyrightLine className="mr-[2px]"/>
            2024
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
