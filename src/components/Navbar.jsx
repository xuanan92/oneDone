import React from 'react'
import MainPrimary from '../containers/MainPrimary.jsx'
import MainSecondary from '../containers/MainSecondary.jsx'


export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className='bg-[#123456] float-start w-[250px] min-h-[100vh] text-white'>
          <h2 className='p-2'>oneDone</h2>
            <hr />
          <h3 className='pl-4 p-2'>Actions</h3>
          <ul className='pl-4 p-2'>
              {/* click on this will create a filtered list from all teasks */}
            <li className='p-2'>Inbox</li>
            <li className='p-2'>Next</li>
            <li className='p-2'>Waitfor</li>
            <li className='p-2'>Scheduled</li>
            <li className='p-2'>Someday</li>
            <li className='p-2'>Focus</li>
          </ul>
            <hr />
          <h3 className='pl-4 p-2'>Projects</h3>
            <hr />
          <h3 className='pl-4 p-2'>Notebooks</h3>
            <hr />
          <h3 className='pl-4 p-2'>Cleanup</h3>
        </div>
          <div className='flex flex-col'>
              <div className='bg-[#777777] w-[calc(100vw-250px)] h-[40px]'>
                  <ul className='inline-flex pl-4 space-x-2 justify-center'>
                    <li className='p-2'>development</li>
                    <li className='p-2'>family</li>
                    <li className='p-2'>coder</li>
                    <li className='p-2'>roxo</li>
                    <li className='p-2'>finance</li>
                    <li className='p-2'>spiritual</li>
                    <li className='p-2'>entertainment</li>
                  </ul>
              </div>
              {/*Main part which is changable*/}
              <div className='main flex h-[calc(100vh-80px)]'>
                  {/* main primary part for task interactions */}
                  <div className ='main-primary p-2 w-[calc(100%-300px)]'>
                      <MainPrimary />
                  </div>
                  {/* main secondary for detail info of task */}
                  <div className ='p-2 main-secondary bg-gray-200 w-[300px]'>
                      <MainSecondary />
                  </div>
              </div>
             <div className='bg-[#777777] w-[calc(100vw-250px)] h-[40px]'>
                 <ul className='inline-flex space-x-4 justify-center'>
                      <li className='p-2'>Jump to context: </li>
                      <li className='p-2'>errand</li>
                      <li className='p-2'>phone</li>
                      <li className='p-2'>read</li>
                      <li className='p-2'>laptop</li>
                      <li className='p-2'>office</li>
                      <li className='p-2'>227nxq</li>
                  </ul>
                  <div className='float-right'>
                      <p className='p-2'>Weekly Wizzard</p>
                  </div>
              </div>

          </div>
      </>
    )
  }

}
