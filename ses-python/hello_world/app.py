import json
import boto3
# import requests


def lambda_handler(event, context):
    ses_client = boto3.client('ses', region_name="us-east-1")

    print(event['body'])

    event_body=json.loads(event['body'])
    movement_name = event_body['movement_name']
    training_max = event_body['training_max']
    warmup_weights = event_body['warmup_weights']
    week_1_weights = event_body['week_1_weights']
    week_2_weights = event_body['week_2_weights']
    week_3_weights = event_body['week_3_weights']
    email_address = event_body['email_address']


    message = f"""
    Movement Name:  {movement_name}
    Training Max: {str(training_max)}

    Warmup Weights:
    {str(warmup_weights[0])} * 5
    {str(warmup_weights[1])} * 5
    {str(warmup_weights[2])} * 3

    Week 1 Weights
    {str(week_1_weights[0])} * 5
    {str(week_1_weights[1])} * 5
    {str(week_1_weights[2])} * 5+

    Week 2 Weights
    {str(week_2_weights[0])} * 3
    {str(week_2_weights[1])} * 3
    {str(week_2_weights[2])} * 3+

    Week 3 Weights
    {str(week_3_weights[0])} * 5
    {str(week_3_weights[1])} * 3
    {str(week_3_weights[2])} * 1+

    """
    ses_response = ses_client.send_email(
        Source='hack.squat@outlook.com',
        Destination={
            'ToAddresses': [
                email_address
            ]
        },
        Message={
            'Body': {
                'Text': {
                    'Charset': 'UTF-8',
                    'Data': message
                }
            },
            'Subject': {
                'Charset': 'UTF-8',
                'Data': 'Your upcoming Squat workout for November'
            }
        }
    )

    print(ses_response)

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello world",
            # "location": ip.text.replace("\n", "")
        }),
    }
