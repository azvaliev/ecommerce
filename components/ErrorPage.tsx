import Head from "next/head";

interface Props {
	errorCode: number;
	errorName: string;
}

const ErrorPage = ({ errorCode, errorName }: Props) => {
	return (
		<>
			<Head>
				<title>Perseus</title>
				<meta name="description" content={"404 - Page Not Found"} />
			</Head>
			<div className="error-wrapper">
				<h1>{errorCode}</h1>
				<span>{errorName}</span>
			</div>
		</>
	);
};
export default ErrorPage;
