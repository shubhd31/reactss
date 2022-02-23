import axios from 'axios';
import './AboutUs.css'
import * as React from 'react';
class AboutUs extends React.Component {
    state = {
        advice: '',
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;

                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="app_advise">
                <div className="card_advise">
                    <span className="heading_advise">{this.state.advice}</span>
                    <button className="buttonAdvice" onClick={this.fetchAdvice}>
                        <span className="span_advise">Need any Help?</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default AboutUs;