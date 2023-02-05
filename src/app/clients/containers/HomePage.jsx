import React, { Component } from "react"

export default class HomePage extends Component {
    constructor(props){
    super(props)
    
    }

    render() {
    return(
        <>

        {/* main body */}
            <div className="p-2 bg-gray-500 text-center">
                <h1 className="p-2 text-center">GTDs allin ONE PLACE</h1>
                <div className="relative flex justify-center">
                    <img className="p-2 aspect-video w-8/12 object-center object-cover border rounded-xl m-auto" src="./logo512.png" alt="fillthis" />
                    <p className="p-2 absolute bottom-0 h-[50px] w-8/12 bg-gray-300">GTDs implemented in Deep</p>
                </div>
            </div>


        </>
    )
}
}
