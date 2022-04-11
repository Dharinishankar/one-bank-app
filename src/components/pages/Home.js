import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Landingoptions from '../Landingoptions';
import { useLocation,  useParams} from "react-router-dom";
function Home(){
  return(
    <>
    {/* tpopass param */}
    {/* const { search } = useLocation();
  const query = new URLSearchParams(search);
    const Id = query.get("Id")
    <h1>Welcome {Id.attributes.email}</h1> */}
     <Landingoptions/>
    </>
  
);
  }

export default Home;
