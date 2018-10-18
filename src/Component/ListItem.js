import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { CardSection } from './Common';

class Listitem extends Component {
	render() {
		const { titleStyle } = styles;
		return (
			<CardSection>
				<Text style={titleStyle}>
					{this.props.library.title}
				</Text>
			</CardSection>
		)
	}
}

const styles = {
	titleStyle:{
		fontSize: 18,
		paddingLeft: 15,

	}
}

export default Listitem;