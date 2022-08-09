import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text, TextInput, View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import postsData from '../assets/data/posts';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<SafeAreaView>
				<View style={styles.headerWrapper}>
					<View style={styles.headerItems}>
						<Image 
							source={require('../assets/images/profile.jpg')} 
							style={styles.profileImg} 
						/>
						<Text style={styles.headerText}>Home</Text>
					</View>
					<View style={[styles.headerItems, {paddingHorizontal: 0}]}>
						<View style={styles.headerDateItems}>
							<Text style={styles.headerDate}>Aug</Text>
							<Feather style={styles.downIcon} name='chevron-down' size={30} color={colors.white} />
						</View>
						<TextInput
							style={styles.searchInput}
							placeholder='Search'
						/>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	headerWrapper: {
		height: 108,
		backgroundColor: colors.background_blue,
	},
	headerItems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	profileImg: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginTop: '2%',
		marginLeft: '2%',
	},
	headerText: {
		marginBottom: '2%',
		marginTop: '2%',
		marginLeft: '30%',
		width: '100%',
    fontWeight: 'light',
		fontFamily: 'Poppins-Light',
    fontSize: 30,
		color: colors.white,
	},
	headerDateItems: {
		flexDirection: 'row',
		marginTop: '4%',
	},
	headerDate: {
		fontWeight: 'light',
		fontFamily: 'Poppins-Light',
    fontSize: 30,
		color: colors.white,
	},
	downIcon: {
		marginTop: '5%',
	},
	searchInput: {
		position: 'absolute',
		right: 1,
		width: '50%',
		height: '55%',
    marginTop: '4%',
		marginRight: 2,
    borderRadius: 15,
		backgroundColor: colors.white,
		textAlign: 'center',
		color: colors.black,
	}
});

export default HomeScreen;