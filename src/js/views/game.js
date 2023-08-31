import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Game = () => {
	const { store, actions } = useContext(Context); //global variables and functions

	const [isPlayerBoard, setIsPlayerBoard] = useState([]); //here we save the playerBoard from the context
	const [isCpuBoard, setIsCpuBoard] = useState([]); //here we save the cpuBoard from the context
	const [isCpuOptions, setIsCpuOptions] = useState([]); // here we save the attack options for the cpu from the context

	const [isPlayerTurn, setIsPlayerTurn] = useState(true); //true means player turn, false cpu turn

	const [isHaveIt, setIsHaveIt] = useState([]); //random array of numbers, we use it to attack using the isCpuOptions
	const [isTurn, setIsTurn] = useState(0); //we use it to select the element from the isHaveIt state like this: isHaveIt[isTurn]
	//we will be increasing the isTurn to get a different radom number from the isHaveIt state

	const [isPlayerLives, setIsPlayerLives] = useState(17); //if reaches 0, the player loses
	const [isCpuLives, setIsCpuLives] = useState(17); //if reaches 0, the cpu loses

	const [isWinner, setIsWinner] = useState(false); //if true, the game will stop

	const uniqueRandomNumber = (maxNmbr) => {
		//this function pushes random numbers to the isHaveIt state
		let random = Math.floor(Math.random() * maxNmbr); //generates random number, maxNmbr is how many numbers
		random = Number(random); //we make sure the random number is a number

		if (!isHaveIt.includes(random)) {
			//is the number is not in the isHaveIt state, we will add it
			let add = isHaveIt.concat(random); //we take all the content of the isHaveIt array and add the random number at the end
			setIsHaveIt(add); //update the isHaveIt state

			return random; //we return something, in this case the random number
		} else {
			//this executes if the random number is already in the isHaveIt state
			if (isHaveIt.length < maxNmbr) {
				//if the length of the isHaveIt state is less than the maxNumbr, we repeat the function
				return uniqueRandomNumber(maxNmbr);
			} else {
				//if the if statement above fails, we have reached the limit, then we stop the function
				return false;
			}
		}
	};

	const cpuPick = () => {
		//this function choose where to attack the player, one cell at the time
		if (isCpuLives == 0 || isPlayerLives == 0) {
			//if isCpuLives is 0 or isPlayerLives is 0, then someone has won
			setIsWinner(true); //this way we stop the game from continuing, and stop the cpu from attacking
		} else {
			// else the game is still on
			if (!isPlayerTurn) {
				//if isPlayerTurn is false, then is turn of the cpu
				let ex0 = isHaveIt[isTurn]; //we choose a random number from the isHaveIt state
				//we use isTurn state as an index is the isHaveIt state
				ex0 = Number(ex0); //we make sure is number

				//using ex0 we select a isCpuOption object which contains the line(array) and index to attack
				let ex1 = isCpuOptions[ex0].line;
				let ex2 = isCpuOptions[ex0].index;

				//now that we have the isCpuOptions line and index, we choose a cell from the player board to attack
				let picked = isPlayerBoard[ex1][ex2];

				//this avariable will be used later
				//this variable will add + 1 to the value of isTurn to not choose the same number from the isHaveIt state
				let updateTurn = Number(isTurn) + 1;

				//this variable will be used later
				//in case the cpu hits a boat successfully, we take one of the player lives
				let updatePlayerLives = Number(isPlayerLives) - 1;

				if (picked == 1) {
					//if the choosen cell is 1, then we make it 2
					//1 means a piece of a boat, 2 means a sunken pieace of a boat
					isPlayerBoard[ex1][ex2] = 2;

					setIsTurn(updateTurn); //update isTrun
					setIsPlayerLives(updatePlayerLives); //update isPlayerLives

					setIsPlayerTurn(true); //change it to true, so it's the player turn to attack
				} /*else if (picked == 2) {
					looking at this now i think this if statemnet will never happen anymore since
					isHaveIt has random unique numbers, so the cpu will never attack a already sunken
					pert of the boat

					isPlayerBoard[ex1][ex2] = 2;

					setIsTurn(updateTurn);

					setIsPlayerTurn(true);
				}*/ else {
					//if the choosen cell is not 1, then we make it 3
					//3 means a missed shot, no boats were hit
					isPlayerBoard[ex1][ex2] = 3;

					setIsTurn(updateTurn); //update isTurn
					setIsPlayerTurn(true); //change it to true, so it's the player turn to attack
				}
			}
		}
	};

	const playerPick = (target, arrayNmbr, index) => {
		//this function manages the attack choises of the player
		//we get the taget and index props from the map function
		//this function works in a similar way like the cpuPick function
		if (isCpuLives == 0 || isPlayerLives == 0) {
			setIsWinner(true);
			if (isCpuLives == 0) {
				//if isCpuLives is 0, then the player has won, and we return a alert
				alert(`${store.playerName} has won!`);
			} else {
				//else the cpu has won
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

					setIsPlayerTurn(false);
				}
			} else {
				alert("It's not your turn");
			}
		}
	};

	const turnAndWinner = () => {
		//this funtion return a html tag with the information of whos turn is to attack
		// or if someone has won, announce who has won
		if (isWinner) {
			//if isWinner is true, someone has won
			if (isCpuLives == 0) {
				//if isCpuLives is 0, the player has won
				return <h1>{store.playerName} has won!</h1>;
			} else {
				//else the cpu has won
				return <h1>CPU has won!</h1>;
			}
		} else {
			//if isWinner is false, then the game is still on
			if (isPlayerTurn) {
				//if isPlayerTurn is true, we announce that is the player turn to attack
				return <h1>It's {store.playerName} turn</h1>;
			} else {
				//else is the cpu turn to attack
				return <h1>It's CPU turn</h1>;
			}
		}
	};

	useEffect(() => {
		uniqueRandomNumber(100); //we execute the this function on load to get the random numbers to the isHaveIt state
		setIsPlayerBoard(store.playerBoard); //we get the playerBoard from the context
		setIsCpuBoard(store.cpuBoard); // we get the cpuBoard from the context
		setIsCpuOptions(store.cpuOptions); //we get cpuOptions from the context, this has all the attack options for the cpu

		const timer = setInterval(() => {
			//we execute the cpuPick with delay to make the feel that the cpu is thinking
			cpuPick();
		}, 1000);
		return () => clearInterval(timer); //this makes sure the functions only executes once
	}, [isPlayerTurn]);

	return (
		<div className="container-fluid border border-dark m-0 p-0">
			<div className="text-center">
				{turnAndWinner()} {/* here we announce if someone has won, or whos turn is  */}
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
						<h3>
							{store.playerName} ({isPlayerLives} lives left)
						</h3>
						<div className="row">
							<div className="fitX">
								{store.playerBoard[0].map((item, index) => (
									//we use playerboard to map the numbers
									//since an array has a length of 10 it will map 10 numbers
									<div className="infoX" key={index}>
										{index + 1}
									</div>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								{store.playerBoard[0].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{store.playerBoard[1].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{store.playerBoard[2].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{store.playerBoard[3].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{store.playerBoard[4].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{store.playerBoard[5].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{store.playerBoard[6].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{store.playerBoard[7].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{store.playerBoard[8].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{store.playerBoard[9].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item}>
										J{index + 1}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="col text-center">
						<h3>CPU ({isCpuLives} lives left)</h3>
						<div className="row">
							<div className="fitX">
								{store.cpuBoard.map((item, index) => (
									<div className="infoX" key={index}>
										{index + 1}
									</div>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								{store.cpuBoard[0].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 0, index)}>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{store.cpuBoard[1].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 1, index)}>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{store.cpuBoard[2].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 2, index)}>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{store.cpuBoard[3].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 3, index)}>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{store.cpuBoard[4].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 4, index)}>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{store.cpuBoard[5].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 5, index)}>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{store.cpuBoard[6].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 6, index)}>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{store.cpuBoard[7].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 7, index)}>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{store.cpuBoard[8].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 8, index)}>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{store.cpuBoard[9].map((item, index) => (
									<button className={actions.classManagerCpu(item)} key={index} value={item} onClick={(e) => playerPick(e.target.value, 9, index)}>
										J{index + 1}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
