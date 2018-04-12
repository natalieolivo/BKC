import React from 'react';

import {	
	View,
	StyleSheet,
	Text,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux'

import {
 	 RkButton,
 	 RkTheme
} from 'react-native-ui-kitten';

import GrowingText from './GrowingText';

RkTheme.setType('RkButton', 'glow', {
  container: {
     backgroundColor: '#e55e0f',
     marginTop: 30,
     borderRadius: 30,
     width: 300,
     height: 60,     
  }
});

class Home extends React.Component {
	state = {
		name : 'natnat'		
	};	
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground					
					source={require('./images/stars.png')}
					style={styles.backgroundStretch}
				>							
					<GrowingText style={styles.growingText} startTextSize={18}>
						Engineer In Training
					</GrowingText>	

					<RkButton rkType='glow' style={{ marginLeft: 'auto', marginRight: 'auto' }}
						onPress={() => {
							// 'this' is class in this case. Arrow function will make sure of this							
							console.log(this.state.test);
							Actions.variables({
								text: this.state.name
							})
						}}
					>
						<Text style={{fontSize: 18, fontFamily: 'Avenir-Black', color: '#fff'}}>Get Started</Text>
					</RkButton>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,    	 
    	backgroundColor: '#031631'    	
  	},
	backgroundStretch: {
		flex: 1
	},
	growingText: {
		color: '#fff',
		textAlign: 'center',
		fontFamily: 'Avenir-Black',
		marginTop: 300,
		marginLeft: 10			
	}
});

export default Home;