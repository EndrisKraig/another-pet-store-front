import React from "react";
import CatTable from './CatTable';

class MainScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            elements: []
        }
    }
    
    addElement(element) {
        console.log(element);
        const elements = this.state.elements;
        const newElements = elements.concat(element);
        this.setState({
            elements: newElements,
        })
    }
    
    removeLast(){
    
    }
    
    render(){
      return (
        <div className="App">
          <CatTable onClick={(element => this.addElement(element))}/>
        </div>
      );
    }

    
}

export default MainScreen;