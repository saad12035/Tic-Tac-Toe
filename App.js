import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View,Pressable} from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';




export default function App(){
	const [boardstates, setBoardStates] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]);
	const [playerTurn, setPlayerTurn] = useState(1);
	




 function selectIcon(row, col) {
		var position = boardstates[row][col];

		if (position == 1) {
			return <Icon name="close" style={styles.symbolX} />
		}
		if (position == 2) {
			return <Icon name="circle-outline" style={styles.symbol0} />
		}
		if (position == 0) {
			return <View></View>
		}
 	}

	 function buttonClick(row, col) {
		 //check if same button  is clicked twiced
		var isEmpty=boardstates[row][col];
		if(isEmpty != 0){
			return;
		}

		//get player
		var whichPlayer=playerTurn;

		//set the relevant icon for that player
		var arr=boardstates.slice();
		arr[row][col]=whichPlayer;
		setBoardStates(arr);
		
		//check winner
		var winner=checkWinner();
		if(winner==1){
			
		}
		else if(winner==-1){
			
		}
		

		//change player turn
		if(whichPlayer==1){
			setPlayerTurn(2);
		}
		else{
			setPlayerTurn(1);
		}
 	}

	 function checkWinner() {
		 //for columns
		 var sum = 0;
		 for (var i = 0; i < 3; i++) {
			sum = boardstates[0][i]+boardstates[1][i]+boardstates[2][i];
		 if (sum == 3) {
			 return 1;
		 }
		 else if (sum == -3) {
			 return -1;
		 }
		 else {
			 return 0;
		 }
		}
		 //for rows
		 sum = 0;
		 for (var i = 0; i < 3; i++) {
			sum = boardstates[i][0]+boardstates[i][1]+boardstates[i][2];
		

		if (sum == 3) {
			return 1;
		}
		else if (sum == -3) {
			return -1;
		}
		else {
			return 0;
		}}
		 //for diagonal
		 sum = 0;
		 for (var i = 0; i < 3; i++) {
			sum = boardstates[0][0]+boardstates[1][1]+boardstates[2][2];
		

		if (sum == 3) {
			return 1;
		}
		else if (sum == -3) {
			return -1;
		}
		else {
			return 0;
		}}
		 //for diagnol
		 sum = 0;
		 for (var i = 0; i < 3; i++) {
			sum = boardstates[0][2]+boardstates[1][1]+boardstates[2][0];
		

		if (sum == 3) {
			return 1;
		}
		else if (sum == -3) {
			return -1;
		}
		else {
			return 0;
		}
	}
		return 0;
		 
	}

	return (
		<View style={styles.container}>
			<Header Title="Game"/>
			<View style={{alignContent: 'center'}}>
				<Text style={{fontSize: 30}}>
					x player 2
				</Text>
			

			</View>
			<View style={{flexDirection: 'row'}}>
				<Pressable onPress={()=>buttonClick(0,0)} style={styles.button}>
				{selectIcon(0,0)}
				</Pressable>
				<Pressable onPress={()=>buttonClick(0,1)} style={styles.button}>
				{selectIcon(0,1)}
				</Pressable>	
				<Pressable onPress={()=>buttonClick(0,2)} style={styles.button}>
				{selectIcon(0,2)}
				</Pressable>
			</View>
			<View style={{flexDirection: 'row'}}>
			<Pressable onPress={()=>buttonClick(1,0)} style={styles.button}>
				{selectIcon(1,0)}
				</Pressable>
				<Pressable onPress={()=>buttonClick(1,1)} style={styles.button}>
				{selectIcon(1,1)}
				</Pressable>	
				<Pressable onPress={()=>buttonClick(1,2)} style={styles.button}>
				{selectIcon(1,2)}
				</Pressable>
			</View>

			<View style={{flexDirection: 'row'}}>
			<Pressable onPress={()=>buttonClick(2,0)} style={styles.button}>
				{selectIcon(2,0)}
				</Pressable>
				<Pressable onPress={()=>buttonClick(2,1)} style={styles.button}>
				{selectIcon(2,1)}
				</Pressable>	
				<Pressable onPress={()=>buttonClick(2,2)} style={styles.button}>
				{selectIcon(2,2)}
				</Pressable>
			</View>
			
      <Text style={{fontSize: 30}}>
					  Player 1 : 0
				</Text>
		
     
    
     
			<StatusBar style="auto"/>
		</View>
	);
}

const Header = (props) => {
	return (
		<View>
			<Text style={headerStyles.text}>Game</Text>
		</View>
	)
}


const headerStyles = StyleSheet.create({
	text: {
		marginTop: -140,
		fontSize: 30
	}

})


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		borderWidth: 3,
		width:100,
		height:100
	},

	symbolX:{
		fontSize:60,
		color:"red"
	},
	symbol0:{
		fontSize:60,
		color:"blue"
	},

});
