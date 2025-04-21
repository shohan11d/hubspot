import { GiHamburgerMenu } from 'react-icons/gi';
function Header() {
  return (
    <div className='flex justify-between'>
      <img src="https://placeholder.pics/svg/100x30" alt="" />
      <GiHamburgerMenu className='text-3xl ' />
    </div>
  );
}

export default Header;
