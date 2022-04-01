import classes from "../../styles/components/ProductFilter.module.scss";

const filterOpts: Array<Array<FilterObj>> = [
	[
		{
			value: "",
			displayValue: "Product Type"			
		},
		{
			value: "shirt",
			displayValue: "Shirts"
		},
		{
			value: "vest",
			displayValue: "Suit Vests"
		},
		{
			value: "jacket",
			displayValue: "Suit Jackets"
		}
	], [
		{
			value: "",
			displayValue: "Style"
		},
		{
			value: "plain",
			displayValue: "Plain Color"
		},
		{
			value: "plaid",
			displayValue: "Plaid"
		}
	], [
		{
			value: "",
			displayValue: "Standard Edition"
		},
		{
			value: "limited",
			displayValue: "Limited Edition"
		}
	]		
]

interface FilterObj {
	value: string;
	displayValue: string;
}
interface FilterProps {
	options: FilterObj[];
}

const Filter = ({options}: FilterProps) => {
	return (
		<select className={classes["filter"]}>
			{options.map((setting, idx) => 
				<option value={setting.value} key={idx}>
					{setting.displayValue}
				</option>
			)}
		</select>
	)
}

const ProductFilters = () => {

	return (
		<div className={classes["wrapper-filters"]}>
			<h4>Filters: </h4>
			{filterOpts.map((opt, idx) =>
				<Filter options={opt} key={idx} />
			)}
		</div>
	)
}

export default ProductFilters;