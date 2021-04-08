// libraries imports
import React from 'react';

// local imports
import { FormField, Checkbox, Button, Select } from '../../shared';
import './FiltersForm.css';

function FiltersForm({ tags }) {

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
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            };
        });
    }

    return (
        <form className='filters'>
            <FormField 
                className={'input is-primary'}
                type={'text'}
                name={'name'}
                placeholder={'name'}
                value={filters.name}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input is-primary'}
                type={'number'}
                name={'minPrice'}
                placeholder={'min price'}
                value={filters.minPrice}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input is-primary'}
                type={'number'}
                name={'maxPrice'}
                placeholder={'max price'}
                value={filters.maxPrice}
                onChange={handleFiltersForm}
            />
            <Checkbox
                className={'checkbox checkbox-filters'}
                name={'sale'}
                type={'checkbox'}
                text={'Sale'}
                disabled={false}
                checked={filters.sale}
                onChange={handleFiltersForm}
            />
            <Checkbox
                className={'checkbox checkbox-filters'}
                name={'purchase'}
                type={'checkbox'}
                text={'Purchase'}
                disabled={false}
                checked={filters.purchase}
                onChange={handleFiltersForm}
            />
            <Select tags={tags}/>
            <Button 
                className={'button is-primary is-rounded'} 
                text={'Search'}
            />
        </form>
    );
}

export default FiltersForm;