import {combineReducers} from 'redux'

const playersReducer = ()=>
{
    return [
        {playerName:"Nishant Bhardwaj",skill:"Batsman"},
        {playerName:"Himanshu Choudhary",skill:"Bowler"},
        {playerName:"Nimesh Khandelwal",skill:"Keeper"}, 
        {playerName:"Shubhanshu Agarwal",skill:"All-rounder"},
        {playerName:"Yash Jindal",skill:"Captain"}

    ]
}

const selectedPlayerReducer = (selectedPlayer = null,action)=>{
    if(action.type === 'PLAYER_SELECTED')
    {
        return action.payload
    }
    return selectedPlayer
}

export default combineReducers({
    players:playersReducer,
    selectedPlayer:selectedPlayerReducer
})