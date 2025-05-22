
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                RecallAI
              </span>
            </Link>
            
            <nav className="ml-10 hidden space-x-8 md:flex">
              <Link to="/features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link to="/#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">
              Log in
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
