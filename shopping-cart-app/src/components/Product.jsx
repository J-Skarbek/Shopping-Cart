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
  // const { products } = productDetails;
  console.log(id);
  console.log(productDetails);

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

    // const featuredImage = details.imageArray[0];

    // const [featuredImage, ...otherImages]= [details.imageArray[0], ...details.imageArray];

    // console.table(otherImages);

    // console.log(`This is the called array item: ${details.imageArray[0]}`)
    // console.log(details.imageArray)
    // console.log(featuredImage)
    // console.log(details.imageArray[0])
    // const testing = details.imageArray[0];
    // console.log(testing);

    // details.imageArray.map((image, i) => {
    //   return (
    //     <SwiperSlide key={i}>
    //             <img src={`/${image}`} />
    //     </SwiperSlide>
    //   )
    // })

    return (
      <div className="product-body max-w-7xl px-8 py-16">
        <div className="general-overview flex justify-center">
          {/* <div className="product-images w-full"> */}
            {/* <img src={`/${featuredImage}`} className="w-6/12"></img> */}
            {/* <img src={`/${details.images.image2}`}></img> */}
          {/* </div> */}
          <div className="ctas flex flex-col px-16">
            <h1 className="product-title">{details.name}</h1>
            <p>{details.price}</p>
            <p>{details.desciption}</p>
            <button type="button"></button>
            <button type="button"></button>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              // thumbs={{ swiper: thumbsSwiper }}
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
              {/* <SwiperSlide>
                <img src={`/${featuredImage}`} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide> */}
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
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide> */}
            </Swiper>
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