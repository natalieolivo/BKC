import React from 'react';

import {
	Animated,
	View,
	Text,	
} from 'react-native';

class GrowingText extends React.Component {
	state = {
    	textSizeAnim: new Animated.Value(this.props.startTextSize),  // Initial fontSize for text: 0
  	}

  	componentDidMount() {
    	Animated.timing(                  // Animate over time
      		this.state.textSizeAnim,            // The animated value to drive
      		{
        		toValue: 30,                // Animate to opacity: 1 (opaque)
        		duration: 400,
        		delay: 800,
      		}
    	).start();                        // Starts the animation
  	}

	render() {
		const {style, ...props} = this.props;
		let { textSizeAnim } = this.state;		
		return (
			<Animated.Text				
				style={[
					this.props.style, 
					{fontSize: textSizeAnim}
				]}
			>
				{this.props.children}
			</Animated.Text>
		);
	}
}

export default GrowingText;