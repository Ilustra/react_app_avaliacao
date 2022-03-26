import { setuid } from "process";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../model/User";
import Icon from "./icon";
import { Surface, Card, Title, BoxRow, Text, Transition } from "./styleds";

class PropsProfile{
  onClick: () => void;
  value: any
}
const CardProfile = ({onClick, value, ...props}:PropsProfile) => {


  return (
    <>
    {value && 
    <div className='absolute top-0 w-full justify-center flex card-profile '>
      <Card className=' p-2 w-96 rounded-md shadow-md bg-white   flex flex-col' >
        <div className='flex flex-row justify-between w-ful'>
          <div></div>
        <button className='bg-primary rounded-md p-1 ml-1' onClick={onClick}><Icon className="text-sm">clear</Icon></button>
        </div>
        <div className='flex flex-row items-center '>
          <div className='w-24'>
            <img className='flex inline-block h-20 w-20 rounded-full ring-2 ring-white' src={value.avatar_url} />
          </div>
          <div className='ml-3'>
            <Text>{value.email}</Text>
            <Title className=' text-xl'>{value.name}</Title>
            <BoxRow className='flex flex-row'>
              <Text className='items-center flex'>  {value.following} Following</Text>
              <Text className='items-center flex ml-5'>  {value.followers} Followers</Text>
              
              <Link to={`/detalhes/${value.login}`}>
                <button className='bg-primary border rounded-md p-2 ml-3'>+detalhes</button>
              </Link>
             

            
            </BoxRow>
          </div>
        </div>  
      </Card>

    </div>
    }
      
     
      
    </>
  );
}

export default CardProfile;