import React from 'react';
import './product.css';
import {NavLink, Route} from 'react-router-dom';
class Products extends React.Component{
    
    render(){
        return(
            <div>
            <section className="jumbotron text-center">
    <div className="container">
        <h1 className="jumbotron-heading">E-COMMERCE CATEGORY</h1>
        <p className="lead text-muted mb-0">SELECT YOUR BRAND</p>
    </div>
</section>
<div className="container">
    <div className="row">
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="category.html">Category</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Mens Clothing</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-12 col-sm-3">
            <div className="card bg-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list"></i> Categories</div>
                <ul className="list-group category_block">
                    <li className="list-group-item"><a href="category.html">Mens Clothing</a></li>
                    <li className="list-group-item"><a href="category.html">Kids Clothing</a></li>
                    <li className="list-group-item"><a href="category.html">Womens Clothing</a></li>
                    <li className="list-group-item"><a href="category.html">Home&Living</a></li>
                    <li className="list-group-item"><a href="category.html">Offers</a></li>
                </ul>
            </div>
            <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase">New Offers</div>
                <div className="card-body">
                    <img className="img-fluid" src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/30/4887db3f-379a-4f75-9f9b-45cf492700b21617083976268-Flat-1000-----1.jpg" />
                    <h5 className="card-title">Select Brands</h5>
                    <ul class="brand-list">
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "} Roadster</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "}Highlander</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "}Peter England</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "}Louis Phillipe</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "}Arrow</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "} Roadster </span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    
                    <li><label class="vertical-filters-label common-customCheckbox">
                    <input type="checkbox" value="Roadster"></input>
                    <span class="brand-num">{" "}Allen Solly</span>
                    <div class="common-checkboxIndicator"></div>
                    </label></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1265399/2018/3/30/11522394285273-Highlander-Blue-Slim-Washed-Denim-Casual-Shirt-5701522394285017-1.jpg"  alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Highlander</a></h4>
                            <p className="card-text">Washed Denim Casual Shirt</p>
                            <span className="product-discountedPrice">Rs.440</span>{" "}{" "}
                            <span className="product-strike">Rs.999</span>{" "}{" "}
                            <span class="product-discountPercentage">(40% OFF)</span>
                            <div className="row">
                                <div className="col">
                                    <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                    <a to="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Allen Solly</a></h4>
                            <p className="card-text">Men Standard Fit Casual Shirt</p>
                            <span className="product-discountedPrice">Rs.674</span>{" "}{" "}
                            <span className="product-strike">Rs.1499</span>{" "}{" "}
                            <span class="product-discountPercentage">(55% OFF)</span>
                            <div className="row">
                                <div className="col">
                                    <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                    <a href="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11326478/2020/7/29/79821772-07ba-4190-b988-8c73cfb926f91596017049163TrousersRoadsterMenShirtsRoadsterMenShirtsRoadsterMenShirtsR1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Roadster</a></h4>
                            <p className="card-text">Regular Fit Printed Shirt</p>
                            <span className="product-discountedPrice">Rs.499</span>{" "}{" "}
                            <span className="product-strike">Rs.1499</span>{" "}{" "}
                            <span class="product-discountPercentage">(60% OFF)</span>
                            <div className="row">
                                <div className="col">
                                    <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                    <a href="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11369800/2020/3/5/49d3f5b1-9eb9-44c8-bc83-7d4ecdad46981583403443211-Mast--Harbour-Men-Shirts-9231583403441334-1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Louis Phillipe</a></h4>
                            <p className="card-text">Regular Fit Casual Linen Shirt</p>
                            <span className="product-discountedPrice">Rs.1399</span>{" "}{" "}
                            <span className="product-strike">Rs.2799</span>{" "}{" "}
                            <span class="product-discountPercentage">(70% OFF)</span>
                            <div className="row">
                                <div className="col">
                                    <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                    <a href="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13624926/2021/2/25/ff00b3fb-421b-488e-84ef-3249c2f996e01614231385234UnitedColorsofBenettonMenPinkBlackSlimFitTwillPrintedPureCot1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Peter England</a></h4>
                            <p className="card-text">Checked Casual Shirt</p>
                            <span className="product-discountedPrice">Rs.1754</span>{" "}{" "}
                            <span className="product-strike">Rs.2699</span>{" "}{" "}
                            <span class="product-discountPercentage">(35% OFF)</span>
                            <div className="row">
                                <div className="col">
                                    <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                    <a href="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/15/c3f930c7-5fc9-406c-9f31-596abb0f05ad1615802780363-1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"><a to="product.html" title="View Product">Allen Solly</a></h4>
                            <p className="card-text">Slim Fit Checked Casual Shirt</p>
                            <span className="product-discountedPrice">Rs.440</span>{" "}{" "}
                            <span className="product-strike">Rs.999</span>{" "}{" "}
                            <span class="product-discountPercentage">(40% OFF)</span>
                            <div className="row">
                                <div className="col">
                                <p className="btn btn-danger btn-block">BuyNow</p>
                                </div>
                                <div className="col">
                                <a href="#" className="btn btn-success btn-block">Addtocart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</div>


<footer className="text-light">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
                <h5>About</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p className="mb-0">
                Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet. 
                Global retail ecommerce sales are projected to reach $27 trillion.
                </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h5>Informations</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><a href="">Mens Clothing</a></li>
                    <li><a href="">Womens Clothing</a></li>
                    <li><a href="">Kids Clothing</a></li>
                    <li><a href="">Home&Living</a></li>
                </ul>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h5>Others links</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contactus">ContactUs</NavLink></li>
                </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
                <h5>Contact</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><i className="fa fa-home mr-2"></i> ecommerce company</li>
                    <li><i className="fa fa-envelope mr-2"></i> ecommerce@gmail.com</li>
                    <li><i className="fa fa-phone mr-2"></i> +91 9876432214</li>
                    <li><i className="fa fa-print mr-2"></i> +91 9848012345</li>
                </ul>
            </div>     
        </div>
    </div>
</footer>
            
            
            </div>
        )
    }
}

export default Products;