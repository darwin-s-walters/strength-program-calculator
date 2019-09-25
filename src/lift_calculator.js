console.log(process.argv);

const warmup_percentages = [0.40, 0.50, 0.60];
const week1_percentages = [0.65, 0.75, 0.85];
const week2_percentages = [0.70, 0.80, 0.90];
const week3_percentages = [0.75, 0.85, 0.95];

function calculate_weights(percentage_array, training_max) {
    var weight_array = [];
    weight_array.push(percentage_array[0] * training_max);
    weight_array.push(percentage_array[1] * training_max);
    weight_array.push(percentage_array[2] * training_max);

    return weight_array;
}

var lift_name = process.argv[2];
var lift_weight = process.argv[3];
 
function calculate_weights(percentage_array, training_max) {
    var weight_array = [];
    weight_array.push(percentage_array[0] * training_max);
    weight_array.push(percentage_array[1] * training_max);
    weight_array.push(percentage_array[2] * training_max);

    return weight_array;
}
warmup_weights = calculate_weights(warmup_percentages, lift_weight);
week1_weights = calculate_weights(week1_percentages, lift_weight);
week2_weights = calculate_weights(week2_percentages, lift_weight);
week3_weights = calculate_weights(week3_percentages, lift_weight);

console.log(
"\n",
"Calculating 5/3/1 cycle for " + lift_name + "....\n\n",
"Warmup: \n",
warmup_weights[0] + " * 5 \n",
warmup_weights[1] + " * 5 \n",
warmup_weights[2] + " * 3 \n \n",
"Week 1: \n",
week1_weights[0] + " * 5 \n",
week1_weights[1] + " * 5 \n",
week1_weights[2] + " * 5 \n \n",
"Week 2: \n",
week2_weights[0] + " * 3 \n",
week2_weights[1] + " * 3 \n",
week2_weights[2] + " * 3 \n \n",
"Week 3: \n",
week3_weights[0] + " * 5 \n",
week3_weights[1] + " * 3 \n",
week3_weights[2] + " * 1 \n"
);

// TODO - make an API call to email results to an address
