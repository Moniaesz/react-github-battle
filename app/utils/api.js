const axios = require('axios');

const id = '';
const sec = '';
const params = `?client_id=${id}&client_secret$={sec}`;

function getProfile(username) {
	return axios.get(`https://api.github.com/users/${username}${params}`)
		.then(({ data }) => data);
}

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getStarCount(repos) {
	return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore( { followers }, repos) {
	const totalStars = getStarCount(repos);

	return (followers * 3) + totalStars;
}

function handleError(error) {
	console.warn(error);
	return null;
}

function getUserData(player) {
	return axios.all([
		getProfile(player),
		getRepos(player)
	]).then(( [profile, repos] ) => ({
			profile,
			score: calculateScore(profile, repos)
	}));
}

function sortPlayers(players) {
	return players.sort((a,b) => b.score - a.score);
}

module.exports = {
	battle (players) {
		return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handleError);
	},
	fetchPopularRepos (lang) {
		const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

		return axios.get(encodedURI)
			.then(( {data} ) => data.items);
	}
};