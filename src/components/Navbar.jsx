import React from 'react'
import { useState , useEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline' 
import Search from './Search'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownFill  } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";


const Navbar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<header className='min-w-[1000px]'>
    <div className={`flex bg-amazonclone h-[60px] text-white ${
        isSticky ? 'fixed top-0 w-full z-50' : ''
      }`}>
           {/* left  */}
        <div className='flex items-center m-4'>
        <Link to={'/'}>
          <div className='flex items-center pt-1 pl-1'>
          <img className='h-[32px] w-[100px] ' src='../images/amazon.png' alt=''/> <span className='pb-2 pr-3 text-sm' >.in</span></div>
          </Link>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-xs text-gray-300 pl-4 '>Deliver to</div>
                <div className='text-sm xl:text-md font-bold flex'> <HiOutlineLocationMarker className='h-5 w-5'/> United Kingdom</div>
            </div>
            </div>   
          {/* middle  */}
        <div className='flex grow relative items-center '>
          <Search />
          </div>   
          {/* right  */}
        <div className='flex items-center m-4'>
        <div className='pr-4 pl-4'>
                <div className='text-sm xl:text-base font-bold flex'> <img src={'../images/indianFlag.jpg'} alt='Indian Flag' className='h-6 w-auto' />
    <span>EN</span><RiArrowDropDownFill className='h-6 w-6 fill-gray-300 pr-1' />
    </div>
            </div>
        <div className='pr-4 pl-4 '>
                <div className='text-xs xl:text-sm'>Hello , Sign in to</div>
                <div className='text-sm xl:text-base font-bold flex'>Accounts & Lists <RiArrowDropDownFill className='h-6 w-6 fill-gray-300 pr-1' /></div>
            </div>
        <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Returns</div>
                <div className='text-sm xl:text-base font-bold'>& Orders</div>
            </div>
            <Link to='/checkout'>
            <div className=' flex pr-3 pl-3'>
                <img src={"../images/cart1.png"} className='h-[46px]' alt="" />
                <div className='relative'>
                  <div className='absolute right-[9px] font-bold m-2 text-orange-400'>
                    {cart}
                  </div>
                </div>
                <div className='mt-7 text-xs xl:text-sm font-bold'>Cart</div>
                </div>  
                </Link>
                </div>          
    </div>
    <div className='flex bg-amazonclone-light_blue text-white text-xs xl:text-base p-2 pl-6 justify-between relative'>
  {/* Left side */}
  
  <div className='flex space-x-3'>
  <div className='flex items-center font-semibold pb-1'>
    <GiHamburgerMenu className='inline-block h-6 w-5 mr-1' /> All
  </div>
    <div className='hover:cursor-pointer'>Mobiles</div>
    <div className='hover:cursor-pointer'>Amazon miniTV</div>
    <div className='hover:cursor-pointer'>Sell</div>
    <div className='hover:cursor-pointer'>Buy Again</div>
    <div className='hover:cursor-pointer'>New Releases</div>
    <div className='hover:cursor-pointer'>Gift Ideas</div>
    <div className='hover:cursor-pointer'>Coupons</div>
    <div className='hover:cursor-pointer'>Today's Deals</div>
    <div className='hover:cursor-pointer'>Best Sellers</div>
    <div className='hover:cursor-pointer'>Gift Cards</div>
    <div className='hover:cursor-pointer flex'>
      Browsing History <RiArrowDropDownFill className='h-6 w-6 fill-gray-300 pr-1' />
    </div>
    <div className='hover:cursor-pointer'>AmazonBasics</div>
  </div>

  {/* Right side */}
  <div className='flex'>
    <Link to='https://tinyurl.com/2azrcsm6'>
      <img src='../images/minitv_banner.jpg' className='h-[1.7rem] w-[20rem] pl-18' alt='' />
    </Link>
  </div>
</div>
</header>
    )
}

export default Navbar