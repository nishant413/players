import React from 'react'
import {connect} from 'react-redux'

import PlayerList from './playerList'


//again using the data as props in the component
const  PlayerDetail =({player})=>{ 
    if(!player)
    {
       return(
           <div>Select a Player</div>
       )
    }
    return(
        <div>
            <h1>Player name : {player.playerName}</h1>
            <h2>Skill : {player.skill}</h2>
        </div>
    )
}
//brings all the data from redux to the react component
const mapStateToProps =(state)=>
{
    //state has all the redux data as of now
    console.log('Detailssssss',state.selectedPlayer)
    return{player:state.selectedPlayer}
}

// conenect the react component to redux store

export default connect(mapStateToProps)(PlayerDetail)