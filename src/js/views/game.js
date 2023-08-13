import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Game = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid border border-dark">
			<h1>Battleship</h1>
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h3>{store.playerName}</h3>
						<div className="row">
							<div className="fitX">
								<div className="infoX">1</div>
								<div className="infoX">2</div>
								<div className="infoX">3</div>
								<div className="infoX">4</div>
								<div className="infoX">5</div>
								<div className="infoX">6</div>
								<div className="infoX">7</div>
								<div className="infoX">8</div>
								<div className="infoX">9</div>
								<div className="infoX">10</div>
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								<button className="square top-left">A1</button>
								<button className="square">A2</button>
								<button className="square">A3</button>
								<button className="square">A4</button>
								<button className="square">A5</button>
								<button className="square">A6</button>
								<button className="square">A7</button>
								<button className="square">A8</button>
								<button className="square">A9</button>
								<button className="square top-right">
									A10
								</button>
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								<button className="square">B1</button>
								<button className="square">B2</button>
								<button className="square">B3</button>
								<button className="square">B4</button>
								<button className="square">B5</button>
								<button className="square">B6</button>
								<button className="square">B7</button>
								<button className="square">B8</button>
								<button className="square">B9</button>
								<button className="square">B10</button>
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								<button className="square">C1</button>
								<button className="square">C2</button>
								<button className="square">C3</button>
								<button className="square">C4</button>
								<button className="square">C5</button>
								<button className="square">C6</button>
								<button className="square">C7</button>
								<button className="square">C8</button>
								<button className="square">C9</button>
								<button className="square">C10</button>
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								<button className="square">D1</button>
								<button className="square">D2</button>
								<button className="square">D3</button>
								<button className="square">D4</button>
								<button className="square">D5</button>
								<button className="square">D6</button>
								<button className="square">D7</button>
								<button className="square">D8</button>
								<button className="square">D9</button>
								<button className="square">D10</button>
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								<button className="square">E1</button>
								<button className="square">E2</button>
								<button className="square">E3</button>
								<button className="square">E4</button>
								<button className="square">E5</button>
								<button className="square">E6</button>
								<button className="square">E7</button>
								<button className="square">E8</button>
								<button className="square">E9</button>
								<button className="square">E10</button>
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								<button className="square">F1</button>
								<button className="square">F2</button>
								<button className="square">F3</button>
								<button className="square">F4</button>
								<button className="square">F5</button>
								<button className="square">F6</button>
								<button className="square">F7</button>
								<button className="square">F8</button>
								<button className="square">F9</button>
								<button className="square">F10</button>
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								<button className="square">G1</button>
								<button className="square">G2</button>
								<button className="square">G3</button>
								<button className="square">G4</button>
								<button className="square">G5</button>
								<button className="square">G6</button>
								<button className="square">G7</button>
								<button className="square">G8</button>
								<button className="square">G9</button>
								<button className="square">G10</button>
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								<button className="square">H1</button>
								<button className="square">H2</button>
								<button className="square">H3</button>
								<button className="square">H4</button>
								<button className="square">H5</button>
								<button className="square">H6</button>
								<button className="square">H7</button>
								<button className="square">H8</button>
								<button className="square">H9</button>
								<button className="square">H10</button>
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								<button className="square">I1</button>
								<button className="square">I2</button>
								<button className="square">I3</button>
								<button className="square">I4</button>
								<button className="square">I5</button>
								<button className="square">I6</button>
								<button className="square">I7</button>
								<button className="square">I8</button>
								<button className="square">I9</button>
								<button className="square">I10</button>
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								<button className="square bot-left">J1</button>
								<button className="square">J2</button>
								<button className="square">J3</button>
								<button className="square">J4</button>
								<button className="square">J5</button>
								<button className="square">J6</button>
								<button className="square">J7</button>
								<button className="square">J8</button>
								<button className="square">J9</button>
								<button className="square bot-right">
									J10
								</button>
							</div>
						</div>
					</div>
					<div className="col text-center">
						<h3>CPU</h3>
						<div className="row">
							<div className="fitX">
								<div className="infoX">1</div>
								<div className="infoX">2</div>
								<div className="infoX">3</div>
								<div className="infoX">4</div>
								<div className="infoX">5</div>
								<div className="infoX">6</div>
								<div className="infoX">7</div>
								<div className="infoX">8</div>
								<div className="infoX">9</div>
								<div className="infoX">10</div>
							</div>
							<div className="fitY">
								<div className="infoY">A</div>
								<button className="square top-left">A1</button>
								<button className="square">A2</button>
								<button className="square">A3</button>
								<button className="square">A4</button>
								<button className="square">A5</button>
								<button className="square">A6</button>
								<button className="square">A7</button>
								<button className="square">A8</button>
								<button className="square">A9</button>
								<button className="square top-right">
									A10
								</button>
							</div>
							<div className="fitY">
								<div className="infoY">B</div>
								<button className="square">B1</button>
								<button className="square">B2</button>
								<button className="square">B3</button>
								<button className="square">B4</button>
								<button className="square">B5</button>
								<button className="square">B6</button>
								<button className="square">B7</button>
								<button className="square">B8</button>
								<button className="square">B9</button>
								<button className="square">B10</button>
							</div>
							<div className="fitY">
								<div className="infoY">C</div>
								<button className="square">C1</button>
								<button className="square">C2</button>
								<button className="square">C3</button>
								<button className="square">C4</button>
								<button className="square">C5</button>
								<button className="square">C6</button>
								<button className="square">C7</button>
								<button className="square">C8</button>
								<button className="square">C9</button>
								<button className="square">C10</button>
							</div>
							<div className="fitY">
								<div className="infoY">D</div>
								<button className="square">D1</button>
								<button className="square">D2</button>
								<button className="square">D3</button>
								<button className="square">D4</button>
								<button className="square">D5</button>
								<button className="square">D6</button>
								<button className="square">D7</button>
								<button className="square">D8</button>
								<button className="square">D9</button>
								<button className="square">D10</button>
							</div>
							<div className="fitY">
								<div className="infoY">E</div>
								<button className="square">E1</button>
								<button className="square">E2</button>
								<button className="square">E3</button>
								<button className="square">E4</button>
								<button className="square">E5</button>
								<button className="square">E6</button>
								<button className="square">E7</button>
								<button className="square">E8</button>
								<button className="square">E9</button>
								<button className="square">E10</button>
							</div>
							<div className="fitY">
								<div className="infoY">F</div>
								<button className="square">F1</button>
								<button className="square">F2</button>
								<button className="square">F3</button>
								<button className="square">F4</button>
								<button className="square">F5</button>
								<button className="square">F6</button>
								<button className="square">F7</button>
								<button className="square">F8</button>
								<button className="square">F9</button>
								<button className="square">F10</button>
							</div>
							<div className="fitY">
								<div className="infoY">G</div>
								<button className="square">G1</button>
								<button className="square">G2</button>
								<button className="square">G3</button>
								<button className="square">G4</button>
								<button className="square">G5</button>
								<button className="square">G6</button>
								<button className="square">G7</button>
								<button className="square">G8</button>
								<button className="square">G9</button>
								<button className="square">G10</button>
							</div>
							<div className="fitY">
								<div className="infoY">H</div>
								<button className="square">H1</button>
								<button className="square">H2</button>
								<button className="square">H3</button>
								<button className="square">H4</button>
								<button className="square">H5</button>
								<button className="square">H6</button>
								<button className="square">H7</button>
								<button className="square">H8</button>
								<button className="square">H9</button>
								<button className="square">H10</button>
							</div>
							<div className="fitY">
								<div className="infoY">I</div>
								<button className="square">I1</button>
								<button className="square">I2</button>
								<button className="square">I3</button>
								<button className="square">I4</button>
								<button className="square">I5</button>
								<button className="square">I6</button>
								<button className="square">I7</button>
								<button className="square">I8</button>
								<button className="square">I9</button>
								<button className="square">I10</button>
							</div>
							<div className="fitY">
								<div className="infoY">J</div>
								<button className="square bot-left">J1</button>
								<button className="square">J2</button>
								<button className="square">J3</button>
								<button className="square">J4</button>
								<button className="square">J5</button>
								<button className="square">J6</button>
								<button className="square">J7</button>
								<button className="square">J8</button>
								<button className="square">J9</button>
								<button className="square bot-right">
									J10
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
