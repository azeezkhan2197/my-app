import React,{ Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxilary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            cheese : 1,
            meat: 1,
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls></BuildControls>
            </Aux>
        )
    }   
}

export default BurgerBuilder