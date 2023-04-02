import React, { Component } from "react"

export default class HomePage extends Component {
  // constructor(props){
  // super(props)
  // 
  // }

  render() {
    return (
      <>

        {/* main body */}
        <div className="p-2 bg-[var(--foregr)] text-center">
          <div className="h-8 " name="break" />
          <h1 className="p-2 text-center">FULL GTDs</h1>
          <div className="relative flex justify-center">
            {/* <img className="p-2 aspect-video w-8/12 object-center object-cover border rounded-xl m-auto" src="./logo512.png" alt="fillthis" /> */}
            <iframe className="p-2 aspect-video w-8/12 m-auto" src="https://youtube.com/embed/DRE54JVEJqY" title="GTDs intro" frameborder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowFullScreen />
            <p className="p-2 absolute bottom-0 h-[50px] w-8/12 bg-gray-300">GTDs implemented in Deep</p>
          </div>
          <div className="h-8 " name="break" />

        </div>
      </>
    )
  }
}
