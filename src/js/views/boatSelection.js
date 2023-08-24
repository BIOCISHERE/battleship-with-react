import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const BoatSelection = () => {
	const { store, actions } = useContext(Context);

	const [isPlayerBoard, setIsPlayerBoard] = useState([]);
	const [isCpuBoard, setIsCpuBoard] = useState([]);
	const [isCpuOptions, setIsCpuOptions] = useState([]);

	const [isPlayerTurn, setIsPlayerTurn] = useState(true);

	const [isHaveIt, setIsHaveIt] = useState([]);
	const [isTurn, setIsTurn] = useState(0);

	const [isPlayerLives, setIsPlayerLives] = useState(18);
	const [isCpuLives, setIsCpuLives] = useState(18);

	const [isWinner, setIsWinner] = useState(false);

	const uniqueRandomNumber = (maxNmbr) => {
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
	};

	const cpuPick = () => {
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
	};

	const playerPick = (target, arrayNmbr, index) => {
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
	};

	const turnAndWinner = () => {
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
	};

	useEffect(() => {
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
	}, [isPlayerTurn]);

	return (
		<div className="container-fluid border border-dark m-0 p-0">
			<div className="text-center">
				{turnAndWinner()}
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
								{store.playerBoard.map((item, index) => (
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
						<h3>Setting up your naval fleet</h3>
						<div className="row">
							<h4 className="mt-3">1.- Choose which orientation</h4>
							<div>
								<button className="btn btn-success m-1">Vertical</button>
								<button className="btn btn-danger m-1">Horizontal</button>
							</div>
							<h4 className="mt-3">2.- Choose a boat</h4>
							<div>
								<button className="btn btn-primary m-1">Aircraft carrier</button> <br />
								<button className="btn btn-primary m-1">Battleship</button> <br />
								<button className="btn btn-primary m-1">Destroyer</button> <br />
								<button className="btn btn-primary m-1">Patrol boat</button>
							</div>
							<h4 className="mt-3">3.- Click the button down below to start if finished</h4>
							<div>
								<Link role="button" className="btn btn-warning m-1" to={"/game"}>
									Ready, set, go!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
