import { ChangeEvent, useContext } from 'react';
import { filterContext } from '../../pages/products/all';
import classes from '../../styles/modules/ProductFilterSort.module.scss';

const sortingOptions = [
	{
		value: '',
		displayValue: 'Featured',
	},
	{
		value: '0-1',
		displayValue: 'Price: Low to High',
	},
	{
		value: '1-0',
		displayValue: 'Price: High to Low',
	},
	{
		value: 'a-z',
		displayValue: 'A - Z',
	},
	{
		value: 'z-a',
		displayValue: 'Z - A',
	},
	{
		value: 'new-old',
		displayValue: 'Newest first',
	},
	{
		value: 'old-new',
		displayValue: 'Oldest first',
	},
];

const Sorting = () => {
	const { sortingState, updateSortingState } = useContext(filterContext);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
		updateSortingState!(e.target.value);

	return (
		<div className={classes['wrapper-sort']}>
			<h4>Sorting: </h4>
			<select onChange={handleChange} className={`accent ${classes['sort']}`}>
				{sortingOptions.map((option, idx) => (
					<option
						value={option.value}
						key={idx}
						selected={option.value === sortingState}
						>
						{option.displayValue}
					</option>
				))}
			</select>
		</div>
	);
};

export default Sorting;
