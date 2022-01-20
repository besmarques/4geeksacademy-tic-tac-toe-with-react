import React from "react";

const Game = () => {
	let m = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	let symbolCounter = 0;
	let symbol = "";

	//document.getElementById("teste").innerHTML = m;

	function changeInner(e) {
		if (symbolCounter % 2 === 0 && symbolCounter < 8) {
			symbol = "X";
		} else {
			symbol = "O";
		}
		m[e] = symbol;
		console.log(m);
		document.getElementsByClassName("btn")[e].innerHTML = symbol;

		if (
			(m[0] == m[1] && m[0] == m[2]) ||
			(m[3] == m[4] && m[3] == m[5]) ||
			(m[6] == m[7] && m[6] == m[8]) ||
			(m[0] == m[3] && m[0] == m[6]) ||
			(m[1] == m[4] && m[1] == m[7]) ||
			(m[2] == m[5] && m[2] == m[8]) ||
			(m[0] == m[4] && m[0] == m[8]) ||
			(m[2] == m[4] && m[2] == m[6])
		) {
			console.log("Winner");
		}
	}

	function checkwinner() {}

	return (
		<>
			<p>teste</p>

			<div class="row d-flex justify-content-center text-center">
				<div class="col-1 border-end border-bottom border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[0] = symbol;
							checkwinner();
							changeInner(0);
							symbolCounter++;
						}}>
						1
					</button>
				</div>
				<div class="col-1 border-end border-secondary border-bottom">
					<button
						class="btn"
						onClick={(e) => {
							//m[1] = symbol;
							checkwinner();
							changeInner(1);
							symbolCounter++;
						}}>
						2
					</button>
				</div>
				<div class="col-1 border-secondary border-bottom">
					<button
						class="btn"
						onClick={(e) => {
							//m[2] = symbol;
							checkwinner();
							changeInner(2);
							symbolCounter++;
						}}>
						3
					</button>
				</div>
			</div>
			<div class="row d-flex justify-content-center text-center">
				<div class="col-1 border-end border-bottom border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[3] = symbol;
							checkwinner();
							changeInner(3);
							symbolCounter++;
						}}>
						4
					</button>
				</div>
				<div class="col-1 border-end border-bottom border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[4] = symbol;
							checkwinner();
							changeInner(4);
							symbolCounter++;
						}}>
						5
					</button>
				</div>
				<div class="col-1 border-bottom border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[5] = symbol;
							checkwinner();
							changeInner(5);
							symbolCounter++;
						}}>
						6
					</button>
				</div>
			</div>
			<div class="row d-flex justify-content-center text-center">
				<div class="col-1 border-end border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[6] = symbol;
							checkwinner();
							changeInner(6);
							symbolCounter++;
						}}>
						7
					</button>
				</div>
				<div class="col-1 border-end border-secondary">
					<button
						class="btn"
						onClick={(e) => {
							//m[7] = symbol;
							checkwinner();
							changeInner(7);
							symbolCounter++;
						}}>
						8
					</button>
				</div>
				<div class="col-1">
					<button
						class="btn"
						onClick={(e) => {
							//m[8] = symbol;
							checkwinner();
							changeInner(8);
							symbolCounter++;
						}}>
						9
					</button>
				</div>
			</div>
		</>
	);
};

export default Game;
