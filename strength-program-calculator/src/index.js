import React from 'react';
import ReactDOM from 'react-dom';

const warmup_percentages = [0.40, 0.50, 0.60];
const week1_percentages = [0.65, 0.75, 0.85];
const week2_percentages = [0.70, 0.80, 0.90];
const week3_percentages = [0.75, 0.85, 0.95];

function calculate_weights(percentage_array, training_max) {
    var weight_array = [];
    weight_array.push(Math.round(percentage_array[0] * training_max/5)*5);
    weight_array.push(Math.round(percentage_array[1] * training_max/5)*5);
    weight_array.push(Math.round(percentage_array[2] * training_max/5)*5);
    return weight_array;
}

class ProgramForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            oneRepMax: 0,
            trainingMax: 0,
            warmupWeights: [],
            weekOneWeights: [],
            weekTwoWeights: [],
            weekThreeWeights: [],
            isProgramCalculated: false,
            exercise: '',
            email: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    sendEmail() {
        return(
            alert("Program Sent!")
        );
    }

    handleChange(event) {
        if ([event.target.name] == 'trainingmax') {
            this.setState({value: event.target.value,
                       trainingMax: parseInt(event.target.value)});
        } else {
            this.setState({[event.target.name]: event.target.value });
        }

        event.preventDefault();

    }


    handleSubmit(event) {
        this.setState({
            warmupWeights: calculate_weights(warmup_percentages, this.state.trainingMax),
            weekOneWeights: calculate_weights(week1_percentages, this.state.trainingMax),
            weekTwoWeights: calculate_weights(week2_percentages, this.state.trainingMax),
            weekThreeWeights: calculate_weights(week3_percentages, this.state.trainingMax),
            isProgramCalculated: true
        });
        event.preventDefault();
        this.sendEmail();
    }

    emailProgram(){
        return(
            alert("button is clicked")
        );

    }

    render() {
        return(
            <div className="ProgramCalculator">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Please Enter Exercise Name:  
                    <input 
                        type="text" 
                        name="exercise"
                        //value={this.state.value} 
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    Please Enter Training Max:  
                    <input 
                        type="text" 
                        name="trainingmax"
                        value={this.state.value} 
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    Please Enter Email:  
                    <input 
                        type="text" 
                        name="email"
                        //value={this.state.value} 
                        onChange={this.handleChange} 
                    />
                </label>
                <input type ="submit" value="Submit" />
                </form>
                { this.state.isProgramCalculated === true > 0 && (
                    <div className="Warmup Weights">
                        <p>Training Max for this cycle: {this.state.trainingMax}</p>
                        <p><b>Warmup Weights: </b></p>
                        <p>{this.state.warmupWeights[0]} * 5</p>
                        <p>{this.state.warmupWeights[1]} * 5</p>
                        <p>{this.state.warmupWeights[2]} * 3</p>
                        <p><b>Week 1 Weights: </b></p>
                        <p>{this.state.weekOneWeights[0]} * 5</p>
                        <p>{this.state.weekOneWeights[1]} * 5</p>
                        <p>{this.state.weekOneWeights[2]} * 5+</p>
                        <p>Training Max for this cycle: {this.state.trainingMax}</p>
                        <p><b>Week 2 Weights: </b></p>
                        <p>{this.state.weekTwoWeights[0]} * 3</p>
                        <p>{this.state.weekTwoWeights[1]} * 3</p>
                        <p>{this.state.weekTwoWeights[2]} * 3+</p>
                        <p><b>Week 3 Weights: </b></p>
                        <p>{this.state.weekThreeWeights[0]} * 5</p>
                        <p>{this.state.weekThreeWeights[1]} * 3</p>
                        <p>{this.state.weekThreeWeights[2]} * 1</p>
                    </div>
                )}
                </div>
        );
    }
}



ReactDOM.render(
    <ProgramForm />,
    document.getElementById('root')
);