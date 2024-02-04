import React, { useState } from 'react';
import restroData from './restroData';
import { Link } from 'react-router-dom';
import "./ListRestaurants.css"

const ListRestaurants = () => {

    const [restroArray, setRestroArray] = useState(restroData);

    // const addLike = (index) => {
    //     const temp = restroArray;
    //     temp[index].like++;
    //     setRestroArray([...temp]);
    // }
   

    return (
        <div>
            <div className='container mt-3'>
            <div className='row'>
                {
                    restroData.map((restro, index) => {
                        return <div className='col-md-4'><div className='card mb-4'>
                            <div className='card-header'>
                                <h4 className='text-center'>{restro.name}</h4>
                                {/* <h5 className='m-2'>{restro.address}</h5> */}
                               
                            </div>
                            <div className='card-body'>
                            <img className='w-100 my-img' src={restro.image} alt='' height='250px' />
                
                                
                            </div>
                            <div className='p-3'>
                                
                                <h5 className='m-2'><i class="fa-solid fa-location-dot"></i>{restro.address}</h5>
                            </div>

                            <div className='card-footer'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/bookrestaurant/'+index} className='btn w-100 ' ><i class="fa-solid fa-circle-check"></i> Book Restaurant</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        </div>
                    })
                }
            </div>
        </div>
        </div>

    )
}

export default ListRestaurants;