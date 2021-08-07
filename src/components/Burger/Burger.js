import React from 'react';
import cssSelector from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+i} type={igKey}/>;
            })
        }).reduce((arr,ell)=>{
            return arr.concat(ell);
        },[]);
    console.log(transformedIngredients);
    if(transformedIngredients.length===0){
        transformedIngredients = <p>Please select the ingredient</p>
    }
    return (
        <div className={cssSelector.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;