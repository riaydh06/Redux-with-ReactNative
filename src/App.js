import React,{ Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Header } from './Component/Common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers';
import LibraryList from './Component/LibraryList';

class App extends Component {
	render () {
		const {containerStyle} = styles;
		return (
			<Provider store={createStore(reducers)}>
				<View style={{flex:1}}>
					<Header headerText='Tech Stuck'></Header>
					<LibraryList/>
	 			</View> 
 			</Provider>
		);
	}
} 

const styles = StyleSheet.create({
	containerStyle:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#CFCFCF',
		fontSize:180
	},
})

export default App;