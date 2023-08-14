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
