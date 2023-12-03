import React from 'react'

const Navbar = () => {
  return (
<header className='min-w-[1000px]'>
    <div className='flex bg-amazonclone h-[60px] text-white'>
           {/* left  */}
        <div className='flex'>
            <img className='h-[35px] w-[100px] m-2' src='../images/amazon.png' alt=''/>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
            </div>
            </div>   
          {/* middle  */}
        <div className='flex'>middle</div>   
          {/* right  */}
        <div className='flex'>right</div>   
    </div>
</header>
    )
}

export default Navbar