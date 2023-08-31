import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const BoatSelection = () => {
	const { store, actions } = useContext(Context); // global variables and functions

	const navigate = useNavigate(); //we use useNavigate to redirect to another page

	const [isPlayerBoard, setIsPlayerBoard] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //the player board is a matrix(array of arrays)
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Added more arrays to avoid runtime errors.
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // If we had 10 arrays and not 15, if we place a boat verticaly
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // thats longer than the matrix of 10 we would get a runtime error.
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);
	const [isCpuBoard, setIsCpuBoard] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //the cpu board is a matrix
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // no need to add more arrays(no runtime errors caught)
	]);

	// <-------------------------  boat selection ---------------------------->
	const [isVertical, setIsVertical] = useState(false); // used to place boat vertical
	const [isHorizontal, setIsHorizontal] = useState(false); // used to place boat horizontal

	const [isCarrier, setIsCarrier] = useState(false); //player 5 piece boat
	const [isCarrierAmnt, setIsCarrierAmnt] = useState(1); //can place 1 carrier

	const [isBattleship, setIsBattleship] = useState(false); //player 4 piece boat
	const [isBattleshipAmnt, setIsBattleshipAmnt] = useState(1); //can place 1 battleship

	const [isDestroyer, setIsDestroyer] = useState(false); //player 3 piece boat
	const [isDestroyerAmnt, setIsDestroyerAmnt] = useState(2); //can place 2 destroyers

	const [isPatrol, setIsPatrol] = useState(false); //player 2 piece boat
	const [isPatrolAmnt, setIsPatrolAmnt] = useState(1); //can place 1 patrol boat

	const [isCarrierCpu, setIsCarrierCpu] = useState(1); //cpu 5 piece boat, can place 1 destroyer

	const [isBattleshipCpu, setIsBattleshipCpu] = useState(1); //cpu 4 piece boat, can place 1 battleship

	const [isDestroyerCpu1, setIsDestroyerCpu1] = useState(1); //cpu 3 piece boat, can place 2 destroyers
	const [isDestroyerCpu2, setIsDestroyerCpu2] = useState(1); //same as isDetroyerCpu1

	const [isPatrolCpu, setIsPatrolCpu] = useState(1); //cpu 2 piece boat, can place 1 patrol boat

	const cpuCarrier = () => {
		//this function choose where to place the cpu carrier
		let randomOrientation = Math.random() < 0.5; // random boolean (returns true or false)

		if (randomOrientation) {
			//this will be horizontal
			//random array won't change and random index will
			let randomArray = Math.floor(Math.random() * 10); // generates random number from 0 to 9(includes 9) 10 options
			let randomIndex = Math.floor(Math.random() * 6); // generates random number from 0 to 5(includes 5) 6 options

			//we define this variables to check if the cells are used or not
			//we increase randomIndex, since we are placing the carrier horizontally
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];
			let ex3 = isCpuBoard[randomArray][randomIndex + 3];
			let ex4 = isCpuBoard[randomArray][randomIndex + 4];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				//here we checked if the cells values are not 0
				//if they are not 0, we repeat the function
				return cpuCarrier();
			} else {
				//we define a varible that is isCarrierCpu value minus 1 to use it later
				//isCarrierCpu represent how many carriers we can place, in this case 1
				//if it's 0, we can't place more carriers
				let updateCarrier = Number(isCarrierCpu) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;
				isCpuBoard[randomArray][randomIndex + 4] = 1;

				//we update the state whit the update variable updateCarrier from above
				setIsCarrierCpu(updateCarrier);
				//we return the next funtion to place the cpu battleship
				return cpuBattleship();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			//the array will change, and the index won't
			let randomArray = Math.floor(Math.random() * 6); //random number from 0 to 5 (includes 5) 6 options
			let randomIndex = Math.floor(Math.random() * 10); //random number from 0 to 9 (includes 9) 10 options

			//we define variables to check if the cells are used or not
			//we increase randomArray, since we are placing the carrier vertically
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];
			let ex3 = isCpuBoard[randomArray + 3][randomIndex];
			let ex4 = isCpuBoard[randomArray + 4][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				//we check if the cells values are not 0
				//if they are not 0, we repeat the function
				return cpuCarrier();
			} else {
				//we define a variavble that is isCarrierCpu minus 1 to use it later
				//isCarrierCpu represent how many carriers we can place, in this case 1
				//if it's 0, we can't place more carriers
				let updateCarrier = Number(isCarrierCpu) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 3][randomIndex] = 1;
				isCpuBoard[randomArray + 4][randomIndex] = 1;

				//we update the state whith the update variable updateCarrier from above
				setIsCarrierCpu(updateCarrier);
				//we return the next funtion to place the cpu battleship
				return cpuBattleship();
			}
		} else {
			//in some case the randomOrientation is not true or false we repeat the function
			//this never happend, but just in case
			return cpuCarrier();
		}
	};

	const cpuBattleship = () => {
		//this function choose where to place the cpu battleship
		let randomOrientation = Math.random() < 0.5; //random boolean (true or false)

		if (randomOrientation) {
			//this will be horizontal
			//the array won't change and the index will
			let randomArray = Math.floor(Math.random() * 10); //random number from 0 to 9 (includes 9) 10 oprions
			let randomIndex = Math.floor(Math.random() * 7); //random number from 0 to 6 (includes 6) 7 options

			//we define variables to check if the cells are used or not
			//we incrase randomIndex, since we are placing the battleship horizontally
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];
			let ex3 = isCpuBoard[randomArray][randomIndex + 3];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				//we check if the cells values are not 0
				//if they are not, we repeat the function
				return cpuBattleship();
			} else {
				//we define a variable that is isBattleshipCpu minus 1 to use it later
				//isBattleshipCpu represents how many battleships we can place, in this case 1
				//if it's 0 we can't place more battleships
				let updateBattleship = Number(isBattleshipCpu) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;

				//we update the state with the updateBattleship variable from above
				setIsBattleshipCpu(updateBattleship);
				//we return the next function to place the first cpu destroyer
				return cpuDestroyer1();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			//the array will change and the index won't
			let randomArray = Math.floor(Math.random() * 7); //random runmber from 0 to 6 (includes 6) 7 options
			let randomIndex = Math.floor(Math.random() * 10); // random number from 0 to 9 (includes 9) 10 options

			//we define variables to check if the cells are used or not
			//we incrase randomArray, since we are placing the battleship vertically
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];
			let ex3 = isCpuBoard[randomArray + 3][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				//we check if the cell values are not 0
				//if they are not, we repeat the funtion
				return cpuBattleship();
			} else {
				//we define a variable that is isBattleshipCpu minus 1 to use it later
				//isBattleshipCpu represents how many battleships we can place, in this case 1
				//if it's 0 we can't place more battleships
				let updateBattleship = Number(isBattleshipCpu) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 3][randomIndex] = 1;

				//we update the state with the updateBattleship variable from above
				setIsBattleshipCpu(updateBattleship);
				//we return the next function to place the first cpu destroyer
				return cpuDestroyer1();
			}
		} else {
			//in some case the randomOrientation is not true or false we repeat the function
			//this never happend, but just in case
			return cpuBattleship();
		}
	};

	const cpuDestroyer1 = () => {
		//this function choose where to place the first cpu destroyer
		let randomOrientation = Math.random() < 0.5; // random boolean (true or false)

		if (randomOrientation) {
			//this will be horizontal
			//the array won't change and the index will
			let randomArray = Math.floor(Math.random() * 10); // random number from 0 to 9(includes 9) 10 options
			let randomIndex = Math.floor(Math.random() * 8); // random number from 0 to 7(includes 7) 8 options

			//we define variables to check if the cells are used or not
			//we incrase randomIndex, since we are placing the firsr destroyer horizontally
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				//we check if the cell values are not 0
				//if they are not we repeat the function
				return cpuDestroyer1();
			} else {
				//we define a variable that is isDestroyerCpu1 minus 1 to use it later
				//isDestroyerCpu1 represents how many destroyers we can place, in this case 2
				//but we separated the lifes since it would't work properly
				//if it's 0 we can't place more battleships
				let updateDestroyer = Number(isDestroyerCpu1) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				//we update the state with the updateDestroyer variable from above
				setIsDestroyerCpu1(updateDestroyer);
				// we return the function to place the second cpu destroyer
				return cpuDestroyer2();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			//the array will change and the index won't
			let randomArray = Math.floor(Math.random() * 8); //random number from 0 to 7(includes 7) 8 options
			let randomIndex = Math.floor(Math.random() * 10); // random number from 0 to 9(includes 9) 10 options

			//we define variables to check if the cells are used or not
			//we incrase randomArray, since we are placing the firsr destroyer horizontally
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				//we check if the cell values are not 0
				//if they are not, we repeate the function
				return cpuDestroyer1();
			} else {
				//we define a variable that is isDestroyerCpu1 minus 1 to use it later
				//isDestroyerCpu1 represents how many destroyers we can place, in this case 2
				//but we separated the lifes since it would't work properly
				//if it's 0 we can't place more battleships
				let updateDestroyer = Number(isDestroyerCpu1) - 1;

				//since we checked that the cells values are 0, we replace them to 1
				//0 means empty cell, 1 means that in the cell theres a piece of the boat
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				//we update the state with the updateDestroyer variable from above
				setIsDestroyerCpu1(updateDestroyer);
				// we return the function to place the second cpu destroyer
				return cpuDestroyer2();
			}
		} else {
			//in some case the randomOrientation is not true or false we repeat the function
			//this never happend, but just in case
			return cpuDestroyer1();
		}
	};

	const cpuDestroyer2 = () => {
		//this function is the same as the cpuDestroyer1
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 8);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				return cpuDestroyer2();
			} else {
				let updateDestroyer = Number(isDestroyerCpu2) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				setIsDestroyerCpu2(updateDestroyer);
				//we return the function to place the cpu patrol boat
				return cpuPatrol();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Math.floor(Math.random() * 8);
			let randomIndex = Math.floor(Math.random() * 10);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				return cpuDestroyer2();
			} else {
				let updateDestroyer = Number(isDestroyerCpu2) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsDestroyerCpu2(updateDestroyer);
				//we return the function to place the cpu patrol boat
				return cpuPatrol();
			}
		} else {
			return cpuDestroyer2();
		}
	};

	const cpuPatrol = () => {
		let randomOrientation = Math.random < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 9);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];

			if (ex0 != 0 || ex1 != 0) {
				console.log("repeat");
				return cpuPatrol();
			} else {
				let updatePatrol = Number(isPatrolCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;

				setIsPatrolCpu(updatePatrol);
				console.log(isCpuBoard);
				return true;
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Math.floor(Math.random() * 9);
			let randomIndex = Math.floor(Math.random() * 10);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];

			if (ex0 != 0 || ex1 != 0) {
				console.log("repeat");
				return cpuPatrol();
			} else {
				let updatePatrol = Number(isPatrolCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;

				setIsPatrolCpu(updatePatrol);
				console.log(isCpuBoard);
				return true;
			}
		} else {
			return cpuPatrol();
		}
	};

	const playerSelection = (arrayNmbr, index) => {
		//this function places the payer boats
		//we recive an array number and a index
		//the index comes from the map function
		//this function works the same as the cpuCarrier, cpuBattleship, cpuDestroer1 & 2 and cpuPatrol
		if (isVertical) {
			//if isVertical is true, we place the player boats vertically
			if (isCarrier) {
				//if isCarrier is true, we are placing a player carrier vertically
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];
				let ex3 = isPlayerBoard[arrayNmbr + 3][index];
				let ex4 = isPlayerBoard[arrayNmbr + 4][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
					alert("Can't place the carrier there");
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9 || arrayNmbr + 2 > 9 || arrayNmbr + 3 > 9 || arrayNmbr + 4 > 9) {
					alert("Can't place the carrier there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;
					isPlayerBoard[arrayNmbr + 3][index] = 1;
					isPlayerBoard[arrayNmbr + 4][index] = 1;

					//isCarrierAmnt is how many carrier the player can place
					let updateCarrier = Number(isCarrierAmnt) - 1;

					setIsCarrier(false); //set to default(false)
					setIsVertical(false); //set to default(false)
					setIsCarrierAmnt(updateCarrier); //update isCarrierAmnt
				}
			} else if (isBattleship) {
				//if isBattleship is true, we are placing a player battleshhip vertically
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];
				let ex3 = isPlayerBoard[arrayNmbr + 3][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
					alert("Can't place the battleship there");
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9 || arrayNmbr + 2 > 9 || arrayNmbr + 3 > 9) {
					alert("Can't place the battleship there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;
					isPlayerBoard[arrayNmbr + 3][index] = 1;

					//isBattleshipAmt is how many battleships the player can place
					let updateBattleship = Number(isBattleshipAmnt) - 1;

					setIsBattleship(false); //set to default(false)
					setIsVertical(false); //set to default(false)
					setIsBattleshipAmnt(updateBattleship); //update isBattleshipAmnt
				}
			} else if (isDestroyer) {
				//if isDestroyer is true, we are placing a player destroyer vertically
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					alert("Can't place the destroyer there");
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9 || arrayNmbr + 2 > 9) {
					alert("Can't place the destroyer there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;

					//isDestroyerAmnt is how may destroyers the player can place
					let updateDestroyer = Number(isDestroyerAmnt) - 1;

					setIsDestroyer(false); //set to default(false)
					setIsVertical(false); //set to default(false)
					setIsDestroyerAmnt(updateDestroyer); //update isDestroyerAmnt
				}
			} else if (isPatrol) {
				//if isPatrol is true, we are placing a player patrol boat vertically
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];

				if (ex0 != 0 || ex1 != 0) {
					alert("Can't place the patrol boat there");
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9) {
					alert("Can't place the patrol boat there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;

					//isPatrolAmnt is how many patrol boats the player can place
					let updatePatrol = Number(isPatrolAmnt) - 1;

					setIsPatrol(false); //set to default(false)
					setIsVertical(false); // set to default(false)
					setIsPatrolAmnt(updatePatrol); //update isPatrolAmnt
				}
			} else {
				// if none of the above are true, we return a alert to select a boat type
				alert("Please, select a boat type");
			}
		} else if (isHorizontal) {
			//if isHorizontal is true, we place the player boats horizontally
			if (isCarrier) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr][index + 1];
				let ex2 = isPlayerBoard[arrayNmbr][index + 2];
				let ex3 = isPlayerBoard[arrayNmbr][index + 3];
				let ex4 = isPlayerBoard[arrayNmbr][index + 4];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
					alert("Can't place the carrier there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr][index + 1] = 1;
					isPlayerBoard[arrayNmbr][index + 2] = 1;
					isPlayerBoard[arrayNmbr][index + 3] = 1;
					isPlayerBoard[arrayNmbr][index + 4] = 1;

					//isCarrierAmnt is how many carriers the player can place
					let updateCarrier = Number(isCarrierAmnt) - 1;

					setIsCarrier(false); //set to default(false)
					setIsHorizontal(false); //set to default(false)
					setIsCarrierAmnt(updateCarrier); //update isCarrierAmt
				}
			} else if (isBattleship) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr][index + 1];
				let ex2 = isPlayerBoard[arrayNmbr][index + 2];
				let ex3 = isPlayerBoard[arrayNmbr][index + 3];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
					alert("Can't place the battleship there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr][index + 1] = 1;
					isPlayerBoard[arrayNmbr][index + 2] = 1;
					isPlayerBoard[arrayNmbr][index + 3] = 1;

					//isBattleshipAmnt is how many battleships the player can place
					let updateBattleship = Number(isBattleshipAmnt) - 1;

					setIsBattleship(false); //set to default(false)
					setIsHorizontal(false); //set to default(false)
					setIsBattleshipAmnt(updateBattleship); //update isBattleshipAmnt
				}
			} else if (isDestroyer) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr][index + 1];
				let ex2 = isPlayerBoard[arrayNmbr][index + 2];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					alert("Can't place the destroyer there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr][index + 1] = 1;
					isPlayerBoard[arrayNmbr][index + 2] = 1;

					//isDestroyerAmnt is how many destroyers the player can place
					let updateDestroyer = Number(isDestroyerAmnt) - 1;

					setIsDestroyer(false); //set to default(false)
					setIsHorizontal(false); //set to default(false)
					setIsDestroyerAmnt(updateDestroyer); //update isDestroyerAmnt
				}
			} else if (isPatrol) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr][index + 1];

				if (ex0 != 0 || ex1 != 0) {
					alert("Can't place the patrol boat there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr][index + 1] = 1;

					//isPatrolAmnt is how many patrol boats the player can place
					let updatePatrol = Number(isPatrolAmnt) - 1;

					setIsDestroyer(false); //set to default(false)
					setIsHorizontal(false); //set to default(false)
					setIsPatrolAmnt(updatePatrol); //update isPatrolAmnt
				}
			} else {
				//if none of the above are true, we return a alert to choose a boat type
				alert("Please, select a boat type");
			}
		} else {
			//if isVertical and isHorizontal are false we return a alert to choose a direction
			alert("Please, select a direction (Horizontal or Vertical)");
		}
	};

	const carrierClass = () => {
		//this function manages the className of the carrier button
		if (isCarrierAmnt == 0) {
			//if isCarrierAmnt is 0, we hide the button
			return "btn btn-primary m-1 d-none";
		} else {
			if (isCarrier) {
				//if the button is selected, we change its color to green
				return "btn btn-success m-1";
			} else {
				//if not we set it's color to blue(default)
				return "btn btn-primary m-1";
			}
		}
	};

	const battleshipClass = () => {
		//this function manages the className of the battleship button
		if (isBattleshipAmnt == 0) {
			//if isBattleshipAmnt is 0, we hide the button
			return "btn btn-primary m-1 d-none";
		} else {
			if (isBattleship) {
				//if the button is selected, we change it's color to green
				return "btn btn-success m-1";
			} else {
				//if not we set it's color to blue(default)
				return "btn btn-primary m-1";
			}
		}
	};

	const destroyerClass = () => {
		//this function manages the className of the detroyer button
		if (isDestroyerAmnt == 0) {
			//if isDestroyerAmnt is 0, we hide the button
			return "btn btn-primary m-1 d-none";
		} else {
			if (isDestroyer) {
				//if the button is selected, we change it's color to green
				return "btn btn-success m-1";
			} else {
				//if not we set it's color to blue(defalut)
				return "btn btn-primary m-1";
			}
		}
	};

	const patrolClass = () => {
		//this function manages the className of the patrol boat button
		if (isPatrolAmnt == 0) {
			//if isPatrolAmnt is 0, we hide the button
			return "btn btn-primary m-1 d-none";
		} else {
			if (isPatrol) {
				//if the button is selected, we change it's color to green
				return "btn btn-success m-1";
			} else {
				//if not we set it's color to blue(default)
				return "btn btn-primary m-1";
			}
		}
	};

	const finishedBoatPlacing = () => {
		//this function makes sure that all player and cpu boats are placed
		if (
			//we verify that all the boats count are 0, from both player and cpu
			isCarrierAmnt == 0 &&
			isBattleshipAmnt == 0 &&
			isDestroyerAmnt == 0 &&
			isPatrolAmnt == 0 &&
			isCarrierCpu == 0 &&
			isBattleshipCpu == 0 &&
			isDestroyerCpu1 == 0 &&
			isDestroyerCpu2 == 0 &&
			isPatrolCpu == 0
		) {
			//save the playerBoard and cpuBoard to the context(global variables)
			actions.updatePlayer(isPlayerBoard);
			actions.updateCpu(isCpuBoard);
			//we redirect to the actual game
			navigate("/game");
		} else {
			//If there are boats from the player or from the cpu that are not being placed
			// we return aalert.
			alert("Please place all your boats");
		}
	};

	useEffect(() => {
		//on load we execute the cpuCarrier function, which eventually will execute the others cpu functions
		cpuCarrier();
	}, []);

	return (
		<div className="container-fluid border border-dark m-0 p-0">
			<div className="text-center">
				<h1>But first, lets choose our naval fleet</h1>
				<h5>
					<span className="text-primary">A blue box represents an empty space. |</span>
					<span className="text-secondary">| A grey box represents a piece of a ship. |</span>
					<span className="text-danger">| A red box represents a ship that has been hit. |</span>
					<span>| A white box represents a missed shot.</span>
				</h5>
			</div>
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h3>{store.playerName}</h3>
						<div className="row">
							<div className="fitX">
								{isPlayerBoard[0].map((item, index) => (
									//we use the isPlayerBoard to map the numbers
									//we use anny array, since we don't need the values
									//we need the array length to map 10 numbers
									//we use an array and not the matrix, since the matrix has 15 arrays
									<div className="infoX" key={index}>
										{/* we use the index from the map to return the numbers */}
										{index + 1}
									</div>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								{isPlayerBoard[0].map((item, index) => (
									//map the first player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(0, index)}>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{isPlayerBoard[1].map((item, index) => (
									//map the second player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(1, index)}>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{isPlayerBoard[2].map((item, index) => (
									//map the third player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(2, index)}>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{isPlayerBoard[3].map((item, index) => (
									//map the fourth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(3, index)}>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{isPlayerBoard[4].map((item, index) => (
									//map the fifth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(4, index)}>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{isPlayerBoard[5].map((item, index) => (
									//map the sixth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(5, index)}>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{isPlayerBoard[6].map((item, index) => (
									//map the seventh player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(6, index)}>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{isPlayerBoard[7].map((item, index) => (
									//map the eighth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(7, index)}>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{isPlayerBoard[8].map((item, index) => (
									//map the nineth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(8, index)}>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{isPlayerBoard[9].map((item, index) => (
									//map the tenth player board array
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(9, index)}>
										J{index + 1}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="col text-center">
						<h3>Setting up your naval fleet</h3>
						<div className="row">
							<h4 className="mt-3">1.- Choose which orientation</h4>
							<div>
								<button
									className={isVertical ? "btn btn-success m-1" : "btn btn-primary m-1"}
									onClick={() => {
										//on click we set isVertical to true
										//on click we set isHorizontal to false
										setIsVertical(true);
										setIsHorizontal(false);
									}}
								>
									Vertical
								</button>
								<button
									className={isHorizontal ? "btn btn-success m-1" : "btn btn-primary m-1"}
									onClick={() => {
										//on click we set isVertical to false
										//on click we set isHorizontal to true
										setIsHorizontal(true);
										setIsVertical(false);
									}}
								>
									Horizontal
								</button>
							</div>
							<h4 className="mt-3">2.- Choose a boat</h4>
							<div>
								<button
									className={carrierClass()}
									onClick={() => {
										setIsCarrier(true); //we set isCarrier to true
										setIsBattleship(false); //we set isBattleship to false
										setIsDestroyer(false); //we set isDestroyer to false
										setIsPatrol(false); //we set isPatrol to false
									}}
								>
									Aircraft carrier ({isCarrierAmnt} left)
								</button>{" "}
								<br />
								<button
									className={battleshipClass()}
									onClick={() => {
										setIsCarrier(false); //we set isCarrier to false
										setIsBattleship(true); //we set isBattleship to true
										setIsDestroyer(false); // we set isDestroyer to false
										setIsPatrol(false); //we set isPatrol to false
									}}
								>
									Battleship ({isBattleshipAmnt} left)
								</button>{" "}
								<br />
								<button
									className={destroyerClass()}
									onClick={() => {
										setIsCarrier(false); //we set isCarrier to false
										setIsBattleship(false); // we set isBattleship to false
										setIsDestroyer(true); // we set isDestroyer to true
										setIsPatrol(false); // we set isPatrol to false
									}}
								>
									Destroyer ({isDestroyerAmnt} left)
								</button>{" "}
								<br />
								<button
									className={patrolClass()}
									onClick={() => {
										setIsCarrier(false); //we set isCarrier to false
										setIsBattleship(false); //we set isBattleship to false
										setIsDestroyer(false); //we set isDestroyer to false
										setIsPatrol(true); //we set isPatrol to true
									}}
								>
									Patrol boat ({isPatrolAmnt} left)
								</button>
							</div>
							<h4 className="mt-3">3.- Click the button down below once you finished placing all the boats</h4>
							<div>
								<button type="button" className="btn btn-warning m-1" onClick={() => finishedBoatPlacing()}>
									Ready, set, go!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
