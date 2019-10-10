import json
import boto3
ses_client = boto3.client('ses', region_name="us-east-1")

ses_response = ses_client.send_email(
    Source='SOURCE_EMAIL',
    Destination={
        'ToAddresses': [
            "DESTINATION_EMAIL"
        ]
    },
    Message={
        'Body': {
            'Text': {
                'Charset': 'UTF-8',
                'Data': 'Hello from Python lambda!'
            }
        },
        'Subject': {
            'Charset': 'UTF-8',
            'Data': 'Python Lambda SES Test'
        }
    }
)

print(ses_response)
