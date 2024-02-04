import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from './restroData';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';



const BookRestro = () => {

    const { index } = useParams();

    const [restroData, setRestroData] = useState(data[index]);


    const [selDishes, setSelDishes] = useState([]);


    const bookrestaurantForm = useFormik({
        initialValues: {
            restaurant: {name : restroData.name, address : restroData.address, image : restroData.image},
            username: '',
            date: new Date(),
            duration: 'dropdown',
            additional: '',
            address: '',

        },
        onSubmit: async (values, { resetForm }) => {
            // alert(JSON.stringify(values));
            values.dishes = selDishes;
            console.log(values);

            // send request to backend/REST API
            const response = await fetch('http://localhost:5000/booking/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.status);
            console.log(response.statusText);

            if (response.status === 200) {
                enqueueSnackbar('resturant Added Successfully', { variant: 'success' });
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error' });
            }

        }
    })

    const addDish = (givenDish) => {
        // console.log(selDishes);
        const existing = selDishes.find(dish => dish.name === givenDish.name);
        // console.log(existing);
        if (existing !== undefined) {
            setSelDishes([...selDishes.filter(dish => dish.name !== givenDish.name)])
        } else {
            setSelDishes([...selDishes, givenDish])
        }
        // console.log(selDishes);
    }

    const checkDishAdded = (givenDish) => {
        const existing = selDishes.find(dish => dish.name === givenDish.name);
        if (existing !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div >
                       
         <div className="container overflow-hidden">
                    <div className="row gx-5">
                        <h3>{restroData.name}</h3>
                        <div className="col-md-8">
                            <div className='row g-4'>

                                {
                                    restroData.dishes.map((dish) => {
                                        return <div className='col-4'>
                                            <div className='card '>
                                                <img src={dish.image} className='card-img-top' alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{dish.name}</h5>
                                                    <button className='btn btn-primary' onClick={() => { addDish(dish) }}>{
                                                        checkDishAdded(dish) ? 'Remove' : 'Add'
                                                    }</button>
                                                </div>
                                            </div>


                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body p-5">
                                    <h3 className='text-center mb-5'>Add Restaurant</h3>

                                    <form onSubmit={bookrestaurantForm.handleSubmit} >

                                        <label htmlFor="username">Name</label>

                                        <input type="text" id='username' onChange={bookrestaurantForm.handleChange} value={bookrestaurantForm.values.username} className='form-control mb-4' />

                                        <label htmlFor="date">Booking Date</label>

                                        <input type="datetime-local" id='date' onChange={bookrestaurantForm.handleChange} value={bookrestaurantForm.values.date} className='form-control mb-4' />
                                        
                                        <label htmlFor="duration">Duration</label>

                                        <select type="dropdown" id='duration' onChange={bookrestaurantForm.handleChange} value={bookrestaurantForm.values.duration} className='form-control mb-4 '><option>1 Hour</option>
                                        <option>2 Hours</option>
                                        <option>3 Hours</option></select>
                                        
                                        
                                        
                                    
                                       

                                        <label htmlFor="additional">Additional</label>

                                        <textarea type="text" id='additional' onChange={bookrestaurantForm.handleChange} value={bookrestaurantForm.values.additional} className='form-control mb-4' rows={2} >{name.address}</textarea>





                                        <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        )
    }

    export default BookRestro;