import React, { useState } from 'react';
import { product } from '../productid';
import styles from '../styles/product.module.scss';





function Tab() {
    const [data, setdata] = useState(product);
    const [search, setSearch] = useState('')
    const filterid = (carItem) => {
        const result = product.filter(carData => carData.catigory === carItem)
        if (filterid = "all")
            setdata(result)
    }

    return (
        <>
            <div>
                <div className="navbar_tab">
                    <ul>
                        <li>
                            <button type="btn" value="all" onClick={() => setdata(product)}>All</button>
                        </li>
                        <li>
                            <button type="btn" value="breakfast" onClick={() => filterid('Breakfast')}>Breakfast</button>
                        </li>
                        <li>
                            <button type="btn" value="lunch" onClick={() => filterid('Lunch')}>Lunch</button>
                        </li>
                        <li>
                            <button type="btn" value="dinner" onClick={() => filterid('Dinner')}>Dinner</button>
                        </li>
                        <li>
                            <button type="btn" value="dinner" onClick={() => filterid('Dessert')}>Dessert</button>
                        </li>

                        <li className="box_right">
                            <form>
                                <input className="search" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Catagoriy"></input>

                            </form>

                        </li>
                    </ul>
                </div>

                <div className="row">

                    {data.filter((product) => {
                        return search.toLocaleLowerCase() === '' ? product : product.title.toLocaleLowerCase().includes(search)
                    }).map(product => (
                        <div key={product.id} className="col-lg-4">

                            <div className={styles.block}>
                                <div className={styles.block_img}>
                                    <img className='img-fluid' src={product.photo} alt="" />
                                </div>
                                <div className={styles.block_title}>
                                    <h4 className={styles.block_title_text}>
                                        {product.title}
                                    </h4>
                                    <h5 className={styles.block_title_catigory}>
                                        {product.catigory}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
}

export default Tab;

