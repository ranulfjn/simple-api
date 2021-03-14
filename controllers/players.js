import { v4 as uuidv4 } from 'uuid';
let  players=[]

export const getUser=(req,res)=>{
    if (players== ''){
        res.send("No players")
    }else{
        res.send(players)
    }
    
}

export const createUser = (req,res)=>{
    const player = req.body;

    const playerId = uuidv4();
    //console.log(playerID)

    const playerWithId ={...player ,id:playerId}

    players.push(playerWithId)
    res.send(`${player.firstname} is added to the list` )
}

export const getUserId =(req,res)=>{
    const {id} = req.params;

    const found=players.find((player)=>player.id===id)
    res.send(found);

    if(found ==''){
        res.send("No player found");
    }
}


export const deleteUser =(req,res)=>{
    const {id} =req.params;

    players=players.filter((player)=>player.id != id)
    res.send("player deleted")
    
} 

export const updateUser= (req,res)=>{
    const { id } =req.params;
    const { firstname, lastname, age , country }=req.body;
    const playerUpdate = players.find((player)=>player.id===id)

    if(firstname){
        playerUpdate.firstname=firstname;
    }
    if(lastname){
        playerUpdate.lastname=lastname;
    }
    if(age){
        playerUpdate.age=age;
    }
    if(country){
        playerUpdate.country=country;
    }

    res.send("User updated");

}
