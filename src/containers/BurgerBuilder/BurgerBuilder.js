import React,{ Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxilary";

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 1,
            cheese : 2,
            meat: 2
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        )
    }   
}

export default BurgerBuilder