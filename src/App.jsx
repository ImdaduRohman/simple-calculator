import { RiCopyrightLine, RiDeleteBack2Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import sound from './assets/press-sound.wav'
import './App.css'

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [toggleSound, setToggleSound] = useState(true);
  let [result, setResult] = useState("0");

  const handleClick = (e) => {
    if(toggleSound) {
      new Audio(sound).play();
    }
    if(result.length >=16){
      setResult("So Much Big Input!");
      return;
    }
    if(result.length === 1 && result.charAt(0) === '0') {
      if(e.target.name === '.') {
        setResult(result.concat(e.target.name));
      } else if(e.target.name === '0') {
        setResult('0')
      } else{
        result = result.slice(1, result.length)
        setResult(result.concat(e.target.name));
      }
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const clear = () => {
    if(toggleSound) {
      new Audio(sound).play();
    }
    setResult("0");
  };
  const backSpace = () => {
    if(toggleSound) {
      new Audio(sound).play();
    }
    if(result.length === 1) {
      setResult("0")
    } else {
      setResult(result.slice(0, result.length - 1))
    }
  };

  const calculate = () => {
    if(toggleSound) {
      new Audio(sound).play();
    }
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
    if(toggleSound) {
      new Audio(sound).play();
    }
    if(toggleDarkMode === false) {
      localStorage.setItem('dark', true)
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('dark', false)
      document.documentElement.classList.remove('dark')
    }
    setToggleDarkMode(!toggleDarkMode);
  };

  const handleToggleSound = () => {
    if(toggleSound) {
      new Audio(sound).play();
    }
    setToggleSound(!toggleSound);
  };

  useEffect(() => {
    switch (JSON.parse(window.localStorage.getItem('dark'))) {
      case true:
        document.documentElement.classList.add('dark')
        setToggleDarkMode(true)
        localStorage.setItem('dark', true)
        break;
      case false:
        document.documentElement.classList.remove('dark')
        setToggleDarkMode(false)
        localStorage.setItem('dark', false)
        break;
      default:
        document.documentElement.classList.remove('dark')
        setToggleDarkMode(true)
        localStorage.setItem('dark', false)
        break;
    }
  }, [])

  return (
    <div className='bg-[#F3F2F2] dark:bg-[#283345] relative min-h-screen'>
      <div className='flex items-center gap-5 p-4 absolute top-0 z-20'>
        <button onClick={handleToggleDarkMode} className="active:scale-95">
          {!toggleDarkMode ? <img src="/dark-logo.svg" alt="dark-logo"/> : <img src="/light-logo.svg" alt="dark-logo"/>}
        </button>
        <button onClick={handleToggleSound} className="active:scale-95">
          {!toggleSound ? (
            <img src="/sound-silent.svg" alt="sound-active"/>
          ) : (
            <img src="/sound-active.svg" alt="sound-active"/>
          )}
        </button>
      </div>
      <div className='p-4 pb-5 md:pb-2 absolute bottom-0 md:top-0 w-full z-10'>
        <div className='mb-10 md:mb-3 mr-2 border-b-[0.5px] border-gray-300 dark:border-gray-600 pb-3'>
          <div className={`dark:text-[#edecea] leading-[71px] text-end font-semibold ${result.length < 9 ? 'text-[60px]' : result.length >= 9 && result.length < 13 ? 'text-[40px]' : 'text-[30px]' }`}>{result}</div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
          <button onClick={clear} className={`text-[#7E83FF] col-span-2 ${!toggleDarkMode ? 'button-light' : 'button-dark'} active:scale-95 active:opacity-95`}>CLEAR</button>
          <button onClick={backSpace} className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} active:scale-90 active:opacity-95`}>
            <RiDeleteBack2Line className='text-[#7E83FF] m-auto'/>
          </button>
          <button onClick={handleClick} name='/' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E] active:scale-90 active:opacity-95`}>/</button>
          <button onClick={handleClick} name='7' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>7</button>
          <button onClick={handleClick} name='8' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>8</button>
          <button onClick={handleClick} name='9' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>9</button>
          <button onClick={handleClick} name='*' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E] active:scale-90 active:opacity-95`}>x</button>
          <button onClick={handleClick} name='4' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>4</button>
          <button onClick={handleClick} name='5' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>5</button>
          <button onClick={handleClick} name='6' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>6</button>
          <button onClick={handleClick} name='-' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E] active:scale-90 active:opacity-95`}>-</button>
          <button onClick={handleClick} name='1' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>1</button>
          <button onClick={handleClick} name='2' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>2</button>
          <button onClick={handleClick} name='3' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-90 active:opacity-95`}>3</button>
          <button onClick={handleClick} name='+' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E] active:scale-90 active:opacity-95`}>+</button>
          <button onClick={handleClick} name='0' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white col-span-2 active:scale-90 active:opacity-95`}>0</button>
          <button onClick={handleClick} name='.' className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} dark:text-white active:scale-95 active:opacity-95`}>.</button>
          <button onClick={calculate} className={`${!toggleDarkMode ? 'button-light' : 'button-dark'} text-[#9ABD0E] active:scale-90 active:opacity-95`}>=</button>
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
