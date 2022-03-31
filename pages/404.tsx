import ErrorPage from "../components/ErrorPage";

const default404 = () => {
	return <ErrorPage errorCode={404} errorName="This page could not be found." />
}

export default default404;