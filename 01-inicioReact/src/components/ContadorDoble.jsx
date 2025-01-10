import { useState } from "react"

const ContadorDoble = () => {
    //hooks
    const [friends, setFriends] = useState({
        Juan:0,
        Carlos:0,
        Maria:0
    });

    //variables
    
    //funciones
    function handlerClickLike(nombre, likes) {
            setFriends((preValue)=> {
                if(preValue[nombre] + likes < 0){
                    return preValue
                }

                return {...preValue, [nombre]: preValue[nombre] + likes} 
            })
        
    }

    function calcularMedia() {
        const likes = Object.values(friends);

        if(likes.length){ 
        const mediaLikes = likes.reduce((totalLikes, likes)=> totalLikes + likes) / likes.length;
        return Math.round(mediaLikes)
        }
    }

    return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
        <h1 className="text-2xl font-bold mb-5 text-center">
            Contador de likes de mis amigos
        </h1>

        <div className="text-center mt-4">
            <span>
                Juan tiene<strong> {friends.Juan} </strong>likes
            </span>
            <div className="mt-2 flex justify-center gap-4"> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Juan", 1)}>
                    Like
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Juan", -1)}>
                    Dislike
                </button>
            </div>

            <span>
                Maria tiene<strong> {friends.Maria} </strong>likes
            </span>
            <div className="mt-2 flex justify-center gap-4"> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Maria", 1)}>
                    Like
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Maria", -1)}>
                    Dislike
                </button>
            </div>
            <span>
                Carlos tiene<strong> {friends.Carlos} </strong>likes
            </span>
            <div className="mt-2 flex justify-center gap-4"> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Carlos", 1)}>
                    Like
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md" 
                        onClick={()=> handlerClickLike("Carlos", -1)}>
                    Dislike
                </button>
            </div>
            <p className="mt-2 flex justify-center gap-4">La media de likes de mis amigo es: <strong>{calcularMedia()}</strong></p>
        </div>
    </div>
    )
}

export default ContadorDoble