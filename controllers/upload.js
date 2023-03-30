const AWS = require('aws-sdk');
const uuid = require('uuid');
const asyncHandler = require("../middlewares/async");

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

exports.upload = (req, res) => {
    const key = `${req.user.id}/${uuid.v1()}.jpeg`;

    s3.getSignedUrl('putObject', {
        Bucket: 'my-blog-app-bucket',
        ContentType: 'Image/jpeg',
        Key: key
    }, (err, url) => res.send({ key, url }));
}