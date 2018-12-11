var React = require('react');

class Popular extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(language) {
		this.setState(function() {
			return {
				selectedLanguage: language
			}
		});
	}

	render() {
		const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<ul className="languages">
			{languages.map(function (language) {
				return (
					<li
						style={ language === this.state.selectedLanguage ? { color: 'orange'} : null }
						onClick={this.updateLanguage.bind(null, language)}
						key={language}>
						{language}
					</li>
				)
			}, this)}
			</ul>
		)
	}
}

module.exports = Popular;