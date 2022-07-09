import { useState, useEffect } from "react"
import Skeleton from 'react-loading-skeleton'
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height="350px"/>
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px"/>
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px"/>
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px"/>
                </div>
            </>
        )
    }

    const filterProduct = ((cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    })
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>jewelery</button>
                    <button className="btn btn-outline-dark me-2"onClick={() => filterProduct("electronics")}>Electronics</button>

                </div>
                <hr />
                <div className="row">
                    {filter.map((product) => {
                        return (

                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="300px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p class="card-text">$  {product.price}</p>
                                        <NavLink to={`/Products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }

    return (
        <div>
            <Navbar/>
            <hr />
            <div classNameName="container my-5 py-5">
                <div classNameName="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products