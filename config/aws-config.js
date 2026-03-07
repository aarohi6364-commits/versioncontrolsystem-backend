const AWS = require("aws-sdk");

const accessKey = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_KEY
const projectURL = process.env.SUPABASE_S3_PROJECT_URL
const region = process.env.AWS_REGION

const S3_BUCKET = process.env.AWS_BUCKET_NAME

const s3 = new AWS.S3({
  s3ForcePathStyle: true,
  region,
  endpoint: projectURL,
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  signatureVersion: "v4"
})


module.exports = {s3, S3_BUCKET};