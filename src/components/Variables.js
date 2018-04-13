import React from 'react';

import {
	View,
	Text,			
	StyleSheet,	
} from 'react-native';

import Draggable from './Draggable';
import VariableBoxView from './VariableBoxView';

class Variables extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Learning Variables</Text>
				<VariableBoxView />
				<Draggable style={styles.draggableA} variableBoxViewStartX={0}
							variableBoxViewEndX={100}
							variableBoxViewStartY={150}
							variableBoxViewEndY={300} />

				<Draggable style={styles.draggableB} variableBoxViewStartX={150}
							variableBoxViewEndX={250} 
							variableBoxViewStartY={150}
							variableBoxViewEndY={300} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,		
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#031631'
	},
	draggableA: {
		backgroundColor: "#dc1e42"
	},
	draggableB: {
		backgroundColor: "#7d1aac"
	}
});

export default Variables;