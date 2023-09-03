/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';


const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3'>Trade in offer</p>
                  <h1>Super Value Deals</h1>
                  <h2>On all products</h2>

                  <p className='mb-3'>Save more today with XERA</p>

                  <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <Hero />

  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Featured Products</h1>
          <p>All Weather New Modern Designs</p>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>

  <section className="repair-services p-5">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white'>Repair Services</h5>
          <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3">What our customers say...</h1>
        <p className="mb-4">Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/349357544_1268919723993909_4883679056915769388_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeF6VmYzWqB7dRgB2vNc16AxvCzpXfwVlT28LOld_BWVPf5vklZzXPvcq7d5IybNizoN1jvaLgqhYYnQzjhqho6H&_nc_ohc=vtb3y0HNctAAX-MbvQz&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfAUdNH32qVRgo1IGad_IQU3YvPkHeS6uKwW5mlSS3kCLw&oe=64F8EB0E' className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src='https://scontent.fphc2-2.fna.fbcdn.net/v/t39.30808-6/349331017_608895454531016_1881535332370366714_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeHhM7HOvQZL06yZnB3uEw_xv2hVtB_RzxO_aFW0H9HPE7qjvOrAxfXWSjw9PkAZDM7VnblsO81eHk3cFbbGmqZi&_nc_ohc=WjXrJ0Adk7sAX-fxA9C&_nc_zt=23&_nc_ht=scontent.fphc2-2.fna&oh=00_AfD83g0VXBS8UyuUfOudyzfeavWt1Nkr38doNQ9Z22_ojQ&oe=64F927FA' className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/328778219_658266472648633_8514582382115814197_n.jpg?stp=c0.14.206.206a_cp6_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEJ-w95zH9MJxuRVBe3tmw0-GQJueUJzFv4ZAm55QnMW8nL1mFv2Vog-RsoLgkPCiWEx2VlWs4cHVBOJBfL03HX&_nc_ohc=E_nUtvx1OWEAX9kx0ya&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfB_Z1fFFFnhZhxHxE8LbtKcEWdMO7DGjK_x28vYGiEuig&oe=64FA684E' className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/336163900_2287719111388581_2829414563809424492_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEBkbvfYaXz1Hbgax4gYtpRmC_dUqk-e_qYL91SqT57-hXgS2JHy4i0BVVbbLUsnEDjaOcS8zbt38fW11CpwyQS&_nc_ohc=KwI9IemblxoAX-4nUGv&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfD2FXjk52uGONA23po6TpN-QjPDVLnpJoEM5Xl2bS1tcA&oe=64FA0526' className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <Newsletter />
  </>;
}

export default home