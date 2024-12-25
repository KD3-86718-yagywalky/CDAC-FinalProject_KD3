import axios from "axios"

export const api = axios.create({
    baseURL : "http://localhost:5050"
})

/* for add a new room in database*/
export async function AddRoom(photo, roomType, roomPrice) {
    
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomPrice)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)

    if(response.status === 201){
        return true
        }
        else{
            return false
        }
}
/*for room type*/ 
export async function getRoomTypes() {

    try{
        const response = await AudioParam.get("/rooms/room-types")
        return response.data
    }
    catch(error){
            throw new Error("Error fetching room types")
    }
}