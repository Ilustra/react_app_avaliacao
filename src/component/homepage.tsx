import { setuid } from "process";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../model/User";
import Icon from "./icon";
import { Surface, Card, Title, BoxRow, Text, Transition } from "./styleds";


const HomePage = (props) => {

  let { value } = props

  const [name, setname] = useState<string>('');
  const [user, setUser] = useState(value)

  if(value == null)
    value = {}
  return (
    <>
      <div className='absolute bottom-0'>
      <Transition
        
      >
        <Card className='bottom-0 p-2 w-96 m-5 rounded-md shadow-md   flex flex-col'
          style={{

          }}
        >
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


          {/*
          <div className='justify-center items-center flex flex-col w-full realtive  '>
            <div className='absolute top-0 h-20 w-full bg-gray-100 z-0'></div>
            <BoxRow className='flex flex-row justify-between w-full'>
              <div></div>
              <button onClick={() => setUser(null)}><Icon>clear</Icon></button>
            </BoxRow>
            <img className='flex inline-block h-20 w-20 rounded-full ring-2 ring-white' src={value.avatar_url} />
            <div className='flex flex-col w-auto justify-center'>
              <Text>{value.email}</Text>
              <Title className='text-center text-xl'>{value.name}</Title>
            </div>
          </div>
          <div className='flex flex-row justify-between p-2 items-center'>
            <BoxRow className='flex flex-row'>
              <Text className='items-center flex'>  {value.following} Following</Text>
              <Text className='items-center flex ml-5'>  {value.followers} Followers</Text>
            </BoxRow>

            <Link to={`/detalhes/${value.login}`}>
              <button>+detalhes</button>
            </Link>

          </div>
          <div className="bg-gray-100 w-full p-2  rounded-md">
            <Text>{value.bio}</Text>
          </div>
             */}
        </Card>
        </Transition>
      </div>
     
      
    </>
  );
}

export default HomePage;