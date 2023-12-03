import React from 'react'

const Navbar = () => {
  return (
<header className='min-w-[1000px]'>
    <div className='flex bg-amazonclone h-[60px] text-white'>
           {/* left  */}
        <div className='flex items-center'>
            <img className='h-[35px] w-[100px] m-2' src='../images/amazon.png' alt=''/>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
            </div>
            </div>   
          {/* middle  */}
        <div className='flex'>middle</div>   
          {/* right  */}
        <div className='fle items-centerx'></div>
        <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Hello , Sign in to</div>
                <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
            </div>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Returns</div>
                <div className='text-sm xl:text-base font-bold'>& Orders</div>
            </div>
            <div className=' flex pr-3 pl-3'>
                
                </div>   
    </div>
</header>
    )
}

export default Navbar