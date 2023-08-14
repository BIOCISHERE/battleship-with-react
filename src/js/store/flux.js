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
				[1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
			],
			cpuBoard: [
				[1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
			],
			cpuOptions: [
				{ arr: 0, index: 0 },
				{ arr: 0, index: 1 },
				{ arr: 0, index: 2 },
				{ arr: 0, index: 3 },
				{ arr: 0, index: 4 },
				{ arr: 0, index: 5 },
				{ arr: 0, index: 6 },
				{ arr: 0, index: 7 },
				{ arr: 0, index: 8 },
				{ arr: 0, index: 9 },
				{ arr: 1, index: 0 },
				{ arr: 1, index: 1 },
				{ arr: 1, index: 2 },
				{ arr: 1, index: 3 },
				{ arr: 1, index: 4 },
				{ arr: 1, index: 5 },
				{ arr: 1, index: 6 },
				{ arr: 1, index: 7 },
				{ arr: 1, index: 8 },
				{ arr: 1, index: 9 },
				{ arr: 2, index: 0 },
				{ arr: 2, index: 1 },
				{ arr: 2, index: 2 },
				{ arr: 2, index: 3 },
				{ arr: 2, index: 4 },
				{ arr: 2, index: 5 },
				{ arr: 2, index: 6 },
				{ arr: 2, index: 7 },
				{ arr: 2, index: 8 },
				{ arr: 2, index: 9 },
				{ arr: 3, index: 0 },
				{ arr: 3, index: 1 },
				{ arr: 3, index: 2 },
				{ arr: 3, index: 3 },
				{ arr: 3, index: 4 },
				{ arr: 3, index: 5 },
				{ arr: 3, index: 6 },
				{ arr: 3, index: 7 },
				{ arr: 3, index: 8 },
				{ arr: 3, index: 9 },
				{ arr: 4, index: 0 },
				{ arr: 4, index: 1 },
				{ arr: 4, index: 2 },
				{ arr: 4, index: 3 },
				{ arr: 4, index: 4 },
				{ arr: 4, index: 5 },
				{ arr: 4, index: 6 },
				{ arr: 4, index: 7 },
				{ arr: 4, index: 8 },
				{ arr: 4, index: 9 },
				{ arr: 5, index: 0 },
				{ arr: 5, index: 1 },
				{ arr: 5, index: 2 },
				{ arr: 5, index: 3 },
				{ arr: 5, index: 4 },
				{ arr: 5, index: 5 },
				{ arr: 5, index: 6 },
				{ arr: 5, index: 7 },
				{ arr: 5, index: 8 },
				{ arr: 5, index: 9 },
				{ arr: 6, index: 0 },
				{ arr: 6, index: 1 },
				{ arr: 6, index: 2 },
				{ arr: 6, index: 3 },
				{ arr: 6, index: 4 },
				{ arr: 6, index: 5 },
				{ arr: 6, index: 6 },
				{ arr: 6, index: 7 },
				{ arr: 6, index: 8 },
				{ arr: 6, index: 9 },
				{ arr: 7, index: 0 },
				{ arr: 7, index: 1 },
				{ arr: 7, index: 2 },
				{ arr: 7, index: 3 },
				{ arr: 7, index: 4 },
				{ arr: 7, index: 5 },
				{ arr: 7, index: 6 },
				{ arr: 7, index: 7 },
				{ arr: 7, index: 8 },
				{ arr: 7, index: 9 },
				{ arr: 8, index: 0 },
				{ arr: 8, index: 1 },
				{ arr: 8, index: 2 },
				{ arr: 8, index: 3 },
				{ arr: 8, index: 4 },
				{ arr: 8, index: 5 },
				{ arr: 8, index: 6 },
				{ arr: 8, index: 7 },
				{ arr: 8, index: 8 },
				{ arr: 8, index: 9 },
				{ arr: 9, index: 0 },
				{ arr: 9, index: 1 },
				{ arr: 9, index: 2 },
				{ arr: 9, index: 3 },
				{ arr: 9, index: 4 },
				{ arr: 9, index: 5 },
				{ arr: 9, index: 6 },
				{ arr: 9, index: 7 },
				{ arr: 9, index: 8 },
				{ arr: 9, index: 9 },
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
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
		},
	};
};

export default getState;
