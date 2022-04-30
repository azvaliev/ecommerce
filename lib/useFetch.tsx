import useSWR from "swr";

// This custom hook takes an endpoint, type of data
// & interface type for returned data
// It gets the data, returns the current state of the fetch

type resType = "json" | "text";

function useFetch <S>(endpoint: string, resType: resType="json"):
	{res: S | null, isLoading: boolean}
{

	const fetcher = (args_0: string) => fetch(args_0).then(res => resType === "json" ? res.json() : res.text())

	const {data, error} = useSWR(endpoint, fetcher)

	return {
		res: data,
		isLoading: !error && !data
	};
}
export default useFetch;