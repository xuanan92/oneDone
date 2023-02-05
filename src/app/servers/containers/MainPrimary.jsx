import {React, Component} from 'react'

export default class MainPrimary extends Component{
    constructor(props){
        super(props);
	    this.state = {
		    tasks: [],
		    input: '',
	    }
	    this.handleChange = this.handleChange.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
	    this.setState({
		    input: e.target.value,
	    })
    }
    handleSubmit(event){
	    event.preventDefault();
	    const task = {
		    name: this.state.input,
		    tag:['abc', 'xyz']
	    };
	    this.setState({
		    tasks: [...this.state.tasks, task],
		    input: '',
	    })
    }


  render(){
    return(
      <div className='w-full'>
        {/*need to enable scroll this div*/}
        {/* this is item place to show */}
          <form onSubmit={this.handleSubmit}>
              <input type='text' className='w-full border shadow p-2' onChange={this.handleChange} value={this.state.input} autoFocus/>
          </form>

          <hr />

          {/* query to list all item */}
        <p>Items</p>
        <ul className='p-2 space-y-1' style={{listStyle:'none'}} >
	    {this.state.tasks.map((item, index) => (
		    <li className='p-2 border rounded-xl shadow-xl flex-row flex' key={index}>
			    <input type='checkbox' className='p-2' />
			    <p className = 'p-2'>{item.name}</p>
		    </li>
	    ))
	    }
        </ul>
    </div>
    )
  }
}
