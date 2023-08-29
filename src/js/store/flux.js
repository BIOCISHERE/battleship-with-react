import { useContext } from "react";
import { Context } from "./appContext";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
				{ line: 0, index: 0, used: false },
				{ line: 0, index: 1, used: false },
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
				if (name == "" || name == null || name == undefined) {
					setStore({ playerName: "Player" });
				} else {
					setStore({ playerName: name });
				}
			},
			noName: () => {
				setStore({ playerName: "Player" });
			},
			updatePlayer: (arr) => {
				setStore({ playerBoard: arr });
			},
			updateCpu: (arr) => {
				setStore({ cpuBoard: arr });
			},
			classManagerPlayer: (value) => {
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
				setStore({ cpuOptions: arr });
			},
		},
	};
};

export default getState;
