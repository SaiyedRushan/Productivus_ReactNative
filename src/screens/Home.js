import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Title, Paragraph, Button } from 'react-native-paper';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Home = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../../assets/bgImage.jpg')}
			style={styles.backgroundImage}
		>
			<View style={styles.overlay}>
				<Paragraph style={styles.text}>
					Hello Champ, Let's get choppin'
				</Paragraph>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1, // Make the background image take up the entire screen
		resizeMode: 'cover', // Resize the image to cover the entire container
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
		flex: 1, // Make the overlay take up the entire screen
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 22,
		padding: 10,
		color: 'white',
	},
});

export default Home;
