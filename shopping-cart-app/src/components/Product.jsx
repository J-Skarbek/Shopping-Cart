import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Product(props) {

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const { id } = useParams();
  const productDetails = useLoaderData();

  // ***** Do we need to place this data in state???
  // ***** const [testState, setTestState] = React.useState(useLoaderData());
  // const { products } = productDetails;

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
            {/* <img src={`/${featuredImage}`} className="w-6/12"></img> */}
            {/* <img src={`/${details.images.image2}`}></img> */}
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
            <button type="button">Add To Cart</button>
            {/* <button type="button"></button> */}
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

export default Product;

// loader function

export const productDetailsLoader = async ({params}) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}