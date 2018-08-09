import React, { Component } from 'react';
import Arrow from './arrow';

class Resources extends Component {

  render() {

    return (
        
        <div className='resources'>
      <div className='resources1'>
            <label className='resources1__title'>Legislation</label>
            <div className='resources1__description'>
            <Arrow className='resources1__arrow' />
            <label>Description for Legislation</label>
            <p>Legislation (or "statutory law") is law which has been promulgated (or "enacted") by a legislature or other governing body or the process of making it. Before an item of legislation becomes law it may be known as a bill, and may be broadly referred to as "legislation", while it remains under consideration to distinguish it from other business. Legislation can have many purposes: to regulate, to authorize, to outlaw, to provide (funds), to sanction, to grant, to declare or to restrict. It may be contrasted with a non-legislative act which is adopted by an executive or administrative body under the authority of a legislative act or for implementing a legislative act.</p>
        </div>
      </div>
    <div className='resources1'>
        <label className='resources1__title'>Judicial Decisions</label>
            <div className='resources1__description'>
            <Arrow className='resources1__arrow' />
            <label>Description for Judicial Decisions</label>
            <p>Judicial opinion. A judicial opinion is a form of legal opinion written by a judge or a judicial panel in the course of resolving a legal dispute, providing the decision reached to resolve the dispute, and usually indicating the facts which led to the dispute and an analysis of the law used to arrive at the decision.(source wikipedia)</p>
        </div>
    </div>
   <div className='resources1'>
        <label className='resources1__title'>e-Library</label>
            <div className='resources1__description'>
            <Arrow className='resources1__arrow' />
            <label>Description for e-Library</label>
            <p>Welcome to the E-Library, the academic platform responsible for providing access to information resources that help students and researchers in their study and research in field of law. Currently, the EeLibrary consists of 20 databases, including e-books, e-journals, and e-encyclopedias. </p>
          </div>
    </div>
    </div>
    );
  }
}

export default Resources;