<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { Image, ScrollView } from 'react-native';
import {AccordionList} from 'accordion-collapse-react-native';
import { CONST } from '../../config/const';
import Dish from '../../model/Dish';
import { addToCart } from '../../actions/CartActions';
import { moveToCart } from '../../actions/MenuActions';
import store from '../../store';
import {  View } from 'react-native';

const SectionNoodle = CONST.noodle;
const SectionRice = CONST.rice;
const SectionDrink = CONST.drinks;

class MenuDetail extends Component  {
    state = {
        activeCategory: CONST.activeCategories.noodle,
        activeSections:[]
    }

    renderSwitch(param:number) {
        switch(param) {
            case CONST.activeCategories.noodle:
                return SectionNoodle;
            case CONST.activeCategories.rice:
                return SectionRice;
            case CONST.activeCategories.drink:
                return SectionDrink;
            default:
                return SectionNoodle;
        }
      }

    activeSectionNoodle = () => {
        this.setState({
            activeCategory: CONST.activeCategories.noodle
        })
    }

    activeSectionRice = () => {
        this.setState({
            activeCategory: CONST.activeCategories.rice
        })
    }

    activeSectionDrink = () => {
        this.setState({
            activeCategory: CONST.activeCategories.drink
        })
    }

    renderSectionTitle = () => {
        return (
            <Text >Some Title</Text>
        )
    }

    _renderSectionHeader(section:Dish){
        let src;
        // Initiate all images by detecting image name
        switch(section.imageName) {
            case "1.png":
                src = require('../../assets/1.png')
            default:
                src = require('../../assets/1.png')
        }
         
        return (
            <View style={{display:"flex", flexDirection:"row",justifyContent:"center", 
                marginTop:10, alignItems:"center"}}>
                <Image 
                    source={src}
                    style={{ width: 40, height: 40, }} />
                <Text>{section.dishName}, Price: ${section.price}</Text>
            </View>
        )
    }

    _renderSectionContent(section:Dish){
        let addToCartClick = (dish:Dish, taste:string) => {
            let newDish = new Dish(dish.dishName, dish.detail, dish.elements, dish.imageName, dish.videoName!, dish.price, [taste]);
            store.dispatch(addToCart(newDish));
        }

        return (
            <Container style={{maxHeight:180, justifyContent:"flex-start"}} marginTop="1%" marginBottom="0">
                <Text style={{margin:0, padding:0}}>ELements: {section.elements}</Text>
                <Container style={{flexDirection:"row", maxHeight:"100%"}} marginTop="1%">
                    {section.tastes.map((taste, index) => {
                        return (
                            <Container style={{justifyContent:"space-around", maxHeight:"100%"}} key={"container" + index}>
                                <Text key={"text"+index}>Taste: {taste}</Text>
                                <Button 
                                    key={"Button"+index}
                                    title="ADD"
                                    onPress={()=>addToCartClick(section, taste)} />
                            </Container>
                        )
                    })}
                </Container>
            </Container>
        )
    }

    updateSections = (activeSections:number[]) => {
        this.setState({
            activeSections: activeSections
        })
    }

    continue = () => {
        store.dispatch(moveToCart())
    }
    
    render() {
        return (
            <Container style={{justifyContent:'flex-start'}}>
                <Container 
                    style={{
                        position:'absolute', 
                        backgroundColor:'#000000',
                        flexDirection:'row',
                        flexWrap: 'wrap',
                        justifyContent:'space-evenly',
                        width: '100%'}}>
                    <Button
                        title="Noodle"
                        onPress={ this.activeSectionNoodle} />
                    <Button
                        title="Rice"
                        onPress={this.activeSectionRice} />
                    <Button
                        title="Drink"
                        onPress={this.activeSectionDrink} />
                    <Button
                        title="Meals"
                        onPress={this.activeSectionDrink} />
                    <Button
                        title="Others"
                        onPress={this.activeSectionDrink} />
                </Container>
                <Container marginTop="15%" marginBottom="7%">
                    <ScrollView style={{
                        display:"flex",
                        backgroundColor:"white",
                        width: "100%"
                    }}>
                        <AccordionList
                            list={this.renderSwitch(this.state.activeCategory)}
                            header={this._renderSectionHeader}
                            body={this._renderSectionContent}
                        />
                    </ScrollView>
                </Container>
                <Container
                    style={{
                        position:'absolute',
                        backgroundColor:'#999999',
                        width:'100%',
                        bottom: 0
                    }}>
                        <Button
                            title="Confirm"
                            onPress={this.continue} />
                </Container>
            </Container>
        );
    }
}

export default MenuDetail;