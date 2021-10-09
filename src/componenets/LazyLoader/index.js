import React from "react";
import LoaderImg from '../../assets/images/Loaders/Loader.gif'

const LazyLoader = () => {
    return (
        <div className='lazy_loader'>
            <img src={LoaderImg} alt='' />
        </div>
    )
}

export default LazyLoader;