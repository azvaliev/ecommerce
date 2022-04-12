import { useEffect, useState } from "react";

// This custom hook takes an endpoint, type of data
// & interface type for returned data
// It gets the data, returns the current state of the fetch

type resType = "json" | "text";

function useFetch <S>(endpoint: string, resType: resType="json"):
	{res: S | null, isLoading: boolean}
{
	const [data, setData] = useState({
		res: null,
		isLoading: true
	});

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(endpoint);
			const parsedRes = resType === "json" ? await res.json() : await res.text();
			setData({
				res: parsedRes,
				isLoading: false
			}); 
		}
		getData();
	}, [endpoint, resType])

	return data;
}
export default useFetch;