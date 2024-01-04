import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
	const authState = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{authState && (
						<>
							<li>
								<a href='/'>My Products</a>
							</li>
							<li>
								<a href='/'>My Sales</a>
							</li>
							<li>
								<button
									onClick={() => {
										dispatch(authActions.logout());
									}}
								>
									Logout
								</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
