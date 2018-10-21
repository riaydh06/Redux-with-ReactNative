import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as actions from '../Actions'

class Listitem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}
	renderDescription() {
		const  { library,expanded } = this.props
		if (expanded) {
			return (
				<CardSection>
					<Text style={{flex:1}}>
						{ library.item.description}
					</Text>
				</CardSection>
			)
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id,title } = this.props.library.item
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	const expanded = state.selectedLibraryId ===ownProps.library.item.id;
	return { expanded }
}

const styles = {
	titleStyle:{
		fontSize: 18,
		paddingLeft: 15,

	}
}

export default connect(mapStateToProps,actions)(Listitem);