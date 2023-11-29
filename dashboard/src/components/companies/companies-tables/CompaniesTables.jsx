import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SmallCard from '../../UI-kits/cards/SmallCard'
import EmptyTable from '../../UI-kits/tables/EmptyTable'
import SecondHeader from '../../typography/SecondHeader'
import { getAllCompanies, selectCompanies } from '../../../features/companies/companiesSlice'
import CompaniesActionTable from './CompaniesActionTable'
import Lottie from 'lottie-react'
import vector from "../../../assets/vector.webp"
import notFoundDataAnimation from "../../../assets/notFoundData.json"
import { bannedCompaniesActionTableHeader, companiesActionTableHeader, deletedCompaniesActionTableHeader } from '../../../utils/config'
import { toast } from 'react-toastify'
import BannedCompaniesActionTable from './BannedCompaniesActionTable'
import DeletedCompaniesActionTable from './DeletedCompaniesActionTable'
import SkeletonTable from '../skeleton/SkeletonTable'

const CompaniesTables = () => {
  const {
    companies :{
                  all: allCompanies, 
                  banned: bannedCompanies, 
                  deleted: deletedCompanies
                },
    isLoading, isSuccess, isError, message
  } = useSelector(selectCompanies);
  const dispatch = useDispatch();
  const [data, setData]= useState([]);
  const [bannedCompaniesData, setBannedCompaniesData]= useState([]);
  const [deletedCompaniesData, setDeletedCompaniesData]= useState([]);

  const [tableConfig, setTableConfig] = useState({
    head: companiesActionTableHeader,
    data: data
  });
console.log("rendered");
  useEffect(()=>{
      
    if(!isLoading && !isSuccess && !isError){
      dispatch(getAllCompanies());
    }

    if(isError && !!message){
      toast.error(message);
    }
    console.log("error: ", isError, "message: ", message)
    if(isSuccess && !!allCompanies.length){
      console.log("isSuccess: "+ isSuccess, "   companies: "+ allCompanies);
      // console.log("*".repeat(20));
      // console.log("users", users);
      setData(prev => {
        return allCompanies.map((company)=> {
          return {
            company: {
              id: company._id,
              vector,
              companyName: company.companyName
            },
            country: "Egypt",
            usage: "50%",
          }
        });
      });
      
    }
    
  }, [allCompanies, isLoading, isSuccess, isError, message])

  useEffect(()=>{
    setBannedCompaniesData(prev => {
      return bannedCompanies.map((company)=> {
        return {
          company: {
            id: company.companyId._id,
            vector,
            companyName: company.companyId.companyName,
          },
          country: "Saudi",
          period: company.period
        }
      });
    });
  }, [bannedCompanies]);
  
  useEffect(()=>{

    setDeletedCompaniesData(prev => {
      return deletedCompanies.map((company)=> {
        return {
          company: {
            id: company.companyId._id,
            vector,
            companyName: company.companyId.companyName
          },
          country: "Egypt",
        }
      });
    });
  }, [deletedCompanies]);

  useEffect(()=>{
    setTableConfig(prev => {
      return {...prev, data: [...data]}
    })
  }, [data]);

  return (
    <div className='flex-1 grid gap-8'>
        {
          (!!!allCompanies.length && !isLoading && isSuccess)?
            <div className='h-full flex flex-col'>
              <span className="block text-center text-3xl text-slate-400">There are not companies yet.</span>
              <Lottie animationData={notFoundDataAnimation} loop={true} style={{maxHeight: "525px"}} />
            </div>
          :
            <>
              <div className="grid gap-5"  style={{gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gridTemplateRows: "repeat(auto-fit, minmax(100px, 120px))"}}>
                <div className='row-start-1 row-span-4 col-start-1 col-span-full xl:col-span-6 bg-white py-4 px-7 rounded-2xl shadow-lg'>
                  <SecondHeader text={"All Companies"} />
                  {
                    (isLoading && !isSuccess && !isError) &&
                    <SkeletonTable tableConfig={{head: companiesActionTableHeader}} />
                  }
                  {
                    (!!allCompanies.length && !isLoading && isSuccess) &&
                    <CompaniesActionTable tableConfig={tableConfig}  />
                  }
                </div>
              </div>
              <div className="grid grid-cols-6 gap-8 h-fit"  style={{gridTemplateRows: "repeat(auto-fit, minmax(100px, 120px))"}}>
                <div className='row-start-auto row-span-3 col-start-1 col-span-full lg:col-span-3 lg:row-start-2 bg-white p-8 rounded-2xl shadow-lg'>
                  <SecondHeader text={"Banned Companies"} />
                  {
                    (isLoading && !isSuccess && !isError) &&
                    <SkeletonTable tableConfig={{head: bannedCompaniesActionTableHeader}} />
                  }
                  {
                    (!!bannedCompanies.length && !isLoading && isSuccess)?
                      <BannedCompaniesActionTable tableConfig={{head: bannedCompaniesActionTableHeader, data: bannedCompaniesData}} />
                    :
                      <EmptyTable tableConfig={{head: bannedCompaniesActionTableHeader}}/>
                  }        
                </div>
                
                <div className='row-start-auto row-span-3 col-start-1 lg:col-start-4 col-span-full lg:col-span-3 lg:row-start-2 bg-white p-8 rounded-2xl shadow-lg'>
                  <SecondHeader text={"Deleted Companies"} />
                  {
                    (isLoading && !isSuccess && !isError) &&
                    <SkeletonTable tableConfig={{head: deletedCompaniesActionTableHeader}} />
                  }
                  {
                    (!!deletedCompanies.length && !isLoading && isSuccess)?
                      <DeletedCompaniesActionTable tableConfig={{head: deletedCompaniesActionTableHeader, data: deletedCompaniesData}} />
                    :
                      <EmptyTable tableConfig={{head: deletedCompaniesActionTableHeader}}/>
                  }
                </div>
              </div>        
            </>
        }
    </div>
  )
}

export default CompaniesTables