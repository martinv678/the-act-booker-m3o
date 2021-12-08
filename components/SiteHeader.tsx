import type { FC } from 'react'
import classnames from 'classnames'
// import Logo from './Logo';
// import {
//   getIsLoggedIn,
//   getUserProfilePicture,
//   getUserType,
// } from '../../redux/user/selectors';
// import { Search } from '../Search';
// import { logoutUser, showLoginModal } from '../../redux/user/actions';
// import { UserMenu } from './UserMenu';
import styles from '../styles/components/SiteHeader.module.css'
// import { LoggedInMenu } from './LoggedInMenu';
// import { LoggedOutMenu } from './LoggedOutMenu';

// interface SiteHeaderProps {
//   fixed: boolean
//   hideSearchBar?: boolean
//   onLoginClick: VoidFunction
//   onLogoutClick: VoidFunction
//   onSearchTextChange: (text: string) => void
//   profilePicture: string
//   searchText: string
// }

export const SiteHeader: FC = (
  {
    // fixed,
    // isLoggedIn,
    // onLoginClick,
    // onLogoutClick,
    // profilePicture,
    // userType,
  },
) => {
  const classes = classnames(styles.root, {
    // [styles.fixed]: fixed,
  })

  return (
    <header className="border-b border-gray-200 flex justify-between">
      {/* <Logo /> */}
      <div className={styles.right}>
        Hello
        {/* <Search />
          <UserMenu profilePicture={profilePicture}>
            {isLoggedIn ? (
              <LoggedInMenu
                onLogoutClick={onLogoutClick}
                userType={userType}
              />
            ) : (
              <LoggedOutMenu onLoginClick={onLoginClick} />
            )}
          </UserMenu> */}
      </div>
    </header>
  )
}
