import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { 
  LuSmartphone, 
  LuMonitor, 
  LuWatch, 
  LuCamera, 
  LuHeadphones, 
  LuGamepad2 
} from 'react-icons/lu';

import styles from './Header.module.css';

import Like from '../../assets/like.svg';
import Cart from '../../assets/cart.svg';
import User from '../../assets/user.svg';

const menu = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact Us', link: '/contact' },
  { name: 'Blog', link: '/blog' }
];

const categories = [
  { name: 'Phones', icon: <LuSmartphone size={24} />, link: '/phones' },
  { name: 'Computers', icon: <LuMonitor size={24} />, link: '/computers' },
  { name: 'Smart Watches', icon: <LuWatch size={24} />, link: '/watches' },
  { name: 'Cameras', icon: <LuCamera size={24} />, link: '/cameras' },
  { name: 'Headphones', icon: <LuHeadphones size={24} />, link: '/headphones' },
  { name: 'Gaming', icon: <LuGamepad2 size={24} />, link: '/gaming' },
];

const Header = () => {
  return (
    <header className={styles.header}>
     
      <div className={styles.header__top}>
        <div className={styles.header__logo}>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className={styles.header__search}>
          <span>
            <CiSearch size={25} />
          </span>
          <input type="text" placeholder="Search" />
        </div>

        <nav className={styles.header__nav}>
          {menu.map((item, index) => (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className={styles.header__buttons}>
          <span>
            <img src={Like} alt="Like" />
          </span>
          <span>
            <img src={Cart} alt="Cart" />
          </span>
          <span>
            <img src={User} alt="User" />
          </span>
        </div>
      </div>

      <div className={styles.header__bottom}>
        <div className={styles.header__bottom_container}>
          {categories.map((cat, index) => (
            <a key={index} href={cat.link} className={styles.category_item}>
              <span className={styles.category_icon}>{cat.icon}</span>
              <span className={styles.category_name}>{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;