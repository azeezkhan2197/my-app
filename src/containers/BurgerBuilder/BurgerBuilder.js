import React,{ Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxilary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            cheese : 1,
            meat: 1,
        },
        totalPrice : 4
    }

    addIngredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice+priceAddition;
        this.setState({ingredients:updatedIngredient,totalPrice:newPrice});
    }


    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredient}>
                </BuildControls>
            </Aux>
        )
    }   
}

export default BurgerBuilder