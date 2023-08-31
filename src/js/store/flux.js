import { useContext } from "react";
import { Context } from "./appContext";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				//boilerplate example variable, we aren't using it
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
			playerName: "",
			//0 = empty
			//1 = part of the ship
			//2 = a sunken part of the ship
			//3 = a missed shot
			playerBoard: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //empty player board (default)
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			cpuBoard: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //empty cpu board (default)
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			cpuOptions: [
				{ line: 0, index: 0, used: false }, //all of the attack options from the cpu
				{ line: 0, index: 1, used: false }, //we aren't using the property used (could be removed later)
				{ line: 0, index: 2, used: false },
				{ line: 0, index: 3, used: false },
				{ line: 0, index: 4, used: false },
				{ line: 0, index: 5, used: false },
				{ line: 0, index: 6, used: false },
				{ line: 0, index: 7, used: false },
				{ line: 0, index: 8, used: false },
				{ line: 0, index: 9, used: false },
				{ line: 1, index: 0, used: false },
				{ line: 1, index: 1, used: false },
				{ line: 1, index: 2, used: false },
				{ line: 1, index: 3, used: false },
				{ line: 1, index: 4, used: false },
				{ line: 1, index: 5, used: false },
				{ line: 1, index: 6, used: false },
				{ line: 1, index: 7, used: false },
				{ line: 1, index: 8, used: false },
				{ line: 1, index: 9, used: false },
				{ line: 2, index: 0, used: false },
				{ line: 2, index: 1, used: false },
				{ line: 2, index: 2, used: false },
				{ line: 2, index: 3, used: false },
				{ line: 2, index: 4, used: false },
				{ line: 2, index: 5, used: false },
				{ line: 2, index: 6, used: false },
				{ line: 2, index: 7, used: false },
				{ line: 2, index: 8, used: false },
				{ line: 2, index: 9, used: false },
				{ line: 3, index: 0, used: false },
				{ line: 3, index: 1, used: false },
				{ line: 3, index: 2, used: false },
				{ line: 3, index: 3, used: false },
				{ line: 3, index: 4, used: false },
				{ line: 3, index: 5, used: false },
				{ line: 3, index: 6, used: false },
				{ line: 3, index: 7, used: false },
				{ line: 3, index: 8, used: false },
				{ line: 3, index: 9, used: false },
				{ line: 4, index: 0, used: false },
				{ line: 4, index: 1, used: false },
				{ line: 4, index: 2, used: false },
				{ line: 4, index: 3, used: false },
				{ line: 4, index: 4, used: false },
				{ line: 4, index: 5, used: false },
				{ line: 4, index: 6, used: false },
				{ line: 4, index: 7, used: false },
				{ line: 4, index: 8, used: false },
				{ line: 4, index: 9, used: false },
				{ line: 5, index: 0, used: false },
				{ line: 5, index: 1, used: false },
				{ line: 5, index: 2, used: false },
				{ line: 5, index: 3, used: false },
				{ line: 5, index: 4, used: false },
				{ line: 5, index: 5, used: false },
				{ line: 5, index: 6, used: false },
				{ line: 5, index: 7, used: false },
				{ line: 5, index: 8, used: false },
				{ line: 5, index: 9, used: false },
				{ line: 6, index: 0, used: false },
				{ line: 6, index: 1, used: false },
				{ line: 6, index: 2, used: false },
				{ line: 6, index: 3, used: false },
				{ line: 6, index: 4, used: false },
				{ line: 6, index: 5, used: false },
				{ line: 6, index: 6, used: false },
				{ line: 6, index: 7, used: false },
				{ line: 6, index: 8, used: false },
				{ line: 6, index: 9, used: false },
				{ line: 7, index: 0, used: false },
				{ line: 7, index: 1, used: false },
				{ line: 7, index: 2, used: false },
				{ line: 7, index: 3, used: false },
				{ line: 7, index: 4, used: false },
				{ line: 7, index: 5, used: false },
				{ line: 7, index: 6, used: false },
				{ line: 7, index: 7, used: false },
				{ line: 7, index: 8, used: false },
				{ line: 7, index: 9, used: false },
				{ line: 8, index: 0, used: false },
				{ line: 8, index: 1, used: false },
				{ line: 8, index: 2, used: false },
				{ line: 8, index: 3, used: false },
				{ line: 8, index: 4, used: false },
				{ line: 8, index: 5, used: false },
				{ line: 8, index: 6, used: false },
				{ line: 8, index: 7, used: false },
				{ line: 8, index: 8, used: false },
				{ line: 8, index: 9, used: false },
				{ line: 9, index: 0, used: false },
				{ line: 9, index: 1, used: false },
				{ line: 9, index: 2, used: false },
				{ line: 9, index: 3, used: false },
				{ line: 9, index: 4, used: false },
				{ line: 9, index: 5, used: false },
				{ line: 9, index: 6, used: false },
				{ line: 9, index: 7, used: false },
				{ line: 9, index: 8, used: false },
				{ line: 9, index: 9, used: false },
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				//boilerplate example function, we aren't using it
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (indx, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo arr to look for the respective indx
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === indx) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			savePlayerName: (name) => {
				//we use this function to save the choosen name of the player
				if (name == "" || name == null || name == undefined) {
					//if a name is not given, the player name will be "Player"
					setStore({ playerName: "Player" });
				} else {
					//else we set it to the choosen name
					setStore({ playerName: name });
				}
			},
			noName: () => {
				//i believe this funtion is not being used
				setStore({ playerName: "Player" });
			},
			updatePlayer: (arr) => {
				//if we want to save the player board, we use this function
				setStore({ playerBoard: arr });
			},
			updateCpu: (arr) => {
				//if we want to save the cpu board, we use this function
				setStore({ cpuBoard: arr });
			},
			classManagerPlayer: (value) => {
				//this function changes the player board background depending of the value it has
				//this clases are stored in the styles folder, in the index.css file
				if (value == 1) {
					return "square boat";
				} else if (value == 2) {
					return "square hit";
				} else if (value == 3) {
					return "square miss";
				} else {
					return "square ocean";
				}
			},
			classManagerCpu: (value) => {
				//this function changes the cpu board background depending of the value it has
				//this classes are stores id the styles folder, in the index.css
				//this are not the same as the above, since we don't want the player to see where the cpu boats are
				if (value == 1) {
					return "square ocean";
				} else if (value == 2) {
					return "square hit";
				} else if (value == 3) {
					return "square miss";
				} else {
					return "square ocean";
				}
			},
			updateOptions: (arr) => {
				//if we want to save the cpu options, we use this function
				//i believe that this function is not being used anymore, remove later
				setStore({ cpuOptions: arr });
			},
		},
	};
};

export default getState;
