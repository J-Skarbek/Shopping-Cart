import React, { useContext } from 'react';
import { useLoaderData, useParams, useLocation, Link, Form } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ShopContext } from './RootLayout';

export const productDetailsLoader = async ({params}) => {
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}

export async function action() {
  
}

export default function Product() {

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { productName } = useParams();
  const productDetails = useLoaderData();
  const location = useLocation();
  const search = location.state?.search || '';

  const { addToCart, testCartAdd } = useContext(ShopContext);

  // function handleSubmissions(e) {
  //   e.preventDefault();

  //   const form = e.target;
  //   const formData = new FormData(form);

  //   for (const [key, value] of formData) {
  //     console.log(`${key}: ${value}\n`)
  //   };

  // }

  //While this function works, I may end up refactoring this once the data is placed
  //into a firestore db. Leaving it now (11/26/23) as I want to get other functionality
  //working correctly
  function getDetails() {
    let details;
    productDetails.map(category => {
      category.products.map(detail => {
        if (productName === detail.name) {
          details = detail;
        }
      })
      return details;
    })

    // const swiperSlideArray = () => {
    //   return details.imageArray.map((image, i) => {
    //     return (
    //       <SwiperSlide key={i}>
    //         <img src={`/${image}`} />
    //       </SwiperSlide>
    //     )
    //   })
    // }

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
              onClick={() => addToCart(details)}
            >
              Add To Cart
            </button>
            <button onClick={() => testCartAdd(details)}>Testing the new add to cart btn</button>

            <div className="form-container">
              <Form>
                <label htmlFor='quantity'></label>
                <input type="number" min="0" name="quantity" id="quantity" className="form-input" />
                <label htmlFor='size-select'></label>
                <select name="size-select" id="size-select">
                  { details.sizes.map(sizeValue => {
                    return (
                      // Normally wouln't use the value returned from array as the key
                      // but the size values options on each won't be changing, so it should be fine
                      // in this use case
                      <option value={sizeValue} key={sizeValue} className="text-sm">{sizeValue.toUpperCase()}</option>
                    )
                  })}
                </select>
                <button type="submit">Add to Cart</button>
              </Form>


              {/* <form>
              <label htmlFor='quantity'></label>
                <input type="number" min="0" name="quantity" id="quantity" className="form-input" />
                <label htmlFor='size-select'></label>
                <select name="size-select" id="size-select">
                  { details.sizes.map(sizeValue => {
                    return (
                      // Normally wouln't use the value returned from array as the key
                      // but the size values options on each won't be changing, so it should be fine
                      // in this use case
                      <option value={sizeValue} key={sizeValue} className="text-sm">{sizeValue.toUpperCase()}</option>
                    )
                  })}
                </select>
                <button type="submit" onClick={() => testCartAdd({...details})}>Add to Cart</button>
              </form> */}
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      { getDetails() }
    </div>
  )
}