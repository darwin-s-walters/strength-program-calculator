# sample curl command

export TEST_URL="https://jwmt3d1om2.execute-api.us-east-1.amazonaws.com/Prod/hello"
export REQUEST_BODY={"training_max": "100", "movement_name": "Squat", "warmup_weights": ["40","50","60"],"week_1_weights": ["65","75","85"],"week_2_weights": ["70","80","90"],"week_3_weights": ["75","85","95"], "email_address": "simplestrengthcalculator@outlook.com"}

#curl -i -v -X POST -d $REQUEST_BODY $TEST_URL

curl -i -v -k --data '{"training_max": "100", "movement_name": "Squat", "warmup_weights": ["40","50","60"],"week_1_weights": ["65","75","85"],"week_2_weights": ["70","80","90"],"week_3_weights": ["75","85","95"], "email_address": "simplestrengthcalculator@outlook.com"}' https://jwmt3d1om2.execute-api.us-east-1.amazonaws.com/Prod/hello 

