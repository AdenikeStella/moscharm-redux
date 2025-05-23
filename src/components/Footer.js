import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';


export const Footer = () => {
  return (
    

<footer className="bg-white border-t-2 justify-start border-gray-400 rounded-lg shadow-sm dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Mo's Charm Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mo's Charm</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <a href="https://github.com/AdenikeStella" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="mailto:turtonadenike@gmail.com" className="hover:underline me-4 md:me-6">Gmail</a>
                </li>
                <li>
                    <Link to="/" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Mo™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    )
}
