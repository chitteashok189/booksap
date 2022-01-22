import React from "react";
class Users extends React.Component{
    renderList=()=>{
        var list=this.props.updateList.map(data=>{
            return( <li>{data.name}&nbsp; &nbsp;{data.company}
        </li>

            )
       
        })
        return list;
    }
    render(){
        return(
            <div>
              
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
export default Users;