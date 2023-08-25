import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

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
	//const [isCpuBoard, setIsCpuBoard] = useState([]);
	//const [isCpuOptions, setIsCpuOptions] = useState([]);

	//const [isPlayerTurn, setIsPlayerTurn] = useState(true);

	//const [isHaveIt, setIsHaveIt] = useState([]);
	//const [isTurn, setIsTurn] = useState(0);

	//const [isPlayerLives, setIsPlayerLives] = useState(18);
	//const [isCpuLives, setIsCpuLives] = useState(18);

	//const [isWinner, setIsWinner] = useState(false);
	// <-------------------------  boat selection ---------------------------->
	const [isVertical, setIsVertical] = useState(false);
	const [isHorizontal, setIsHorizontal] = useState(false);

	const [isCarrier, setIsCarrier] = useState(false); //5 piece boat
	const [isCarrierAmnt, setIsCarrierAmnt] = useState(1);

	const [isBattleship, setIsBattleship] = useState(false); //4 piece boat
	const [isBattleshipAmnt, setIsBattleshipAmnt] = useState(1);

	const [isDestroyer, setIsDestroyer] = useState(false); //3 piece boat
	const [isDestroyerAmnt, setIsDestroyerAmnt] = useState(2);

	const [isPatrol, setIsPatrol] = useState(false); //2 piece boat
	const [isPatrolAmnt, setIsPatrolAmnt] = useState(1);

	/*const uniqueRandomNumber = (maxNmbr) => {
		let random = Math.floor(Math.random() * maxNmbr);
		random = Number(random);

		if (!isHaveIt.includes(random)) {
			let add = isHaveIt.concat(random);
			setIsHaveIt(add);

			return random;
		} else {
			if (isHaveIt.length < maxNmbr) {
				return uniqueRandomNumber(maxNmbr);
			} else {
				return false;
			}
		}
	};*/

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
		if (isCarrierAmnt == 0 && isBattleshipAmnt == 0 && isDestroyerAmnt == 0 && isPatrolAmnt == 0) {
			actions.updatePlayer(isPlayerBoard);
			navigate("/game");
		} else {
			alert("Please place all your boats");
		}
	};

	/*useEffect(() => {
		setIsPlayerBoard(store.playerBoard);
		setIsCpuBoard(store.cpuBoard);
		setIsCpuOptions(store.cpuOptions);
	}, []);

	useEffect(() => {
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
