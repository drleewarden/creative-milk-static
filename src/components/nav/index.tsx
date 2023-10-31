import React from 'react'

import Link from 'next/link'

import { ChevronDownIcon } from '@heroicons/react/24/solid'

import styles from './nav.module.css'

export interface IProps {
  onClick: () => void
}
const Nav: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <nav className="ml-4 pt-8">
        <ul className="flex">
          <li className="mr-6">
            <Link href="/">
              <a className={styles.nav__item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              <Link href="/about">
                <a className={styles.nav__item}>About Me</a>
              </Link>
            </a>
          </li>
          <li className="mr-6">
            
          <button onClick={onClick} >
            <a style={{cursor: 'pointer'}} className="flex cursor-not-allowed text-gray-400" href="#">
              drop down{' '}
              <ChevronDownIcon className="text-black-500 h-6 w-6" />
            </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Nav
