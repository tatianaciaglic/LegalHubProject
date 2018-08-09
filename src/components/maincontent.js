import React, { Component } from 'react';
import Arrow from './arrow';

class Maincontent extends Component {

  render() {

    return (
        
        <div className='maincontent'>
      <div className='maincontent1'>
            <label className='maincontent1__title'>Criminal law</label>
            <div className='maincontent1__description'>
            <Arrow className='maincontent1__arrow' />
            <label>Description for Criminal law</label>
            <p>Criminal law is the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self. Most criminal law is established by statute, which is to say that the laws are enacted by a legislature.(source wikipedia)</p>
        </div>
      </div>
    <div className='maincontent1'>
        <label className='maincontent1__title'>Civil law (common law)</label>
            <div className='maincontent1__description'>
            <Arrow className='maincontent1__arrow' />
            <label>Description for Civil law (common law)</label>
            <p>Civil law is a branch of the law.In common law legal systems such as England and Wales, the law of Pakistan and the law of the United States, the term refers to non-criminal law.The law relating to civil wrongs and quasi-contracts is part of the civil law.The law of property is embraced by civil law. Civil law may, like criminal law, be divided into substantive law and procedural law.(source wikipedia)</p>
        </div>
    </div>
   <div className='maincontent1'>
        <label className='maincontent1__title'>Cyber law (IT law)</label>
            <div className='maincontent1__description'>
            <Arrow className='maincontent1__arrow' />
            <label>Description for Cyber law (IT law)</label>
            <p>nformation technology law (also called "cyberlaw") concerns the law of information technology, including computing and the internet. It is related to legal informatics, and governs the digital dissemination of both (digitalized) information and software, information security and electronic commerce. aspects and it has been described as "paper laws" for a "paperless environment". It raises specific issues of intellectual property in computing and online, contract law, privacy, freedom of expression, and jurisdiction.) (source wikipedia)</p>
          </div>
    </div>
    </div>
    );
  }
}

export default Maincontent;