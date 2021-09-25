import React from 'react';
import './NoTasks.scss';
import tidor from './../../images/istirahat.svg';

// Store context
import { GlobalConsumer } from '../../store/store';

const NoTasks = (props) => {
   if (props.state.renderedTasks.length) {
      return null;
   }

   return (
      <div className="no-tasks">
         <img src={tidor} alt="Relax"/>
         <h5>Tenang, Istirahatlah sejenak</h5>
      </div>
   )
}

export default GlobalConsumer(NoTasks);