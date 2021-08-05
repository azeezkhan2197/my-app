import React,{ Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxilary";

class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <Burger/>
            </Aux>
        )
    }   
}

export default BurgerBuilder