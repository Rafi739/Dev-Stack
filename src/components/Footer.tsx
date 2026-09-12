import logo from "../assets/logo-text.png";


const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <img src={logo} alt="Dev Stack" />
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

        
            <div className="mt-5 flex gap-5 text-sm font-medium text-slate-500">
              <a href="#" className="transition hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="transition hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="transition hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

      
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              LEGAL
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

    
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 pt-7 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;