import React from 'react';

import {	
	View,
	Text,
	Image,
	StyleSheet,	
} from 'react-native';

class VariableBoxView extends React.Component {
	render() {
		return (
			<View>
				<Image style={{ width: 230, height: 290 }} source={require('./images/variableBoxViewOff.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {		
		backgroundColor: '#072858'		
  	}
});

export default VariableBoxView;