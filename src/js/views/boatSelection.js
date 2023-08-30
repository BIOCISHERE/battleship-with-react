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
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
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

	const cpuCarrier = () => {
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 6);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];
			let ex3 = isCpuBoard[randomArray][randomIndex + 3];
			let ex4 = isCpuBoard[randomArray][randomIndex + 4];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				console.log("repeat");
				return cpuCarrier();
			} else {
				let updateCarrier = Number(isCarrierCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;
				isCpuBoard[randomArray][randomIndex + 4] = 1;

				setIsCarrierCpu(updateCarrier);
				console.log(isCpuBoard);
				return cpuBattleship();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Math.floor(Math.random() * 6);
			let randomIndex = Math.floor(Math.random() * 10);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];
			let ex3 = isCpuBoard[randomArray + 3][randomIndex];
			let ex4 = isCpuBoard[randomArray + 4][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0 || ex4 != 0) {
				console.log("repeat");
				return cpuCarrier();
			} else {
				let updateCarrier = Number(isCarrierCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 3][randomIndex] = 1;
				isCpuBoard[randomArray + 4][randomIndex] = 1;

				setIsCarrierCpu(updateCarrier);
				console.log(isCpuBoard);
				return cpuBattleship();
			}
		} else {
			return cpuCarrier();
		}
	};

	const cpuBattleship = () => {
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 7);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];
			let ex3 = isCpuBoard[randomArray][randomIndex + 3];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				console.log("repeat");
				return cpuBattleship();
			} else {
				let updateBattleship = Number(isBattleshipCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;
				isCpuBoard[randomArray][randomIndex + 3] = 1;

				setIsBattleshipCpu(updateBattleship);
				console.log(isCpuBoard);
				return cpuDestroyer1();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Math.floor(Math.random() * 7);
			let randomIndex = Math.floor(Math.random() * 10);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];
			let ex3 = isCpuBoard[randomArray + 3][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0 || ex3 != 0) {
				console.log("repeat");
				return cpuBattleship();
			} else {
				let updateBattleship = Number(isBattleshipCpu) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;
				isCpuBoard[randomArray + 3][randomIndex] = 1;

				setIsBattleshipCpu(updateBattleship);
				console.log(isCpuBoard);
				return cpuDestroyer1();
			}
		} else {
			return cpuBattleship();
		}
	};

	const cpuDestroyer1 = () => {
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 8);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				console.log("repeat");
				return cpuDestroyer1();
			} else {
				let updateDestroyer = Number(isDestroyerCpu1) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				setIsDestroyerCpu1(updateDestroyer);
				console.log(isCpuBoard);
				return cpuDestroyer2();
			}
		} else if (!randomOrientation) {
			//this will be vertical
			let randomArray = Math.floor(Math.random() * 8);
			let randomIndex = Math.floor(Math.random() * 10);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray + 1][randomIndex];
			let ex2 = isCpuBoard[randomArray + 2][randomIndex];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				console.log("repeat");
				return cpuDestroyer1();
			} else {
				let updateDestroyer = Number(isDestroyerCpu1) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsDestroyerCpu1(updateDestroyer);
				console.log(isCpuBoard);
				return cpuDestroyer2();
			}
		} else {
			return cpuDestroyer1();
		}
	};

	const cpuDestroyer2 = () => {
		let randomOrientation = Math.random() < 0.5;

		if (randomOrientation) {
			//this will be horizontal
			let randomArray = Math.floor(Math.random() * 10);
			let randomIndex = Math.floor(Math.random() * 8);

			let ex0 = isCpuBoard[randomArray][randomIndex];
			let ex1 = isCpuBoard[randomArray][randomIndex + 1];
			let ex2 = isCpuBoard[randomArray][randomIndex + 2];

			if (ex0 != 0 || ex1 != 0 || ex2 != 0) {
				console.log("repreat");
				return cpuDestroyer2();
			} else {
				let updateDestroyer = Number(isDestroyerCpu2) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray][randomIndex + 1] = 1;
				isCpuBoard[randomArray][randomIndex + 2] = 1;

				setIsDestroyerCpu2(updateDestroyer);
				console.log(isCpuBoard);
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
				console.log("repeat");
				return cpuDestroyer2();
			} else {
				let updateDestroyer = Number(isDestroyerCpu2) - 1;

				isCpuBoard[randomArray][randomIndex] = 1;
				isCpuBoard[randomArray + 1][randomIndex] = 1;
				isCpuBoard[randomArray + 2][randomIndex] = 1;

				setIsDestroyerCpu2(updateDestroyer);
				console.log(isCpuBoard);
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
		if (isVertical) {
			if (isCarrier) {
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
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9 || arrayNmbr + 2 > 9 || arrayNmbr + 3 > 9) {
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
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9 || arrayNmbr + 2 > 9) {
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
				} else if (arrayNmbr > 9 || arrayNmbr + 1 > 9) {
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
		}
	};

	useEffect(() => {
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
								{isCpuBoard.map((item, index) => (
									//we use the isCpuBoard to map the numbers
									//since now isPlayerboard is 15 arrays
									//if we use isPlayerboard to map it, it will map 15 numbers
									//and we only need 10
									<div className="infoX" key={index}>
										{index + 1}
									</div>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								{isPlayerBoard[0].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(0, index)}>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{isPlayerBoard[1].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(1, index)}>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{isPlayerBoard[2].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(2, index)}>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{isPlayerBoard[3].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(3, index)}>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{isPlayerBoard[4].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(4, index)}>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{isPlayerBoard[5].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(5, index)}>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{isPlayerBoard[6].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(6, index)}>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{isPlayerBoard[7].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(7, index)}>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{isPlayerBoard[8].map((item, index) => (
									<button className={actions.classManagerPlayer(item)} key={index} value={item} onClick={() => playerSelection(8, index)}>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{isPlayerBoard[9].map((item, index) => (
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
