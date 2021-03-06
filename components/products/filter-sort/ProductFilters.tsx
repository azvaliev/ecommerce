import { ChangeEvent, useContext } from "react";
import { filterContext } from "../../../pages/products/all";
import classes from "../../../styles/modules/ProductFilterSort.module.scss";

const allFilterOpts: filterSettings[] = [
	{
		type: "productType",
		options: [
			{
				value: "",
				displayValue: "All Products"			
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
		]
	},  {
		type: "style",
		options:[
			{
				value: "",
				displayValue: "Any Style"
			},
			{
				value: "plain",
				displayValue: "Plain Color"
			},
			{
				value: "striped",
				displayValue: "Striped"
			},
			{
				value: "plaid",
				displayValue: "Plaid"
			}
		]
	}, {
		type: "edition",
		options: [
			{
				value: "",
				displayValue: "All Editions"
			},
			{
				value: "standard",
				displayValue: "Standard Edition"
			},
			{
				value: "limited",
				displayValue: "Limited Edition"
			}
		]	
	}	
]
interface filterSettings {
	type: "productType" | "style" | "edition";
	options: filterObj[];
	id?: number;
}
interface filterObj {
	value: string;
	displayValue: string;
}

const Filter = ({type, options, id}: filterSettings) => {

	const { filterState, updateFilterState } = useContext(filterContext);

	const handleUpdateFilterState = (e: ChangeEvent<HTMLSelectElement>) => {
		updateFilterState!({
			[type]: e.target.value
		})
	}

	return (
		<select 
			className={`filter accent ${classes["filter"]}`}
			onChange={handleUpdateFilterState}
			defaultValue={options.find(setting => setting.value === filterState![type])?.value}
			id={`filter${id}`}
			>
			{options.map((setting) => 
				<option 
					value={setting.value}
					key={setting.value}
					>
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
			{allFilterOpts.map((filter, idx) =>
				<Filter type={filter.type} options={filter.options} id={idx} key={idx} />
			)}
		</div>
	)
}

export default ProductFilters;