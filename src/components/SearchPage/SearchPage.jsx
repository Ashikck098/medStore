import React, { useEffect, useState } from 'react'
import "./SearchPage.css"
import Header from '../Header/Header'
import SearchBody from './SearchBody'
import { useParams } from 'react-router-dom'
import axiosApi from '../../AxiosMethod'

const SearchPage = () => {
    const [results, setResults] = useState();
 const params = useParams();

 const encodedData = params?.data;
 const decodedData = atob(encodedData);

  useEffect(()=> {
    axiosApi.post("/searchproducts", {search:decodedData}).then((response)=>{
        console.log(response.data);
        setResults(response.data);
      });
  },[decodedData]);

  return (
    <div className='searchPage_main'>
         <Header decodedData={decodedData}/>
         <SearchBody results={results}/>
    </div>
  )
}

export default SearchPage

