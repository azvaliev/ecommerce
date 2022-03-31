interface Props {
	errorCode: number;
	errorName: string;
}

const ErrorPage = ({errorCode, errorName}: Props) => {
	return (
		<div className="error-wrapper">
			<h1>
				{errorCode}
			</h1>
			<span>
				{errorName}
			</span>
		</div>	
	)
}
export default ErrorPage;