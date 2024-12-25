import React, { useState } from "react";

const AddRoom = () => {
    const[newRoom, setNewRoom] = useState({

        photo : null,
        roomType : "",
        roomPrice : ""
    })

    const[imagePreview, setImagePreview] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[erroressages, setErroressages] = useState("")

    const handleRoomInputChange = (e) =>{

        const name = e.target.name
        let value = e.target.value 
        if(name === "roomPrice"){
            if(!isNaN(value))
                value.parseInt(value)
            
        }else{
            value =""
        }
    }
    return(

        <div>



        </div>


    )
}

export default AddRoom