

import Image from 'next/image'
import Slider from '../components/slider/Slider'
import Navbar from '../components/navbar/navbar'
import Products from '../components/products/products'
// import './index.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import ServiceBox from '../components/service/service-section';
export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Slider></Slider>
        <ServiceBox />
        <Products></Products>
    </>
  )
}
