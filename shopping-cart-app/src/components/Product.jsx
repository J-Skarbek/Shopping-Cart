import React from 'react';
import { useLoaderData, useParams, useLocation, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const productDetailsLoader = async ({params}) => {
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}

export default function Product(props) {

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const { id } = useParams();
  const productDetails = useLoaderData();
  const location = useLocation();
  const search = location.state?.search || '';
  console.log(useParams)

  function getAllProductDetails() {
    let details;
    productDetails.map(category => {
      const productDeets = category.products.map(detail => {
        if (id === detail.name) {
          details = detail;
        }
      })
      return details;
    })

    return (
      <div className="product-body max-w-7xl px-8 py-16">
        <div className="general-overview flex justify-center">
          <div className="product-images w-full">
          <Link 
            to={`..${search}`}
            className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg"
          >
            Back to Browsing
          </Link>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {
                details.imageArray.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img src={`/${image}`} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {
                details.imageArray.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img src={`/${image}`} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className="ctas flex flex-col px-16">
            <h1 className="product-title">{details.name}</h1>
            <p>{details.price}</p>
            <p>{details.desciption}</p>
            <button 
              type="button"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      { getAllProductDetails() }
    </div>
  )
}