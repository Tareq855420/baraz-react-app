import React from 'react';
import './TopBanner.css';
import top from '../../images/top.png';
import topbannerData from '../../data/topbannerData';

const TopBanner = () => {
    return (
        <div className="bg-brand">
            <div className='container'>
                <img src={top} className='mx-auto d-block py-3' alt="top banner" />

                <div className="row">
                    {
                        topbannerData.map( data =>
                            <div key={data.id} className="col bg-white m-2">
                                <img src={data.image} width='50' className='img-fluid py-1' alt={data.name} />
                                <a href={data.link} className='text-decoration-none text-dark fw-bold ps-2'>{data.name}</a>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    );
};

export default TopBanner;