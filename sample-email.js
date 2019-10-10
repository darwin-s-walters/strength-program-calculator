var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'}); 


var params = { 
    Destination: {
        ToAddresses: ["DESTINATION_EMAIL"]
    },
    Message: {
        Body: {
            Text: {
                Charset: "UTF-8",
                Data: "5 more minutes of this and I'm going to get mad"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Ayooooo'
        }
    },
    Source: "SOURCE_EMAIL",
    ReplyToAddresses: []
};


var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
    function(data) {
      console.log(data);
      console.log("we made it.");
    }).catch(
      function(err) {
      console.error(err, err.stack);
      console.log("error!");
    });