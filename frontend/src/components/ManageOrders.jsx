import React, { useEffect, useState } from 'react'

const ManageOrders = () => {

    const [orderList, setOrderList] = useState([]);

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:5000/booking/getall');
        const data = await response.json();
        console.log(data);
        setOrderList(data);
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    

    return (
        <div>
            <div className="container">
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Username</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Additional</th>
                            <th>Dishes</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map((order, index) => {
                                return <tr key={index}>
                                    <td>{order.restaurant.name}</td>
                                    <td>{order.username}</td>
                                    <td>{new Date(order.date).toLocaleDateString()} {new Date(order.date).toLocaleTimeString()}</td>
                                    <td>{order.duration}</td>
                                    <td>{order.additional}</td>
                                    <td>
                                        <ul>
                                            {
                                                order.dishes.map((dish, index) => {
                                                    return <li key={index}>{dish.name}</li>
                                                })
                                            }
                                        </ul>
                                    </td>
                                   
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageOrders