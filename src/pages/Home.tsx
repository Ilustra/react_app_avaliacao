import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CardProfile from '../component/CardProfile';

import Icon from '../component/icon';
import { BoxRow, Card, Surface, Title, Text, Grid } from '../component/styleds';
import { User } from '../model/User';
import { CrudService } from '../model/utils/CurdService';
import { View } from '../model/utils/View';
import { GitService } from '../service/GitService';
class Home extends View<User, string>{

  constructor(
    public props,
  ) {
    super(props, new GitService(props))
    this.state = {
      data: null
    }

  }

  onChangeName = async (e: any) => { }

  onGetBy = async (e: any) => this.getbyuser(e.target.value)

  carrousel = (data, index) => {
    return (
      <div>
        <img className=' h-20 w-20 rounded-full  ring-white' src={data[index].avatar_url} />
      </div>
    )
  }

  RenderAvatar = (data) => {
    const list = data.map((element, index) => {
      return (
        <Link to={`/detalhes/${element.login}`} key={index}>
          <div className='relative w-full overflow-hidden opacity-10 hover:opacity-100 items-center' >
            <img className=' h-25 w-25 rounded-full  ring-white hover:shadow-xl' src={element.avatar_url} />
            <p>{element.login}</p>
          </div>
        </Link>
      )
    })
    return list
  }

  render() {
    const { data } = this.state
    return (
      <>
        {this.state.statusRequest && <div className={' ' + this.state.statusRequest ? ' progress ' : ' hidden '}></div>}

        <Surface className="flex justify-center items-center flex-col relative">

          <header></header>
          <div className='grid grid-rows-4 grid-flow-col gap-4 fixed top-0 '>
              {this.state.list && this.RenderAvatar(this.state.list)}
            </div>
            
          <main className='w-full h-auto flex items-center  flex-col relative  '>
      
            <div className=' relative w-full justify-center flex '>
            <Title style={{ fontSize: 402, fontFamily: 'Inspiration' }} 
                    className='  text-xl font-mono text-gray-700 Inspiration '>Welcome</Title>
            </div>


            <div className='relative w-full flex flex-col items-center justify-center  '>
              <div  className=' flex items-center relative w-96 '>
                <input placeholder='digite o nome do usuário do github' className='p-5 rounded-md shadow-md w-full z-10' onKeyPress={(e: any) => {
                  if (e.key === "Enter")
                    this.onGetBy(e)
                }} onChange={(this.onChangeName)} />
                <button onClick={() => { }} className='absolute right-0 mr-2 mt-2 z-10'><Icon>search</Icon></button>
              </div>
              <div className='relative  w-full'>
              <CardProfile value={this.state.data} onClick={()=>{ this.setState({data: null})}} />
              </div>
  
            </div>
          </main>
        </Surface>

        <div className='absolute bottom-0 '>
          {this.state.error}
        </div>
      </>

    )
  }

}

export default Home;
