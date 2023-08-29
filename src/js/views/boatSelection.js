import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { func } from "prop-types";

export const BoatSelection = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const [isPlayerBoard, setIsPlayerBoard] = useState([
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
	]);
	const [isCpuBoard, setIsCpuBoard] = useState([
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
	]);
	const [isCpuOptions, setIsCpuOptions] = useState([
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
	]);

	//const [isPlayerTurn, setIsPlayerTurn] = useState(true);

	const [isHaveIt, setIsHaveIt] = useState([]);
	const [isTurn, setIsTurn] = useState(0);

	const [isSwitch, setIsSwitch] = useState(false);

	//const [isPlayerLives, setIsPlayerLives] = useState(18);
	//const [isCpuLives, setIsCpuLives] = useState(18);

	//const [isWinner, setIsWinner] = useState(false);
	// <-------------------------  boat selection ---------------------------->
	const [isVertical, setIsVertical] = useState(false);
	const [isHorizontal, setIsHorizontal] = useState(false);

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
	const [isDestroyerCpu2, setIsDestroyerCpu2] = useState(1);

	const [isPatrolCpu, setIsPatrolCpu] = useState(1); //cpu 2 piece boat, can place 1 patrol boat

	const uniqueRandomNumber = (maxNmbr) => {
		let random = Math.floor(Math.random() * maxNmbr);
		random = Number(random);

		if (!isHaveIt.includes(random)) {
			let add = isHaveIt.concat(random);
			setIsHaveIt(add);
			setTimeout(() => {
				setIsSwitch(!isSwitch);
			}, 10);
			return random;
		} else {
			if (isHaveIt.length < maxNmbr) {
				return uniqueRandomNumber(maxNmbr);
			} else {
				return false;
			}
		}
	};

	/*const cpuPick = () => {
		if (isCpuLives == 0 || isPlayerLives == 0) {
			setIsWinner(true);
		} else {
			if (!isPlayerTurn) {
				let ex0 = isHaveIt[isTurn];
				ex0 = Number(ex0);

				let ex1 = isCpuOptions[ex0].line;
				let ex2 = isCpuOptions[ex0].index;

				let picked = isPlayerBoard[ex1][ex2];

				let updateTurn = Number(isTurn) + 1;

				let updatePlayerLives = Number(isPlayerLives) - 1;

				if (picked == 1) {
					isPlayerBoard[ex1][ex2] = 2;

					setIsTurn(updateTurn);
					setIsPlayerLives(updatePlayerLives);

					setIsPlayerTurn(true);
				} else if (picked == 2) {
					isPlayerBoard[ex1][ex2] = 2;

					setIsTurn(updateTurn);

					setIsPlayerTurn(true);
				} else {
					isPlayerBoard[ex1][ex2] = 3;

					setIsTurn(updateTurn);
					setIsPlayerTurn(true);
				}
			}
		}
	};*/

	/*const playerPick = (target, arrayNmbr, index) => {
		if (isCpuLives == 0 || isPlayerLives == 0) {
			setIsWinner(true);
			if (isCpuLives == 0) {
				alert(`${store.playerName} has won!`);
			} else {
				alert("CPU has won!");
			}
		} else {
			if (isPlayerTurn) {
				let updateCpuLives = Number(isCpuLives) - 1;
				if (target == 1) {
					isCpuBoard[arrayNmbr][index] = 2;

					setIsCpuLives(updateCpuLives);

					setIsPlayerTurn(false);
				} else if (target == 2) {
					isCpuBoard[arrayNmbr][index] = 2;
				} else {
					isCpuBoard[arrayNmbr][index] = 3;
					actions.updateCpu(isCpuBoard);
				}
			} else {
				alert("It's not your turn");
			}
		}
	};*/

	/*const turnAndWinner = () => {
		if (isWinner) {
			if (isCpuLives == 0) {
				return <h1>{store.playerName} has won!</h1>;
			} else {
				return <h1>CPU has won!</h1>;
			}
		} else {
			if (isPlayerTurn) {
				return <h1>It's {store.playerName} turn</h1>;
			} else {
				return <h1>It's CPU turn</h1>;
			}
		}
	};*/
	//<------------------------------------------------------->
	/*const cpuPatrol = () => {
		let randomOrientation = Math.floor(Math.random() * 2);
		randomOrientation = parseInt(randomOrientation);

		let randomArray = Math.floor(Math.random() * 10);
		randomArray = parseInt(randomArray);

		let randomIndex = Math.floor(Math.random() * 10);
		randomIndex = parseInt(randomIndex);

		let updatePatrol = parseInt(isPatrolCpu) - 1;

		if (randomOrientation == 0) {
			//this will be horizontal

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];

			if (ex0 != 0 || ex1 != 0) {
				cpuPatrol();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;

				setIsPatrolCpu(updatePatrol);
			}
		} else {
			//this will be vertical

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];

			if (ex0 != 0 || ex1 != 0) {
				cpuPatrol();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;

				setIsPatrolCpu(updatePatrol);
			}
		}
	};

	const cpuDestroyer2 = () => {
		let randomOrientation = Math.floor(Math.random() * 2);
		randomOrientation = parseInt(randomOrientation);

		let randomArray = Math.floor(Math.random() * 10);
		randomArray = parseInt(randomArray);

		let randomIndex = Math.floor(Math.random() * 10);
		randomIndex = parseInt(randomIndex);

		let updateDestroyer = parseInt(isDestroyerCpu) - 1;

		if (randomOrientation == 0) {
			//this will be horizontal

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				cpuDestroyer2();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				setIsDestroyerCpu(updateDestroyer);
				cpuPatrol();
			}
		} else {
			//this will be vertical
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				cpuDestroyer2();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsDestroyerCpu(updateDestroyer);
				cpuPatrol();
			}
		}
	};

	const cpuDestroyer1 = () => {
		let randomOrientation = Math.floor(Math.random() * 2);
		randomOrientation = parseInt(randomOrientation);

		let randomArray = Math.floor(Math.random() * 10);
		randomArray = parseInt(randomArray);

		let randomIndex = Math.floor(Math.random() * 10);
		randomIndex = parseInt(randomIndex);

		let updateDestroyer = parseInt(isDestroyerCpu) - 1;

		if (randomOrientation == 0) {
			//this will be horizontal

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				cpuDestroyer1();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				setIsDestroyerCpu(updateDestroyer);
				cpuDestroyer2();
			}
		} else {
			//this will be vertical
			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				cpuDestroyer1();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsDestroyerCpu(updateDestroyer);
				cpuDestroyer2();
			}
		}
	};

	const cpuBattleship = () => {
		let randomOrientation = Math.floor(Math.random() * 2);
		randomOrientation = parseInt(randomOrientation);

		let randomArray = Math.floor(Math.random() * 10);
		randomArray = parseInt(randomArray);

		let randomIndex = Math.floor(Math.random() * 10);
		randomIndex = parseInt(randomIndex);

		let updateBattleship = parseInt(isBattleshipCpu) - 1;

		if (randomOrientation == 0) {
			//this will be horizontal

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];
			let ex3 = isCpuBoard[randomArray][randomIndex + 3];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				cpuBattleship();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;

				setIsBattleshipCpu(updateBattleship);
				cpuDestroyer1();
			}
		} else {
			//this will be vertical

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];
			let ex3 = isCpuBoard[randomArray + 3][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				cpuBattleship();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsBattleshipCpu(updateBattleship);
				cpuDestroyer1();
			}
		}
	};*/
	//<--------------------ARREGLAR -------------------------->

	const cpuCarrier = () => {
		let randomOrientation = Math.random() < 0.5;

		//let pick = isHaveIt[isTurn];
		let pick = Math.floor(Math.random() * 100);
		pick = Number(pick);

		let array = isCpuOptions[pick].line;
		let index = isCpuOptions[pick].index;

		setTimeout(() => {
			if (randomOrientation) {
				//this will be horizontal

				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array][index + 1];
				let ex2 = isCpuBoard[array][index + 2];
				let ex3 = isCpuBoard[array][index + 3];
				let ex4 = isCpuBoard[array][index + 4];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
					console.log("repeat");
					return cpuCarrier();
				} else {
					let updateCarrier = Number(isCarrierCpu) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array][index + 1] = 1;
					isCpuBoard[array][index + 2] = 1;
					isCpuBoard[array][index + 3] = 1;
					isCpuBoard[array][index + 4] = 1;

					setIsCarrierCpu(updateCarrier);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					return cpuBattleship();
				}
			} else if (!randomOrientation) {
				//this will be vertical

				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array + 1][index];
				let ex2 = isCpuBoard[array + 2][index];
				let ex3 = isCpuBoard[array + 3][index];
				let ex4 = isCpuBoard[array + 4][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
					console.log("repeat");
					return cpuCarrier();
				} else {
					let updateCarrier = Number(isCarrierCpu) - 1;
					let updateTurn = Number(isTurn) + 1;
					isCpuBoard[array][index] = 1;
					isCpuBoard[array + 1][index] = 1;
					isCpuBoard[array + 2][index] = 1;
					isCpuBoard[array + 3][index] = 1;
					isCpuBoard[array + 4][index] = 1;

					setIsCarrierCpu(updateCarrier);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					return cpuBattleship();
				}
			} else {
				return cpuCarrier();
			}
		}, 100);
	};

	const cpuBattleship = () => {
		let randomOrientation = Math.random() < 0.5;

		let pick = Math.floor(Math.random() * 100);
		pick = Number(pick);

		let array = isCpuOptions[pick].line;
		let index = isCpuOptions[pick].index;

		setTimeout(() => {
			if (randomOrientation) {
				//this will be horizontal

				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array][index + 1];
				let ex2 = isCpuBoard[array][index + 2];
				let ex3 = isCpuBoard[array][index + 3];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
					console.log("repeat");
					return cpuBattleship();
				} else {
					let updateBattleship = Number(isBattleshipCpu) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array][index + 1] = 1;
					isCpuBoard[array][index + 2] = 1;
					isCpuBoard[array][index + 3] = 1;

					setIsBattleshipCpu(updateBattleship);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					return cpuDestroyer1();
				}
			} else if (!randomOrientation) {
				//this will be vertical
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array + 1][index];
				let ex2 = isCpuBoard[array + 2][index];
				let ex3 = isCpuBoard[array + 3][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
					console.log("repeat");
					return cpuBattleship();
				} else {
					let updateBattleship = Number(isBattleshipCpu) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array + 1][index] = 1;
					isCpuBoard[array + 2][index] = 1;
					isCpuBoard[array + 3][index] = 1;

					setIsBattleshipCpu(updateBattleship);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					return cpuDestroyer1();
				}
			} else {
				cpuBattleship();
			}
		}, 100);
	};

	const cpuDestroyer1 = () => {
		let randomOrientation = Math.random() < 0.5;

		let pick = Math.floor(Math.random() * 100);
		pick = Number(pick);

		let array = isCpuOptions[pick].line;
		let index = isCpuOptions[pick].index;

		setTimeout(() => {
			if (randomOrientation) {
				//this will be horizontal
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array][index + 1];
				let ex2 = isCpuBoard[array][index + 2];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					return cpuDestroyer1();
				} else {
					let updateDestroyer = Number(isDestroyerCpu1) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array][index + 1] = 1;
					isCpuBoard[array][index + 2] = 1;

					setIsDestroyerCpu1(updateDestroyer);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					console.log(isDestroyerCpu1);
					return cpuDestroyer2();
				}
			} else if (!randomOrientation) {
				//this will be vertical
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array + 1][index];
				let ex2 = isCpuBoard[array + 2][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					return cpuDestroyer1();
				} else {
					let updateDestroyer = Number(isDestroyerCpu1) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index];
					isCpuBoard[array + 1][index];
					isCpuBoard[array + 2][index];

					setIsDestroyerCpu1(updateDestroyer);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					console.log(isDestroyerCpu1);
					return cpuDestroyer2();
				}
			} else {
				return cpuDestroyer1();
			}
		}, 100);
	};

	const cpuDestroyer2 = () => {
		let randomOrientation = Math.random() < 0.5;

		let pick = Math.floor(Math.random() * 100);
		pick = Number(pick);

		let array = isCpuOptions[pick].line;
		let index = isCpuOptions[pick].index;

		setTimeout(() => {
			if (randomOrientation) {
				//this will be horizontal
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array][index + 1];
				let ex2 = isCpuBoard[array][index + 2];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					return cpuDestroyer2();
				} else {
					let updateDestroyer = Number(isDestroyerCpu2) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array][index + 1] = 1;
					isCpuBoard[array][index + 2] = 1;

					setIsDestroyerCpu2(updateDestroyer);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					console.log(isDestroyerCpu2);
					return cpuPatrol();
				}
			} else if (!randomOrientation) {
				//this will be vertical
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array + 1][index];
				let ex2 = isCpuBoard[array + 2][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					return cpuDestroyer2();
				} else {
					let updateDestroyer = Number(isDestroyerCpu2) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index];
					isCpuBoard[array + 1][index];
					isCpuBoard[array + 2][index];

					setIsDestroyerCpu2(updateDestroyer);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
					console.log(isDestroyerCpu2);
					return cpuPatrol();
				}
			} else {
				return cpuDestroyer2();
			}
		}, 100);
	};

	const cpuPatrol = () => {
		let randomOrientation = Math.random() < 0.5;

		let pick = Math.floor(Math.random() * 100);
		pick = Number(pick);

		let array = isCpuOptions[pick].line;
		let index = isCpuOptions[pick].index;

		setTimeout(() => {
			if (randomOrientation) {
				//this will be horizontal
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array][index + 1];

				if (ex0 != 0 || ex1 != 0) {
					return cpuPatrol();
				} else {
					let updatePatrol = Number(isPatrolCpu) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array][index + 1] = 1;

					setIsPatrolCpu(updatePatrol);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
				}
			} else if (!randomOrientation) {
				//this will be vertical
				let ex0 = isCpuBoard[array][index];
				let ex1 = isCpuBoard[array + 1][index];

				if (ex0 != 0 || ex1 != 0) {
					return cpuPatrol();
				} else {
					let updatePatrol = Number(isPatrolCpu) - 1;
					let updateTurn = Number(isTurn) + 1;

					isCpuBoard[array][index] = 1;
					isCpuBoard[array + 1][index] = 1;

					setIsPatrolCpu(updatePatrol);
					setIsTurn(updateTurn);
					console.log(isCpuBoard);
				}
			} else {
				return cpuPatrol();
			}
		}, 100);
	};

	/*const randomNumbers = (max) => {
		return Math.floor(Math.random() * max);
	};
	const cpuCarrier = () => {
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Number(randomNumbers(10));
			let randomIndex = Number(randomNumbers(10));
			let updateCarrier = Number(isCarrierCpu) - 1;

			let ex = isCpuBoard;

			let ex0 = ex[randomArray][randomIndex];
			console.log("ex0 horozontal", ex0, randomArray, randomIndex);
			let ex1 = ex[randomArray][randomIndex + 1];
			console.log("ex1 horizontal", ex1, randomArray, randomIndex + 1);
			let ex2 = ex[randomArray][randomIndex + 2];
			console.log("ex2 horizontal", ex2, randomArray, randomIndex + 2);
			let ex3 = ex[randomArray][randomIndex + 3];
			console.log("ex3 horizontal", ex3, randomArray, randomIndex + 3);
			let ex4 = ex[randomArray][randomIndex + 4];
			console.log("ex4 horizontal", ex4, randomArray, randomIndex + 4);

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				console.log("repeat");
				cpuCarrier();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;
				isCpuBoard[randomArray][randomIndex + 4] = 1;

				setIsCarrierCpu(updateCarrier);
				console.log(isCpuBoard);
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Number(randomNumbers(10));
			let randomIndex = Number(randomNumbers(10));
			let updateCarrier = Number(isCarrierCpu) - 1;

			let ex = isCpuBoard;

			let ex0 = ex[randomArray][randomIndex];
			console.log("ex0 vertical", ex0, randomArray, randomIndex);
			let ex1 = ex[randomArray + 1][randomIndex];
			console.log("ex1 vertical", ex1, randomArray + 1, randomIndex);
			let ex2 = ex[randomArray + 2][randomIndex];
			console.log("ex2 vertical", ex2, randomArray + 2, randomIndex);
			let ex3 = ex[randomArray + 3][randomIndex];
			console.log("ex3 vertical", ex3, randomArray + 3, randomIndex);
			let ex4 = ex[randomArray + 4][randomIndex];
			console.log("ex4 vartical", ex4, randomArray + 4, randomIndex);

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				console.log("repeate");
				cpuCarrier();
			} else {
				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 3][randomIndex] = 1;
				isCpuBoard[randomArray + 4][randomIndex] = 1;

				setIsCarrierCpu(updateCarrier);
				console.log(isCpuBoard);
			}
		} else {
			cpuCarrier();
		}
	};*/

	const playerSelection = (arrayNmbr, index) => {
		if (isVertical) {
			if (isCarrier) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];
				let ex3 = isPlayerBoard[arrayNmbr + 3][index];
				let ex4 = isPlayerBoard[arrayNmbr + 4][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
					alert("Can't place the carrier there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;
					isPlayerBoard[arrayNmbr + 3][index] = 1;
					isPlayerBoard[arrayNmbr + 4][index] = 1;

					let updateCarrier = Number(isCarrierAmnt) - 1;

					setIsCarrier(false);
					setIsVertical(false);
					setIsCarrierAmnt(updateCarrier);
				}
			} else if (isBattleship) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];
				let ex3 = isPlayerBoard[arrayNmbr + 3][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
					alert("Can't place the battleship there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;
					isPlayerBoard[arrayNmbr + 3][index] = 1;

					let updateBattleship = Number(isBattleshipAmnt) - 1;

					setIsBattleship(false);
					setIsVertical(false);
					setIsBattleshipAmnt(updateBattleship);
				}
			} else if (isDestroyer) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];
				let ex2 = isPlayerBoard[arrayNmbr + 2][index];

				if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
					alert("Can't place the destroyer there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;
					isPlayerBoard[arrayNmbr + 2][index] = 1;

					let updateDestroyer = Number(isDestroyerAmnt) - 1;

					setIsDestroyer(false);
					setIsVertical(false);
					setIsDestroyerAmnt(updateDestroyer);
				}
			} else if (isPatrol) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr + 1][index];

				if (ex0 != 0 || ex1 != 0) {
					alert("Can't place the patrol boat there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr + 1][index] = 1;

					let updatePatrol = Number(isPatrolAmnt) - 1;

					setIsPatrol(false);
					setIsVertical(false);
					setIsPatrolAmnt(updatePatrol);
				}
			} else {
				alert("Please, select a boat type");
			}
		} else if (isHorizontal) {
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

					let updateCarrier = Number(isCarrierAmnt) - 1;

					setIsCarrier(false);
					setIsHorizontal(false);
					setIsCarrierAmnt(updateCarrier);
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

					let updateBattleship = Number(isBattleshipAmnt) - 1;

					setIsBattleship(false);
					setIsHorizontal(false);
					setIsBattleshipAmnt(updateBattleship);
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

					let updateDestroyer = Number(isDestroyerAmnt) - 1;

					setIsDestroyer(false);
					setIsHorizontal(false);
					setIsDestroyerAmnt(updateDestroyer);
				}
			} else if (isPatrol) {
				let ex0 = isPlayerBoard[arrayNmbr][index];
				let ex1 = isPlayerBoard[arrayNmbr][index + 1];

				if (ex0 != 0 || ex1 != 0) {
					alert("Can't place the patrol boat there");
				} else {
					isPlayerBoard[arrayNmbr][index] = 1;
					isPlayerBoard[arrayNmbr][index + 1] = 1;

					let updatePatrol = Number(isPatrolAmnt) - 1;

					setIsDestroyer(false);
					setIsHorizontal(false);
					setIsPatrolAmnt(updatePatrol);
				}
			} else {
				alert("Please, select a boat type");
			}
		} else {
			alert("Please, select a direction (Horizontal or Vertical)");
		}
	};

	const carrierClass = () => {
		if (isCarrierAmnt == 0) {
			return "btn btn-primary m-1 d-none";
		} else {
			if (isCarrier) {
				return "btn btn-success m-1";
			} else {
				return "btn btn-primary m-1";
			}
		}
	};

	const battleshipClass = () => {
		if (isBattleshipAmnt == 0) {
			return "btn btn-primary m-1 d-none";
		} else {
			if (isBattleship) {
				return "btn btn-success m-1";
			} else {
				return "btn btn-primary m-1";
			}
		}
	};

	const destroyerClass = () => {
		if (isDestroyerAmnt == 0) {
			return "btn btn-primary m-1 d-none";
		} else {
			if (isDestroyer) {
				return "btn btn-success m-1";
			} else {
				return "btn btn-primary m-1";
			}
		}
	};

	const patrolClass = () => {
		if (isPatrolAmnt == 0) {
			return "btn btn-primary m-1 d-none";
		} else {
			if (isPatrol) {
				return "btn btn-success m-1";
			} else {
				return "btn btn-primary m-1";
			}
		}
	};

	const finishedBoatPlacing = () => {
		if (
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
			actions.updatePlayer(isPlayerBoard);
			actions.updateCpu(isCpuBoard);
			console.log(isCpuBoard);
			navigate("/game");
		} else {
			alert("Please place all your boats");
			console.log(isCarrierAmnt, "player carrier");
			console.log(isBattleshipAmnt, "player battleship");
			console.log(isDestroyerAmnt, "player destroyer");
			console.log(isPatrolAmnt, "player patrol");
			console.log(isCarrierCpu, "cpu carrier");
			console.log(isBattleshipCpu, "cpu battleship");
			console.log(isDestroyerCpu1, "cpu destroyer1");
			console.log(isDestroyerCpu2, "cpu destroyer2");
			console.log(isPatrolCpu, "cpu patrol");
		}
	};

	useEffect(() => {
		//setIsCpuOptions(store.cpuOptions);
		uniqueRandomNumber(100);
		setTimeout(() => {
			cpuCarrier();
		}, 10000);
	}, []);

	useEffect(() => {
		uniqueRandomNumber(100);
	}, [isSwitch]);
	//console.log(isHaveIt);

	/*useEffect(() => {
		uniqueRandomNumber(100);
		setIsPlayerBoard(store.playerBoard);
		setIsCpuBoard(store.cpuBoard);
		setIsCpuOptions(store.cpuOptions);

		const timer = setInterval(() => {
			cpuPick();
		}, 1000);
		return () => clearInterval(timer);
	}, [isPlayerTurn]);*/

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
								{isPlayerBoard.map((item, index) => (
									<div className="infoX" key={index}>
										{index + 1}
									</div>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								{isPlayerBoard[0].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(0, index)}
									>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{isPlayerBoard[1].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(1, index)}
									>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{isPlayerBoard[2].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(2, index)}
									>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{isPlayerBoard[3].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(3, index)}
									>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{isPlayerBoard[4].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(4, index)}
									>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{isPlayerBoard[5].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(5, index)}
									>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{isPlayerBoard[6].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(6, index)}
									>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{isPlayerBoard[7].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(7, index)}
									>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{isPlayerBoard[8].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(8, index)}
									>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{isPlayerBoard[9].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={() => playerSelection(9, index)}
									>
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
										setIsVertical(true);
										setIsHorizontal(false);
									}}
								>
									Vertical
								</button>
								<button
									className={isHorizontal ? "btn btn-success m-1" : "btn btn-primary m-1"}
									onClick={() => {
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
										setIsCarrier(true);
										setIsBattleship(false);
										setIsDestroyer(false);
										setIsPatrol(false);
									}}
								>
									Aircraft carrier ({isCarrierAmnt} left)
								</button>{" "}
								<br />
								<button
									className={battleshipClass()}
									onClick={() => {
										setIsCarrier(false);
										setIsBattleship(true);
										setIsDestroyer(false);
										setIsPatrol(false);
									}}
								>
									Battleship ({isBattleshipAmnt} left)
								</button>{" "}
								<br />
								<button
									className={destroyerClass()}
									onClick={() => {
										setIsCarrier(false);
										setIsBattleship(false);
										setIsDestroyer(true);
										setIsPatrol(false);
									}}
								>
									Destroyer ({isDestroyerAmnt} left)
								</button>{" "}
								<br />
								<button
									className={patrolClass()}
									onClick={() => {
										setIsCarrier(false);
										setIsBattleship(false);
										setIsDestroyer(false);
										setIsPatrol(true);
									}}
								>
									Patrol boat ({isPatrolAmnt} left)
								</button>
							</div>
							<h4 className="mt-3">
								3.- Click the button down below once you finished placing all the boats
							</h4>
							<div>
								<button
									type="button"
									className="btn btn-warning m-1"
									onClick={() => finishedBoatPlacing()}
								>
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
