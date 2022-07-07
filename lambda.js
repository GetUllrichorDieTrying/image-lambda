const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
   
   // reading from bucket, non-dynamic proof of life
//   let bucketName = 'image-lambda-lab';
//   let key = 'images.json'
   
//   let images = await s3.getObject({Bucket: bucketName, Key: key}).promise();
//   let stringifiedImages = images.Body.toString();
//   let myImages = JSON.parse(stringifiedImages);
//   console.log('Images:', stringifiedImages);
//   console.log('Images:', myImages);
  
  let bucketName = event.Records[0].s3.bucket.name;
  let key = event.Records[0].s3.object.key;
   
  let object = await s3.getObject({Bucket: bucketName, Key: key}).promise();
  let stringifiedObj = object.Body.toString();
  let myObj = JSON.parse(stringifiedObj);
  console.log('Images:', stringifiedObj);
  console.log('Images:', myObj);
   
   console.log(event)
   let { numberOne, numberTwo } = event.;
   let result = numberOne + numberTwo;
   
  console.log('Result:', result);
    // TODO implement
    const payload = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return payload;
};
