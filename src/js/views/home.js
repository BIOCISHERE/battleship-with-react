import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [isPlayerName, setIsPlayerName] = useState("");

	return (
		<div className="container-fluid my-4">
			<div className="row">
				<div className="col-6 mx-auto my-auto">
					<form className="border border-dark text-center">
						<div className="m-3">
							<label
								htmlFor="inputPlayerName"
								className="form-label"
							>
								What is your name ?
							</label>
							<input
								type="text"
								className="form-control"
								id="inputPlayerName"
								aria-describedby="playerNameHelp"
								onChange={(e) =>
									setIsPlayerName(e.target.value)
								}
								value={isPlayerName}
							/>
							<div id="playerNameHelp" className="form-text">
								We'll use this name to let you know if you win
								or lose.
							</div>
						</div>
						<Link
							role="button"
							className="btn btn-primary my-2"
							to={"/game"}
							onClick={() => actions.savePlayerName(isPlayerName)}
						>
							Let's play battleship.
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
