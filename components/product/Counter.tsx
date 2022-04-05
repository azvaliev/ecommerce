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
		<div className="count number mtop-2">
			<div 
				className="decrease"
				onClick={onCountDecrease}
				>
				<svg focusable="false" fill="#ffffff" aria-hidden="true" viewBox="0 0 24 24">
						<path d="M19 13H5v-2h14v2z"></path>
					</svg>
			</div>
			<span className="counter">
				<span className="text">
					{value}
				</span>
			</span>
			<div 
				className="increase"
				onClick={onCountIncrease}
				>
				<svg focusable="false" fill="#ffffff" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon">
					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
				</svg>
			</div>

		</div>
	)
}

export default Counter;