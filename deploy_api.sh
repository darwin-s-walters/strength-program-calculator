# Deploy API

pushd ses-python

rm packaged.yaml

sam build
sam package --output-template packaged.yaml --s3-bucket darwin-sam-python
sam deploy --template-file packaged.yaml --region us-east-1 --stack-name darwin-test-python2 --capabilities CAPABILITY_IAM

rm packaged.yaml
