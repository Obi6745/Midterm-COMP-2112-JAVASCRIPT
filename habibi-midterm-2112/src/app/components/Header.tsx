import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              COMP2112 Mid-Term 
            </Link>
          </li>
          <li>
            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link 
              href="/student" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Students Info
            </Link>
          </li>
          <li>
            <Link 
              href="/auth/login" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
