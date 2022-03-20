import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../component/homepage';
import Icon from '../component/icon';
import { BoxRow, Card, Surface, Title, Text } from '../component/styleds';
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
  onGetBy = async (e: any) =>  this.getbyuser(e.target.value)
  
  carrousel = (data, index) => {
    console.log(index)

    return(
      <div>
          <img className=' h-20 w-20 rounded-full  ring-white' src={data[index].avatar_url} />

      </div>
    )
  }
  next = (index)=>{

  }
  back = (index)=>{

  }
  render() {
    const { data } = this.state
    return (
      <Surface className="flex justify-center items-center flex-col border">
         <div id="modal"></div>
        <div></div>
        <div id='#modal' className='w-full flex items-center flex-col'>
          <Title className='text-xl font-mono text-gray-700'>Welcome</Title>
          <div style={{ width: '60%' }} className='relative w-auto flex items-center w-full '>
            <input placeholder='digite o nome do usuário' className='p-5 rounded-md shadow-md w-full' onKeyPress={(e:any )=>{ 
              if(e.key === "Enter")
                   this.onGetBy(e)
              }} onChange={(this.onChangeName)} />
            <button onClick={()=> {}} className='absolute right-0 mr-2 mt-2'><Icon>search</Icon></button>
          </div>
        </div>
        <div style={{width:'100%', overflow:'scroll'}} className='border'>
        <button>
        next
        </button>
        {this.state.data && this.carrousel(this.state.data, this.state.data.length / 2)}
        <div className='flex flex-row'>
              {this.state.data && this.state.data.map((element, index)=>{
                return (
                  <div className='carousel-inner relative w-full overflow-hidden'>
                  <img className=' h-20 w-20 rounded-full  ring-white' src={element.avatar_url} />

                  </div>
                  
                )
              })}
        </div>
        </div>


        <HomePage value={this.state.data} />
      </Surface>
    )
  }

}

export default Home;
