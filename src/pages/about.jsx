/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import a6 from '../assets/images/about/a6.jpg'
import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

const about = () => {
  return <>
  <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Know Us</h1>
            <p className='text-white fs-3'>Get to know us more</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us p-5">
    <div className="row">
      <div className="col-md-6">
        <img src={a6} alt="" className='img-fluid p-5' />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1><b>Who are we?</b></h1>
        <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
      </div>
    </div>
  </section>

  <section className="about-app p-5">
    <h2 className='fs-1 text-center mb-4' >Download our <Link>App</Link></h2>
    <div className="col-12 p-5 col-md-8 mx-auto">
      <video loop muted autoPlay src={video} className='w-100'></video>
    </div>
  </section>

  <section className="abouts p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className='mb-3'>What our customers say...</h1>
          <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/349357544_1268919723993909_4883679056915769388_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeF6VmYzWqB7dRgB2vNc16AxvCzpXfwVlT28LOld_BWVPf5vklZzXPvcq7d5IybNizoN1jvaLgqhYYnQzjhqho6H&_nc_ohc=vtb3y0HNctAAX-MbvQz&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfAtx-zzNlz2dCXWu9PBl52ryoWPcEmH-G_VD6gI3VomTQ&oe=64F8EB0E' className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Marvel Clein</h5>
                <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src='https://scontent.fphc2-2.fna.fbcdn.net/v/t39.30808-6/335039325_2023819154683294_6676114057867213787_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeHBPIER1c3Eg9etuDogiczDV4v53svc_YpXi_ney9z9io2gwJaBzGM1i_r4P9pbrB2AYSs_Cj0b2GV4_vEowmoA&_nc_ohc=tNe0AX2mDvUAX81KTrW&_nc_zt=23&_nc_ht=scontent.fphc2-2.fna&oh=00_AfDHhssWuBFUiayXV8kO_HYnO-KuxNltd68pbLVV2CQ9aw&oe=64FA9B61' alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/328778219_658266472648633_8514582382115814197_n.jpg?stp=c0.14.206.206a_cp6_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEJ-w95zH9MJxuRVBe3tmw0-GQJueUJzFv4ZAm55QnMW8nL1mFv2Vog-RsoLgkPCiWEx2VlWs4cHVBOJBfL03HX&_nc_ohc=E_nUtvx1OWEAX9kx0ya&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfB_Z1fFFFnhZhxHxE8LbtKcEWdMO7DGjK_x28vYGiEuig&oe=64FA684E' alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src='https://scontent.fphc2-2.fna.fbcdn.net/v/t39.30808-6/331577627_606343111335453_5962933244846135453_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeGxpE0h7R4j4FnZrGSS-KNZ6CksznC2PPvoKSzOcLY8-5PK9GERvbGCY6-bHFAYf5lFoMIr8zKDNWhtxEpxcERB&_nc_ohc=erBASPlq1X8AX8gbsY1&_nc_zt=23&_nc_ht=scontent.fphc2-2.fna&oh=00_AfC74m5j7EjWSDKO8e_eMLLkYGeKKHDMMPszK7KBiV1hZw&oe=64FA8ED4' alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Mercy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/324881805_1203892826924615_831049673711162051_n.jpg?stp=c0.36.206.206a_cp6_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeH25642X2s_-56UtSzSknj7V5UMDNdy8fpXlQwM13Lx-i3c7MRq_IEud5_D8eC9-48ylns_OHNfpnbEY5DdVlHJ&_nc_ohc=SKXqGz97dDMAX__kgcj&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfBhNENVpnoCiR-j7YUHOTaZNB38V-cL9sfONrsxqxhIvw&oe=64FA8D34' alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Uddy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src='https://scontent.fphc2-1.fna.fbcdn.net/v/t39.30808-6/328063240_568484535296534_3979401429727377840_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=0df3a7&_nc_eui2=AeEb_K2ylLBX5oPKf9HRPxOYMuelI5qk-yAy56UjmqT7IN2nwdTD4s2BDTZ2XFXwy6LdJlsk6hs2wZabuChDHEUZ&_nc_ohc=iuXGgg0DGecAX-Ty-mi&_nc_zt=23&_nc_ht=scontent.fphc2-1.fna&oh=00_AfA-DuQCkaagVzuis6uG6KYmXdLFG7iwl_iBAePRB6Ma2A&oe=64FA2C20' className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Valentina</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
              
                </div>
              </div>
            </div>
            
            <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
              <img src={orders} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
              <img src={orders1} alt="" className='img-fluid'/>
              <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
              <img src={orders2} alt="" className='img-fluid'/>
              <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
              <img src={orders3} alt="" className='img-fluid'/>
              <p className="card-text">24/7 Support</p>
              </div>
              <div>
              <img src={orders4} alt="" className='img-fluid'/>
              <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default about