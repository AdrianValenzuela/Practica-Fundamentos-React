// libraries imports
import React from 'react';

// local imports
import { FormField, Checkbox } from '../../shared';

function FiltersForm() {

    const initialFilters = {
        name: '',
        minPrice: '',
        maxPrice: '',
        sale: false,
        purchase: false,
        tags: []
    };
    const [filters, setFilters] = React.useState(initialFilters);

    const handleFiltersForm = event => {
        setFilters(filters => {
            console.log(event.target.name);
            return {
                ...filters,
                [event.target.name]: event.target.name === 'sale' ? 
                                        event.target.checked :
                                     event.target.name === 'purchase' ?
                                        event.target.checked :
                                    event.target.value
            };
        });
    }

    return (
        <div className='filters'>
            <FormField 
                className={'input'}
                type={'text'}
                name={'name'}
                placeholder={'name'}
                value={filters.name}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input'}
                type={'number'}
                name={'minPrice'}
                placeholder={'min price'}
                value={filters.minPrice}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input'}
                type={'number'}
                name={'maxPrice'}
                placeholder={'max price'}
                value={filters.maxPrice}
                onChange={handleFiltersForm}
            />
            <Checkbox
                className={'checkbox'}
                name={'sale'}
                text={'Sale'}
                disabled={false}
                checked={filters.sale}
                onChange={handleFiltersForm}
            />
            <Checkbox
                className={'checkbox'}
                name={'purchase'}
                text={'Purchase'}
                disabled={false}
                checked={filters.purchase}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input'}
                type={'text'}
                name={'tags'}
                placeholder={'tags'}
                value={filters.tags}
                onChange={handleFiltersForm}
            />
        </div>
    );
}

export default FiltersForm;