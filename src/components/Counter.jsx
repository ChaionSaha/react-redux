import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter.count);
	const show = useSelector((state) => state.counter.show);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(actions.increment());
	};

	const decrementHandler = () => {
		dispatch(actions.decrement());
	};

	const increaseHandler = () => {
		dispatch(actions.increase({ amount: 10 }));
	};

	const toggleCounterHandler = () => {
		dispatch(actions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && (
				<>
					<div className={classes.value}>{counter}</div>
					<div className=''>
						<button onClick={incrementHandler}>Increment</button>
						<button onClick={increaseHandler}>Increase</button>
						<button onClick={decrementHandler}>Decrement</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
