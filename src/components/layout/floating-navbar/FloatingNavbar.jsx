import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

import { useMediaQuery } from './hooks';
import { BASE_PATH, PATHS } from '@router';
import styles from './FloatingNavbar.module.css';

export const FloatingNavbar = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [open, setOpen] = useState(false);

  if ([`${BASE_PATH}/`, BASE_PATH].includes(pathname)) return null;

  const getNavClass = ({ isActive }) =>
    clsx(styles.navLink, isActive && styles.active);

  const handleNavigate = () => {
    setOpen(false);
  };

  const navItems = (
    <ul className={styles.navList}>
      <li>
        <NavLink
          end
          className={getNavClass}
          onClick={handleNavigate}
          to={BASE_PATH}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.GUIDES}
        >
          Guides
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.ABILITIES}
        >
          Abilities
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.PASSIVE_BUFFS}
        >
          Passive Buffs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.ITEMS}
        >
          Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.TIER_LISTS}
        >
          Tier Lists
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.RECOMMENDED_BUILDS}
        >
          Recommended Builds
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.GAME_MECHANICS}
        >
          Game Mechanics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={getNavClass}
          onClick={handleNavigate}
          to={PATHS.UPDATE_LOGS}
        >
          Update Logs
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <nav className={styles.floatingNavbar}>
        {isMobile ? (
          <button
            className={styles.menuButton}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={clsx(styles.icon, open && styles.iconOpen)}>
              {open ? <FiX /> : <FiMenu />}
            </span>
          </button>
        ) : (
          navItems
        )}
      </nav>

      {isMobile && open && (
        <div className={styles.popupOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.popupMenu}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems}
          </div>
        </div>
      )}
    </>
  );
};
