import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-[200px] py-[10px] h-16">
        <img className="w-6 h-6" src="./logo.svg" alt="logo" />

        <ul className="flex items-center gap-[30px]">
          {navLinks.map((item) => (
            <li key={item.name}>
              
               <a className="text-xs text-white/80 tracking-[0.231px]"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center gap-2.5">
          <button className="appearance-none bg-transparent border-none p-0 flex items-center justify-center">
            <img className="w-6 h-6" src="./search.svg" alt="search" />
          </button>
          <button className="appearance-none bg-transparent border-none p-0 flex items-center justify-center">
            <img className="w-6 h-6" src="./cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
