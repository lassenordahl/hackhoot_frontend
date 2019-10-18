import React from "react";
import './Gameplay.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedInIn, faReddit, faSnapchat, faVine } from '@fortawesome/fontawesome-svg-core'

import { Trail } from 'react-spring/renderprops';

const colors = [
  {
    title: 'red',
    hex: '#fc3835',
    icon: 'reddit'
  },
  { 
    title: 'blue',
    hex: '#5567f2',
    icon: 'linkedin-in'
  },
  {
    title: 'green',
    hex: '#42d458',
    icon: 'vine'
  },
  {
    title: 'yellow',
    hex: '#f5e236',
    icon: 'snapchat'
  }
];

function Gameplay() {
  return (
    <div className="Gameplay">
      <div className="gameplay-content">
        <div>
          <Trail 
            items={colors} 
            keys={item => item} 
            from={{opacity: 0}} 
            to={{opacity: 1}}
            duration={1000}
          >
            {item => props => 
              <div 
                className="flex-center" 
                style={{...props, 'backgroundColor': item.hex}} 
              >
                <i className={"fab fa-" + item.icon}></i>
              </div>
            }
          </Trail>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
