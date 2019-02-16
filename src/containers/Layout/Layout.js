import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
        console.log('reached clsoed handler');
    }
    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            console.log('got here');
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {
        return (
            <React.Fragment>
        <div>
        <Toolbar clicked={this.sideDrawerOpenedHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    </div>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </React.Fragment> 
        )
    }
}
      
export default Layout;
