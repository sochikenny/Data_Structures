const HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
	let currentBestTeam = '' //initialize an empty string
	const scores ={[currentBestTeam]: 0}  //set it up in the hash table 
	
	for(let i = 0; i < competitions.length; i++){  //traverse thru competitions array
		const result = results[i]                 //results is also being traversed
		const [homeTeam, awayTeam] = competitions[i] //destructure competitions 
        
        //if result is 1 then pick hometeam else pick awayteam as winning team
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam
        
        //function to construct the initialized hash table with winning team
		updateScores(winningTeam, 3, scores)
        
        //if points for winning team is greater than points for currentbest then update currentbest to winning team
		if (scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam
		}
	}
	//after we break out of the loop, we return currentBestTeam that should be updated
	return currentBestTeam
}

//Helper function that constructs the scores hash table 
function updateScores(team, points, scores){
	if(!(team in scores)){
		scores[team] = 0
	}
	scores[team] += points
}
