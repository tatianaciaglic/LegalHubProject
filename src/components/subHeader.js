import React, { Component } from 'react';

class SubHeader extends Component {
  render() {
    return (
      <div className='sub-header'>
        <div className='buttons'>
          <input className='buttons__category' type="button"  name="buttoncateg" value="Category" />
          <input className='buttons__resources' type="button"  name="buttonresources" value="Resources" />
        </div>
      </div>
    );
  }
}
export default SubHeader;