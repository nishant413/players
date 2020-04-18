import React from 'react'
import {connect} from 'react-redux'
import {selectPlayer} from '../actions'

class PlayerList extends React.Component{
    renderList(){
        return this.props.players.map((player)=>{
            return(
            <div className="item" key={player.playerName}>
                <div className = "right floated content">
                    <button className="ui button primary" onClick={()=>this.props.selectPlayer(player)}>Select</button>
                </div>
            <div className="content">{player.playerName}</div>
            </div>)
        })
    }
    
    render()
    {
      return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    //state contains all the redux data or in the reducers
    console.log('!@#!@#!@#123',state)
return {players:state.players}
//now can be used as this.props === state.players in our react application 

}


//here selectedPlayer is an action
export default connect(mapStateToProps,{selectPlayer:selectPlayer})(PlayerList)