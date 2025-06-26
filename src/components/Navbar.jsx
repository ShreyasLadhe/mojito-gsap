import { navLinks } from "../../constants" 

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#home"className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo.png" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar