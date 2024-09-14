
import { 
  MegaMenu, 
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react';

function Header() {
  return (
    <MegaMenu className='m-auto sm:w-12/12 xl:w-10/12 2xl:w-4/5'>
      <NavbarBrand href="/">
        <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LOGO</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/">
            Company
        </NavbarLink>
        <NavbarLink href="/">Marketplace</NavbarLink>
        <NavbarLink href="/">Resources</NavbarLink>
        <NavbarLink href="/cart">Cart</NavbarLink>
      </NavbarCollapse>
  
    </MegaMenu>
  );
}


export default Header;