// Action Creator
export const selectPlayer = (player)=>
{
    //return an action
    return{
        type:'PLAYER_SELECTED',
        payload :player
    }

}