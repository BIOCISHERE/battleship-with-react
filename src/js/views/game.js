import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Game = () => {
	const { store, actions } = useContext(Context);

	const [isPlayerBoard, setIsPlayerBoard] = useState([]);
	const [isCpuBoard, setIsCpuBoard] = useState([]);
	const [isCpuOptions, setIsCpuOptions] = useState([]);

	const [isPlayerTurn, setIsPlayerTurn] = useState(true);
	const [isHaveIt, setIsHaveIt] = useState([]);
	const [isTurn, setIsTurn] = useState(0);

	const uniqueRandomNumber = (maxNmbr) => {
		let random = Math.floor(Math.random() * maxNmbr);
		random = Number(random);

		if (!isHaveIt.includes(random)) {
			let add = isHaveIt.concat(random);
			setIsHaveIt(add);
			//console.log(add, "just pushed");
			return random;
		} else {
			if (isHaveIt.length < maxNmbr) {
				//console.log("again");
				return uniqueRandomNumber(maxNmbr);
			} else {
				//console.log("no more numbers available");
				return false;
			}
		}
	};

	const cpuPick = () => {
		if (!isPlayerTurn) {
			let ex0 = isHaveIt[isTurn];
			ex0 = Number(ex0);

			let ex1 = isCpuOptions[ex0].line;
			let ex2 = isCpuOptions[ex0].index;

			let picked = isPlayerBoard[ex1][ex2];

			let updateTurn = Number(isTurn) + 1;

			if (picked == 1) {
				isPlayerBoard[ex1][ex2] = 2;
				actions.updatePlayer(isPlayerBoard);

				//console.log(isTurn, "antes");
				setIsTurn(updateTurn);
				//console.log(isTurn, "despues");
				setIsPlayerTurn(true);
			} else if (picked == 2) {
				isPlayerBoard[ex1][ex2] = 2;
				actions.updatePlayer(isPlayerBoard);

				//console.log(isTurn, "antes");
				setIsTurn(updateTurn);
				//console.log(isTurn, "despues");
				setIsPlayerTurn(true);
			} else {
				isPlayerBoard[ex1][ex2] = 3;
				actions.updatePlayer(isPlayerBoard);

				//console.log(isTurn, "antes");
				setIsTurn(updateTurn);
				//console.log(isTurn, "despues");
				setIsPlayerTurn(true);
			}
		}
	};

	/*const cpuPick = (limit) => {
		if (!isPlayerTurn) {
			let random = Math.floor(Math.random() * limit);
			let random1 = random;

			let ex1 = Number(isCpuOptions[random1].line);

			let ex2 = Number(isCpuOptions[random1].index);

			let picked = isPlayerBoard[ex1][ex2];

			let removeFromOptions = isCpuOptions.splice(random1, 1);
			console.log(removeFromOptions, "este es el remove options");

			if (picked == 1) {
				isPlayerBoard[ex1][ex2] = 2;
				actions.updatePlayer(isPlayerBoard);

				max--;
				console.log(isCpuOptions, "esto es isCpuOptions");
				actions.updateOptions(isCpuOptions);
				setIsPlayerTurn(true);
				console.log(max, "max");
			} else if (picked == 2) {
				isPlayerBoard[ex1][ex2] = 2;
				actions.updatePlayer(isPlayerBoard);

				max--;
				console.log(isCpuOptions, "esto es isCpuOptions");
				actions.updateOptions(isCpuOptions);
				setIsPlayerTurn(true);
				console.log(max, "max");
			} else {
				isPlayerBoard[ex1][ex2] = 3;
				actions.updatePlayer(isPlayerBoard);

				max--;
				console.log(isCpuOptions, "esto es isCpuOptions");
				actions.updateOptions(isCpuOptions);
				setIsPlayerTurn(true);
				console.log(max, "max");
			}
			//console.log(picked);
		}
	};*/

	/*const cpuPick = () => {
		if (!isPlayerTurn) {
			for (let i = 0; i < Infinity; i++) {
				let random = Math.floor(Math.random() * 100);

				let whichArray = isCpuOptions[random].line;
				let whichIndex = isCpuOptions[random].index;
				let isUsed = isCpuOptions[random].used;

				let picked = isPlayerBoard[whichArray][whichIndex];

				if (isUsed === false) {
					let changeCpuOptions = { line: whichArray, index: whichIndex, used: true };

					if (picked == 1) {
						isPlayerBoard[whichArray][whichIndex] = 2;
						actions.updatePlayer(isPlayerBoard);

						//let changeCpuOptions = { line: whichArray, index: whichIndex, used: true };
						setIsCpuOptions[random] = changeCpuOptions;
						//actions.updateOptions(isCpuOptions);

						setIsPlayerTurn(true);
						break;
					} else if (picked == 2) {
						isPlayerBoard[whichArray][whichIndex] = 2;
						actions.updatePlayer(isPlayerBoard);

						//let changeCpuOptions = { line: whichArray, index: whichIndex, used: true };
						setIsCpuOptions[random] = changeCpuOptions;
						//actions.updateOptions(isCpuOptions);

						setIsPlayerTurn(true);
						break;
					} else {
						isPlayerBoard[whichArray][whichIndex] = 3;
						actions.updatePlayer(isPlayerBoard);

						//let changeCpuOptions = { line: whichArray, index: whichIndex, used: true };
						setIsCpuOptions[random] = changeCpuOptions;
						//actions.updateOptions(isCpuOptions);

						setIsPlayerTurn(true);
						break;
					}
				} else {
					continue;
				}
			}
		}
	};*/

	useEffect(() => {
		setIsPlayerBoard(store.playerBoard);
		setIsCpuBoard(store.cpuBoard);
		setIsCpuOptions(store.cpuOptions);
	}, []);

	useEffect(() => {
		uniqueRandomNumber(100);
		const timer = setInterval(() => {
			cpuPick();
		}, 1000);
		return () => clearInterval(timer);
	}, [isPlayerTurn]);

	return (
		<div className="container-fluid border border-dark m-0 p-0">
			<div className="text-center">
				{isPlayerTurn ? <h1>It's {store.playerName} turn</h1> : <h1>It's CPU turn. </h1>}
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
						<h3>CPU</h3>
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
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[0][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[0][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[0][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{store.cpuBoard[1].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[1][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[1][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[1][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{store.cpuBoard[2].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[2][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[2][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[2][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{store.cpuBoard[3].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[3][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[3][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[3][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{store.cpuBoard[4].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[4][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[4][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[4][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{store.cpuBoard[5].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[5][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[5][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[5][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{store.cpuBoard[6].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[6][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[6][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[6][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{store.cpuBoard[7].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[7][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[7][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[7][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{store.cpuBoard[8].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[8][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[8][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[8][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{store.cpuBoard[9].map((item, index) => (
									<button
										className={actions.classManagerCpu(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (isPlayerTurn) {
												if (e.target.value == 1) {
													isCpuBoard[9][index] = 2;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												} else if (e.target.value == 2) {
													isCpuBoard[9][index] = 2;
													actions.updateCpu(isCpuBoard);
													//setIsPlayerTurn(false);
												} else {
													isCpuBoard[9][index] = 3;
													actions.updateCpu(isCpuBoard);
													setIsPlayerTurn(false);
												}
											} else {
												alert("It's not your turn");
											}
										}}
									>
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
