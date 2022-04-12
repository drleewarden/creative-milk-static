import Link from "next/link";
import React, { useState } from "react";
import styles from "./nav.module.css";

export interface IProps {
  onClick: () => void;
}
const Nav: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <nav className="p-8">
        <ul className="flex">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              <Link href="/about">
                <a className={styles.nav__item}>About Me</a>
              </Link>
            </a>
          </li>
          <li className="mr-6">
            <Link href="/about">
              <a className={styles.nav__item}>Blog</a>
            </Link>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="#">
              <button onClick={onClick}>drop down</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
