import React from 'react';
import Detail from '../Detail/Detail';

const Single = (props) => {
    // console.log(props)
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='col-4' >
            <div className='card p-3'>
                <img className='w-75 mx-auto' src={props.product.image} alt='' />
                <h1>{props.product.title}</h1>
                <div className='d-flex justify-content-center'>
                    <button onClick={props.setCartCount} className='btn btn-success me-2'>Add to cart</button>
                    <button className='btn btn-danger me-2'>delete</button>
                    {/* <button className='btn btn-info'>details</button> */}
                    <Detail product={props.product}></Detail>

                </div>


            </div>
        </div>
    );
};

export default Single;