import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: { email: '', password: '' },
	});

	const dispatch = useDispatch();

	const handleFormSubmit = ({ email, password }) => {
		if (email === 'chaionsaha00@gmail.com' && password === '123456')
			dispatch(authActions.login());
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div className={classes.control}>
						<label htmlFor='email'>Email</label>
						<input {...register('email')} type='email' id='email' />
					</div>
					<div className={classes.control}>
						<label htmlFor='password'>Password</label>
						<input {...register('password')} type='password' id='password' />
					</div>
					<button type='submit'>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
