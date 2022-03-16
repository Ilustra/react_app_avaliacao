import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../component/icon';
import { GitService } from '../component/service/GitService';
import { BoxRow, Card, Surface, Title, Text } from '../component/styleds';
import { User } from '../model/User';




const Home = () => {

  const [name, setname] = useState<string>('');
  const [user, setUser] = useState<User>()

  const onChangeName = (e: any) => {
    setname(e.target.value)
  }
  const view = new GitService()
  const getUser = (e: any) => {
    console.log(e)
    if (e.code === 'Enter' || e.type==='click')
      view.get(name).then((response) => {

        console.log('response', response.data)
        setUser(response.data)
      }).catch(error => {
        console.log(error)
      })

  }

  return (
    <Surface className="flex justify-center items-center flex-col border">
      <div></div>
      <div className='w-full flex items-center flex-col'>
        <Title className='text-xl font-mono text-gray-700'>Welcome</Title>
        <div style={{ width: '60%' }} className='relative w-auto flex items-center w-full '>
          <input placeholder='digite o nome do usuário' className='p-5 rounded-md shadow-md w-full' onKeyPress={getUser} onChange={onChangeName} />
          <button onClick={getUser} className='absolute right-0 mr-2 mt-2'><Icon>search</Icon></button>
        </div>
      </div>

      {user &&
        <Card className='absolute bottom-0 p-2 w-96 m-5 rounded-md shadow-md h-96 justify-between flex flex-col'>
          <BoxRow className='flex flex-row justify-between'>
            <div></div>

            <button onClick={() => setUser(null)}><Icon>clear</Icon></button>
          </BoxRow>



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

            <Link to={`/detalhes/${user.login}`} >
              <button>+detalhes</button>
            </Link>

          </div>
          <div className="bg-gray-100 w-full p-2  rounded-md">
            <Text>{user.bio}</Text>
          </div>
          <BoxRow>
            <Icon>assignment</Icon>
            <a>{user.url}</a>
          </BoxRow>

          <div>
            <Text>Repositories  {user.public_repos}</Text>
            <Text>Desde de: {user.created_at}</Text>
            <Text>Última Atualização: {user.updated_at}</Text>
          </div>
        </Card>
      }

    </Surface>
  );
}

export default Home;
