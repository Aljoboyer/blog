import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaPencil } from "react-icons/fa6";
import { ImBlogger } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function Example() {
  const navigate = useNavigate()
  const blogToken = localStorage.getItem('blog-token')

  const logOutHandler = () => {
    localStorage.removeItem('blog-token')
    navigate('/')
  }
  return (
    <Disclosure as="nav" className="bg-gray-200">
      <div className="mx-auto max-w-7xl py-4 md:py-0 px-2 sm:px-6 lg:px-4">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center py-4 ">
                <p onClick={() => navigate('/')} className='italic text-white text-lg md:text-3xl font-bold landing_home_main_container p-2 rounded-full cursor-pointer hidden md:block'>Blog Hive</p>
              </div>
            {
              blogToken && <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                  <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:text-blue-600 mt-4 cursor-pointer text-base md:text-lg'><ImBlogger color='black' size={14} className='inline me-2' />Your Blog</p>
                  <p onClick={() => navigate('/BlogWrite')} className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:text-blue-600 mt-4 cursor-pointer text-base md:text-lg'> <FaPencil color='black' size={14} className='inline me-2'/>Write</p>
              </div>
            </div>
            }
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {
              !blogToken && <>  <button onClick={() => navigate('/login')} className='p-2 bg-[#0359d2] text-white font-medium text-base md:text-lg rounded-md'>Login</button>
            <button onClick={() => navigate('/sign-up')} className='p-2 border border-1 border-[#0359d2] text-[#0359d2] font-medium text-base md:text-lg rounded-md ms-4'>Sign Up</button></>
            }
            {/* Profile dropdown */}
            {
              blogToken && <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <CgProfile color='' size={35}/>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <p onClick={logOutHandler} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </p>
                </MenuItem>
              </MenuItems>
            </Menu>
            }
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton
              className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            >
              <p><ImBlogger color='white' size={14} className='inline me-2' />Your Blog</p>
            </DisclosureButton>
            <DisclosureButton
              className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            >
              <p><FaPencil color='white' size={14} className='inline me-2' />Write</p>
            </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
