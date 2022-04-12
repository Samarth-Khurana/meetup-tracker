import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext); 

    return (
    <header className={classes.header}>
        <div className={classes.heading}>React Meetups</div>
        
        <nav className={classes.headerink}>
          
                <Link to='/' className={classes.headerLi}>All Meetups</Link>
                <Link to='/new-meetup' className={classes.headerLi} >New Meetups</Link>
                <Link to='/favorites' className={classes.headerLi} >
                My Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </Link>
          
        </nav>
        
    </header>
    
    );
}

export default MainNavigation;