import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../component/homepage';
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

  onChangeName = async (e: any) => {
    //  console.log(e.target.value)
  }
  onGetBy = async (e: any) => this.getbyuser(e.target.value)

  carrousel = (data, index) => {
  

    return (
      <div>
        <img className=' h-20 w-20 rounded-full  ring-white' src={data[index].avatar_url} />

      </div>
    )
  }
  next = (index) => {

  }
  RenderAvatar =  (data) => {
    const list =   data.map( (element, index)  => {
       return (
        <div className='relative w-full overflow-hidden opacity-10 hover:opacity-100 items-center' >
          <img className=' h-25 w-25 rounded-full  ring-white hover:shadow-xl' src={element.avatar_url} />
          <p>{element.login}</p>
        </div>

      )
    })
    return list
  }

  render() {
    const { data } = this.state
    return (
      <Surface className="flex justify-center items-center flex-col border relative">

        <header></header>
    
        <main className='w-full flex items-center justify-between flex-col relative  h-64 '>
          
          <Title style={{fontSize: 202, fontFamily:'Inspiration'}} className=' z-10 text-xl font-mono text-gray-700 Inspiration'>Welcome</Title>
          <div style={{ width: '60%' }} className='relative w-auto flex items-center w-full'>
            <input placeholder='digite o nome do usuário do github' className='p-5 rounded-md shadow-md w-full z-10' onKeyPress={(e: any) => {
              if (e.key === "Enter")
                this.onGetBy(e)
            }} onChange={(this.onChangeName)} />
            <button onClick={() => { }} className='absolute right-0 mr-2 mt-2 z-10'><Icon>search</Icon></button>
          </div>
   
          <div className='grid grid-rows-4 grid-flow-col gap-4 fixed top-0 '>
            {this.state.list && this.RenderAvatar(this.state.list)}
          </div>
         
        </main>
        


      
       

      {this.state.data && <HomePage value={this.state.data} />} 
       
      </Surface>
    )
  }

}

export default Home;
