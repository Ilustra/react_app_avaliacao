import { Button } from '@mui/material';
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

  const { id } = useParams();
  const view = new GitService(props)
  const [user, setUser] = useState<User>()
  const [data, setData] = useState([])
  const [repos, setRepos] = useState([])
  const [filter, setFilter] = useState('')
  useEffect(() => {

    getUser(id)
    view.getRepos(id).then(response => {
      const { data } = response;
      setRepos(data)
      setData(data)
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
  function stringDate(value: any) {
    var days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabádo',
    ];
    var mounth = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    let date = new Date(value);
    let string_date =
      date.getUTCDate() +
      ' de ' +
      mounth[date.getMonth()] + " de " + date.getFullYear();
    return string_date;
  }

  const RenderList = (element: Repo, index: number, satus: number) => {
    const t = satus != -1 ? ` test-repo  ` : ' ease-in duration-100 ml-[-1000px] ';
    return (
      <Card className={'  ' + t}>
        <div className={'flex flex-row justify-between items-center m-2  ' + (satus != -1 ? '' : ' delay-[4s] hidden')}>
          <div className=' w-96 '>
            <Title className='m-2'>{element.name}</Title>
            <div className='flex flex-row'>
              <Text className='ml-5'>{element.language} </Text>
              <Text className='text-gray-400 ml-5'>Update: {stringDate(element.updated_at)}</Text>
            </div>
          </div>
          <div className='border w-96 bg-gray-200 p-2 rounded-md flex flex-row justify-between h-8 items-center'>
            <div className='relative w-96'>
              <Text> {element.clone_url}</Text>
            </div>
          </div>

          <Bottom type='button' className=' w-auto border items-center flex'>
            <Icon className='m-0 p-0 '>star</Icon>  {element.stargazers_count}
          </Bottom>
        </div>
      </Card>
    )
  }
  const footer = (user: any) => {
    return (
      <BoxRow style={{ height: '10vh' }} className='bg-gray-400 w-full justify-between items-center'>
        <div className=' p-2 grid grid-flow-row'>
          Bio:
          <div className="bg-white-200 w-full p-2  rounded-md">
            <Text>{user.bio}</Text>
          </div>
        </div>

        <div className=''>
          <Text>Repositories  {user.public_repos}</Text>
          <Text>Última Atualização: {stringDate(user.updated_at)}</Text>
        </div>
      </BoxRow>
    )

  }
  const header = (user: any) => {
    return (
      <Card style={{ height: 'auto' }} className='pt-5 text-gray-900 ' >
        <div>
          <div className='justify-center items-center flex flex-col w-full'>
            <img className='flex inline-block h-20 w-20 rounded-full ring-2 ring-white' src={user.avatar_url} />
            <div className='flex flex-col w-auto justify-center'>
              <Text>{user.email}</Text>
              <Title className='text-center text-xl'>{user.name}</Title>
            </div>
            <BoxRow className='flex flex-row  items-center justify-center'>
              <Text className='items-center flex'>  {user.following} Following</Text>
              <Text className='items-center flex ml-5'>  {user.followers} Followers</Text>
            </BoxRow>

            <BoxRow className='text-center justify-center '>
              <a href={user.html_url}>{user.html_url}</a>
              <Icon>
                open_in_new
              </Icon>
            </BoxRow>
          </div>
          
        </div>

        <div className='w-full flex flex-row pl-2 pr-2 mt-2' >
          <Input className='bg-gray-100' value={filter} placeholder='Filtrar projetos ' onChange={(e) => { setFilter(e.target.value) }} />
        </div>
      </Card>
    )
  }
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
      className='bg-slate-100 w-screen h-screen p-0 m-0 '>
      {user &&
        <>
          {header(user)}
          <div style={{ height: '65vh' }} className='h-96 overflow-y-auto'>
            {repos.map((element, index) => {
              return RenderList(element, index, element.name.indexOf(filter))
            })}

          </div>

        </>
      }
    </div>
  );
}

export default DetalhesProfile;


