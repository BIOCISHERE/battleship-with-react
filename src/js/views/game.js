import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Game = () => {
	const { store, actions } = useContext(Context);

	const [isPlayerBoard, setIsPlayerBoard] = useState([]);
	const [isCpuBoard, setIsCpuBoard] = useState([]);
	const [isCpuOptions, setIsCpuOptions] = useState([]);

	const [isPlayerTurn, setIsPlayerTurn] = useState(true);

	useEffect(() => {
		setIsPlayerBoard(store.playerBoard);
		setIsCpuBoard(store.cpuBoard);
		setIsCpuOptions(store.cpuOptions);
	}, []);

	return (
		<div className="container-fluid border border-dark m-0 p-0">
			<div className="text-center">
				{isPlayerTurn ? <h1>It's {store.playerName} turn</h1> : <h1>It's CPU turn</h1>}
				<span className="text-primary">A blue box represents an empty space</span> <br />
				<span className="text-secondary">A grey box represents a piece of a ship</span> <br />
				<span className="text-danger">A red box represents a ship that has been hit</span> <br />
				<span>A white box represents a missed shot</span>
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
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[0][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[0][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[0][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										A{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								{store.playerBoard[1].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[1][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[1][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[1][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										B{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								{store.playerBoard[2].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[2][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[2][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[2][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										C{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								{store.playerBoard[3].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[3][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[3][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[3][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										D{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								{store.playerBoard[4].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[4][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[4][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[4][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										E{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								{store.playerBoard[5].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[5][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[5][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[5][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										F{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								{store.playerBoard[6].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[6][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[6][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[6][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										G{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								{store.playerBoard[7].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[7][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[7][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[7][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										H{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								{store.playerBoard[8].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[8][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[8][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[8][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
										I{index + 1}
									</button>
								))}
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								{store.playerBoard[9].map((item, index) => (
									<button
										className={actions.classManagerPlayer(item)}
										key={index}
										value={item}
										onClick={(e) => {
											if (e.target.value == 1) {
												isPlayerBoard[9][index] = 2;
												actions.updatePlayer(isPlayerBoard);
											} else if (e.target.value == 2) {
												isPlayerBoard[9][index] == 2;
												actions.updatePlayer(isPlayerBoard);
											} else {
												isPlayerBoard[9][index] = 3;
												actions.updatePlayer(isPlayerBoard);
											}
										}}
									>
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
													setIsPlayerTurn(false);
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
											if (e.target.value == 1) {
												isCpuBoard[1][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[1][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[1][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[2][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[2][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[2][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[3][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[3][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[3][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[4][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[4][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[4][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[5][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[5][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[5][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[6][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[6][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[6][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[7][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[7][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[7][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[8][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[8][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[8][index] = 3;
												actions.updateCpu(isCpuBoard);
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
											if (e.target.value == 1) {
												isCpuBoard[9][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else if (e.target.value == 2) {
												isCpuBoard[9][index] = 2;
												actions.updateCpu(isCpuBoard);
											} else {
												isCpuBoard[9][index] = 3;
												actions.updateCpu(isCpuBoard);
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
