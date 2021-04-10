// libraries imports
import React from 'react';
import { useHistory } from 'react-router-dom'

// local imports
import './NewAdvertPage.css';
import { Layout } from '../../layout';
import { Button, FormField, Checkbox, Select, ErrorMessage } from '../../shared';
import advertsService from '../../../api/adverts.js'; 

function NewAdvertPage({ isLogged, onLogout }) {

    const [tags, setTags] = React.useState([]);
    React.useEffect(() => {
        // pedimos los tags al back
        advertsService.getAdvertsTags().then(setTags);
    }, []);

    const history = useHistory();
    const initialValues = {
        name: '',
        price: null,
        sale: false,
        tags: []
    };
    const [newAdvert, setNewAdvert] = React.useState(initialValues);

    const handleNewAdvert = event => {
        let tagsValues = [];

        if (event.target.name === 'tags') {
            for (const option of event.target.options) {
                if (option.selected) {
                    tagsValues.push(option.value);
                }
            }
        }

        setNewAdvert(newAdvert => {
            return {
                ...newAdvert,
                [event.target.name]: event.target.type === 'checkbox' ? 
                                     event.target.checked : 
                                     event.target.name === 'tags' ?
                                     tagsValues :
                                     event.target.value
            };
        });
    };

    const [error, setError] = React.useState(null);
    const resetError = () => {
        setError(null);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        resetError();
        try {
            let data = new FormData();
            data.append("name", newAdvert.name);
            data.append("price", newAdvert.price);
            data.append("sale", newAdvert.sale);
            data.append("tags", newAdvert.tags);
            await advertsService.createAdvert(data);
            history.push('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Layout isLogged={isLogged} onLogout={onLogout}>
            <div>
                <span className='title'>New Product</span>
                <form className='newAdvert-form' onSubmit={handleSubmit}>
                    <FormField 
                        className={'input is-primary'} 
                        type={'text'} 
                        name={'name'}
                        placeholder={'name'}
                        value={newAdvert.name}
                        onChange={handleNewAdvert}
                    />
                    <FormField 
                        className={'input is-primary'} 
                        type={'number'}
                        name={'price'}
                        placeholder={'price'}
                        value={newAdvert.price}
                        onChange={handleNewAdvert}
                    />
                    <Checkbox
                        className={'checkbox'} 
                        name={'sale'}
                        type={'checkbox'}
                        text={'Sale'}
                        disabled={false}
                        checked={newAdvert.sale}
                        onChange={handleNewAdvert}
                    />
                    <Select 
                        tags={tags}
                        name={'tags'}
                        multiple
                        onChange={handleNewAdvert}
                    />
                    <Button
                        className={'button is-primary is-rounded'}
                        text={'New Advert'} 
                    />
                </form>
            </div>
            {error && <ErrorMessage message={error} onClick={resetError}/>}
        </Layout>
    );
}

export default NewAdvertPage;