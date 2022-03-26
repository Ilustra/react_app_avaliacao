import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Icon from '../component/icon';

import { BoxRow, Card, Input, Bottom, Text, Title } from '../component/styleds';
import { Repo } from '../model/Repo';
import { User } from '../model/User';
import { GitService } from '../service/GitService';



class Props {

}
function DetalhesProfile(props) {

  const {  id } = useParams();
  const view = new GitService(props)
  const [user, setUser] = useState<User>()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    
    getUser(id)
    view.getRepos(id).then(response => {
      const { data } = response;
      console.log(data)
      setRepos(data)

    }).catch(error => {
      console.log(error)
    })
  }, [])
  const getUser = (e: string) => {
    view.getById(e).then((response) => {
      setUser(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
  const RenderList = (element: Repo, index) => {
    return (
      <div className='flex flex-row justify-between items-center m-2 test-repo'>
        <div className=' w-96'>
        <Title>{element.name}</Title>

        <div className='flex flex-row'>
        <Text className='ml-5'>{element.language}</Text>
        <Text className='ml-5'>{element.updated_at}</Text>
        </div>

        </div>
        
        <div className='border w-96 bg-gray-200 p-2 rounded-md flex flex-row justify-between'>
          <div className='relative w-96'>
          <Text>{element.clone_url}</Text>
          </div>

        <Icon>content_paste</Icon>
        </div>

        <div className=' w-48'>
           star: {element.stargazers_count}  
        </div> 
      </div>
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} className='bg-slate-100 w-screen h-screen p-0 m-0 flex flex-row'>
      <div style={{ width: '20vw', height: '100vh' }} className='w-64 h-full bg-white'>
        {user &&
          <Card >
            <div className='justify-center items-center flex flex-col w-full '>
              <img className='flex inline-block h-20 w-20 rounded-full ring-2 ring-white' src={user.avatar_url} />
              <div className='flex flex-col w-auto justify-center'>
                <Text>{user.email}</Text>
                <Title className='text-center text-xl'>{user.name}</Title>
              </div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center'>
              <BoxRow className='flex flex-row'>
                <Text className='items-center flex'>  {user.following} Following</Text>
                <Text className='items-center flex ml-5'>  {user.followers} Followers</Text>
              </BoxRow>

            </div>
            <div className="bg-gray-100 w-full p-2  rounded-md">
              <Text>{user.bio}</Text>
            </div>
            <BoxRow>
              <Icon>assignment</Icon>
              <a>{user.url}</a>
            </BoxRow>

            <div>
            <a>{user.url}</a>
              <Text>Repositories  {user.public_repos}</Text>
              <Text>Desde de: {user.created_at}</Text>
              <Text>Última Atualização: {user.updated_at}</Text>
            </div>
          </Card>
        }
      </div>
     
      <div style={{ width: '80vw', height: '100vh', }} className=' h-full p-0 m-0 overflow-y-auto overflow-x-hidden p-5'>
        <div className='w-full p-2 flex flex-row' >
        <Input placeholder='Filtrar ' />
        
        </div>  
       {repos.map((element, index)=>{
          return RenderList(element, index)
       })}
      </div>
    </div>
  );
}

export default DetalhesProfile;
function useRouter(): { query: any; } {
  throw new Error('Function not implemented.');
}

