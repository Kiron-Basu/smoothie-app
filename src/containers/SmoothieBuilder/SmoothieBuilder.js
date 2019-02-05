import React, {Component} from 'react';
import Smoothie from './../../components/Smoothie/Smoothie';

export default class SmoothieBuilder extends Component {
    render() {
      return (
        // short hand for fragment
        <> 
            <Smoothie/>
            <div>Controls</div>
        </>
          );
        }
      }