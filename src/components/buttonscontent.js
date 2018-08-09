import React, { Component } from "react";
import Maincontent from "./maincontent";
import Resources from "./resources";
import TabNav from './tabnav';


class ButtonsContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Category',
                    active: true,
                    component: <Maincontent />
                },
                {
                    title: 'Resources',
                    active: false,
                    component: <Resources />
                },
               
            ]
        }
    }

    handleTabChange = (title) => {
        
        const tabs = this.state.tabs;

         tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

         this.setState({ tabs });
    }

  render() {
    return <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
  }

}

export default ButtonsContent;