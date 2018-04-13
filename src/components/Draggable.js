
import React from 'react';

import {
  StyleSheet,  
  PanResponder,
  Animated
} from 'react-native';

class Draggable extends React.Component {  
  
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x:0, y:0 }      

    this.state.pan.addListener((value) => this._val = value);
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({ 
      onStartShouldSetPanResponder : () => true,
      onPanResponderGrant: () => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
      },
      onPanResponderMove : Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        if(this.isCorrectVariableBoxRegion(gestureState)) {
          console.log(this.state.opacity);
          Animated.timing(
            this.state.opacity,
            {
              toValue: 0,
              duration: 800
            }).start(() =>
              this.setState({
                showDraggable: false
              })
          );
        } else {
          console.log("still springin");
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
      }

    });    
    
  }

  isCorrectVariableBoxRegion(gestureState) {
    return ((gestureState.moveX > this.props.variableBoxViewStartX) && 
           (gestureState.moveX < this.props.variableBoxViewEndX)) &&

           ((gestureState.moveY > this.props.variableBoxViewStartY) &&
            (gestureState.moveY < this.props.variableBoxViewEndY));
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle, this.props.style, {opacity:this.state.opacity}]}
        />
    );
  }
}
  
let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {    
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});

export default Draggable;