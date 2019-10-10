#!/bin/bash -e

export AWS_DEFAULT_REGION="us-east-1"
export TIMESTAMP=$date

export STACK_NAME="test-site-bucket"
#aws cloudformation create-stack --stack-name static-site-$1 --template-body file://static-site.yml
pushd strength-program-calculator

# export SITE_BUCKET=<bucket name>

npm run build

#TODO replace hard-coded bucket name with output from stack

aws s3 cp --recursive build/ s3://dev-swoletech-strength-calculator-346495207537 --region $AWS_DEFAULT_REGION --metadata-directive REPLACE --cache-control max-age=0

popd 
