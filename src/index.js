import AWS from 'aws-sdk';

function processForm() {
    // retrieves data from forms
    var totalSold = document.getElementById("salesTotal").value;
    var totalBilled = document.getElementById("billedTotal").value;
    var weightBilled = document.getElementById("weightBilled").value;

    // adds data to dynamoDB
    //alert(`Total Sold: ${totalSold}\nTotal Billed: ${totalBilled}\nWeight Billed: ${weightBilled}`);
    putInDataBase(totalSold, totalBilled, weightBilled);
}

const putInDataBase = (totalSold, totalBilled, weightBilled) => {

    var creds = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:716e44bc-2e9a-4ff9-afd9-a6ecdfb2d21a',
    });

    AWS.config.credentials = creds;
    AWS.config.update({region: "us-east-1"});

    var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    const date = new Date();
    const timestamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

    var params = {
        Item: {
            "idRelatorio": {
                S: timestamp
            },
            "totalSold": {
                S: totalSold.toString()
            },
            "totalBilled": {
                S: totalBilled.toString()
            },
            "weightBilled": {
                S: weightBilled.toString()
            },
            "createdAt": {
                S: timestamp
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "zdashboard"
    };

    dynamodb.putItem(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
}