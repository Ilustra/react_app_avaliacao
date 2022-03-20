import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Icon from '../component/icon';

import { BoxRow, Card, Surface, Text, Title } from '../component/styleds';
import { Repo } from '../model/Repo';
import { User } from '../model/User';


class Props {

}
function DetalhesProfile(props) {

  const {  id } = useParams();
  
  //const view = new GitService()
  const [user, setUser] = useState<User>()
  const [repos, setRepos] = useState([])
  useEffect(() => {
    /*getUser(id)
    view.getRepos(id).then(response => {
      const { data } = response;
      setRepos(data)

    }).catch(error => {
      console.log(error)
    })*/
  }, [])
  const getUser = (e: string) => {
    /*view.get(e).then((response) => {
      setUser(response.data)
    }).catch(error => {
      console.log(error)
    })*/
  }
  const RenderList = (element: Repo, index) => {
    return (
      <div style={{ width: '100%' }} key={index} className='bg-white   m-2 shadow-md p-2 flex flex-col justify-between rounded-md'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col w-full'>
            <Title>  {element.name}</Title>
            <div className='flex flex-row justify-between w-full'>
              <div>
              <Text className='ml-5'> {element.watchers_count} watchers </Text>
              <Text className='ml-5'>{element.forks} forks </Text>
              <Text className='ml-5 flex flex-row items-center'>{element.stargazers_count}  <Icon className=''>star</Icon></Text>
              </div>

      
              <div className='bg-slate-400 rounded-md text-white flex flex-row p-1 w-96 h-12 '>
                <Icon>assignment</Icon>
                <Text className='bg-'>{element.clone_url}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} className='bg-slate-100 w-screen h-screen p-0 m-0 flex flex-row'>
      <div style={{ width: '20vw', height: '100vh' }} className='w-64 h-full bg-white'>
        {user &&
          <Card className=' p-2 m-5 rounded-md shadow-md h-full justify-between flex flex-col'>
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
        {repos ? repos.map((elment, index) => {
          return RenderList(elment, index)
        }) : null}
      </div>
    </div>
  );
}

export default DetalhesProfile;
function useRouter(): { query: any; } {
  throw new Error('Function not implemented.');
}

