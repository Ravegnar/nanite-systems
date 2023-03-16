import Image from 'next/image'

const Header = () => {

  return (
    <header className="w-full text-center">
      <div className="relative w-full h-screen bg-headerBg bg-cover bg-top top">
        <div className='font-bold font-orbitron text-5xl h-full pt-[55vh]'>
          Nanite Systems
          <br/>
          Corporation
        </div>
      </div>
    </header>
  )
}

export default Header