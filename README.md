# mkdecisioncontactform
##Final Build Files  

**Functionality**
The Contact Us form app welcomes you with a login screen.  
* Create an Account, with an email and a password. You will be emailed a code. 
* Enter the code to finish creating an account and then sign in. 

###The Form has input fields for:
* First Name
* Last Name
* Company Name
* Phone Number 
* Email
* Message 

**The Form will show the required fields in red if left blank and will validate if the phone and email are not in proper format.**

**The app is being hosted in following the Amazon S3 bucket: http://amplify-mkcontactform-dev-93839-deployment-dev.s3-website-us-west-2.amazonaws.com 
I used amplify cli to help me deploy. One thing i must mention, is that i was not able to complete step 4 and 5 of on submit, the UI should call API Gateway to trigger a Lambda function. I did find a useful lambda function which would help me with the entire process because it included SES and the dynamoDb table integration. I did set them up on my aws account, but i wasn't able to implement it into my app. Will need to work on this area a bit more and learn more AWS** 
