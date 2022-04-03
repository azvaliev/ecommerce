interface Props {
	value: string | number;
	onCountIncrease: () => void;
	onCountDecrease: () => void;
}

const Counter = ({
	onCountIncrease,
	onCountDecrease,
	value
}: Props) => {
	return (
		<div className="count mtop-2">
			<button 
				className="decrease"
				onClick={onCountDecrease}
				>
				<span className="text">
					&#8211;
				</span>
			</button>
			<span className="counter">
				<span className="text">
					{value}
				</span>
			</span>
			<button 
				className="increase"
				onClick={onCountIncrease}
				>
				<span className="text">
					&#xFF0B;
				</span>
			</button>

		</div>
	)
}

export default Counter;