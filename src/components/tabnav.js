import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return (
        <div className='sub-header'>
            <div className='sub-header__buttons'>
            {
                this.props.tabs.map((tab, index) => {
                    const className = `sub-header__buttons ${tab.active ? 'sub-header__active' : ''}`
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                })
            }
            </div>
            
            {
                this.props.tabs.map((tab, index) => {
                    if(tab.active) {
                        return (
                            <div key={index} className='sub-header__component'>
                                {tab.component}
                            </div>
                        )
                    }
                })
            }
    
        </div>
    )
  }
}

export default TabNav;