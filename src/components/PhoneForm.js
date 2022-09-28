import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import createPhone from '../services/createPhone';
import Loading from './Loading';
import Error from './Error';
import './PhoneForm.css'

const PhoneForm = () => {
    const { register, handleSubmit, reset, formState } = useForm()
    const { isSubmitting } = formState

    const [newPhone, setNewPhone] = useState({})
    const [feedback, setFeedback] = useState(null);
    const [error, setError] = useState(null);

    // const submitForm = (event) => {
    //     event.preventDefault()
    //     const { target: { 
    //         name: { value: name}, 
    //         manufacturer: { value: manufacturer}, 
    //         price: { value: price }, 
    //         color: { value: color },
    //         screen: { value: screen },
    //         processor: { value: processor },
    //         ram: { value: ram },
    //         image: { value: image },
    //         description: { value: description }
    //     } } = event

    //     const newPhoneToCreate = {name, manufacturer, price, color, screen, processor, ram, imageFileName : image, description}

    //     createPhone(newPhoneToCreate)
    //         .then(response => {
    //             console.log(response);
    //             setNewPhone(response.data)
    //             setFeedback(response.message)
    //         })
    //         .catch(error => {
    //             console.log('Phone error:', error.message)
    //             setError(error.message)
    //         });
    // }

    const submitForm = data => {

        return createPhone(data)
            .then(response => {
                console.log(response);
                setNewPhone(response.data)
                setFeedback(response.message)
                
            })
            .catch(error => {
                console.log('Phone error:', error.message)
                setError(error.message)
            });
    }

    return (
        <>{!error && !isSubmitting && !feedback &&
            <form onSubmit={handleSubmit(submitForm)} className='phone-form'>
                <div className='phone-form-container'>

                    <div className='group-form'>
                        <div className='item-form'>
                            <label htmlFor="name">Name</label>
                            <input className='item-form-input' type="text" id="name" {...register('name')} placeholder='iPhone 12'/>
                        </div>
                        <div className='item-form'>
                            <label htmlFor="manufacturer">Manufacturer</label>
                            <input className='item-form-input' type="text" id="manufacturer" {...register('manufacturer')} placeholder='Apple'/>
                        </div>
                    </div>
                    
                    <div className='group-form'>
                        <div className='item-form'>
                            <label htmlFor="price">Price</label>
                            <input className='item-form-input' type="number" id="price" {...register('price')} placeholder='879'/>
                        </div>
                        <div className='item-form'>
                            <label htmlFor="color">Color</label>
                            <input className='item-form-input' type="text" id="color" {...register('color')} placeholder='Black'/>
                        </div>
                    </div>
                    
                    <div className='group-form'>
                        <div className='item-form'>
                            <label htmlFor="screen">Screen</label>
                            <input className='item-form-input' type="text" id="screen" {...register('screen')} placeholder='4,7 inch IPS'/>
                        </div>
                        <div className='item-form'>
                            <label htmlFor="processor">Processor</label>
                            <input className='item-form-input' type="text" id="processor" {...register('processor')} placeholder='A10 Fusion'/>
                        </div>
                    </div>
                    
                    <div className='group-form'>
                        <div className='item-form'>
                            <label htmlFor="ram">Ram</label>
                            <input className='item-form-input' type="number" id="ram" {...register('ram')} placeholder='2'/>
                        </div>
                        <div className='item-form'>
                        <label htmlFor="image">Image url</label>
                            <input className='item-form-input' type="text" id="image" {...register('imageFileName')} placeholder='https://phoneimage.com/iphone12'/>
                        </div>
                    </div>
                    
                    <div className='item-form'>
                        <label htmlFor="description">Description</label>
                        <textarea className='item-form-input' type="text" id="description" {...register('description')} placeholder=''/>
                    </div>

                    <div className='actions-container'>
                        <button className='info-action' onClick={() => {
                                                            reset({
                                                                name: '', 
                                                                manufacturer: '', 
                                                                price: '', 
                                                                color: '',
                                                                screen: '',
                                                                processor: '',
                                                                ram: '',
                                                                image: '',
                                                                description: '',
                                                            })}}>Cancel</button>
                        <button type="submit" className='info-action'>Submit</button>
                    </div>
                </div>
            </form>
            }
            {!error && isSubmitting &&
                <Loading />
            }

            {!error && !isSubmitting && feedback &&
                <section className='feedback-container'>
                    <h3>{feedback}</h3>
                    <Link 
                        style={{ textDecoration: 'none' }}
                        to={`/${newPhone.id}`}
                        key={newPhone.id}>
                        <p>See phone details</p>
                    </Link>
                </section>
            }

            {error && Object.keys(newPhone).length === 0 &&
                <Error message={error} />
            }
        </>
    )
}

export default PhoneForm
