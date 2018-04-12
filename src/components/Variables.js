import React from 'react';

import {	
	View,
	Text,
	StyleSheet,	
} from 'react-native';

import Draggable from './Draggable';

class Variables extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Learning Variables</Text>
				<Draggable />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#031631'
  	}
});

export default Variables;