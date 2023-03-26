import Image from 'next/image'

const Header = () => {

  return (
    <header className="w-full text-center">
      <div className="relative w-full h-screen bg-headerBg dark:bg-headerBgDark bg-cover bg-top   transform duration-300 ease-in-out">
        <div id='XXX-NS' className='font-bold font-orbitron text-5xl h-full pt-[55vh]'>
          Nanite Systems
          <br/>
          <span id='XXX-NS' className='text-cyan-500 dark:text-orange-600'>
            Corporation
          </span>
        </div>
        <div className="absolute max-w-7xl flex -bottom-64 left-1/2 -translate-x-1/2 h-96 w-full bg-cyan-700 dark:bg-slate-900 mx-auto"></div>
      </div>
    </header>
  )
}

export default Header