module.exports = ({env}) => ({
    upload: {
        provider: "aws-s3",
        providerOptions: {
            accessKeyId: process.env.AWSAccessKeyId,
            secretAccessKey: process.env.AWSSecretKey,
            region: 'eu-west-3',
            params: {
                Bucket: 'chezz-images'
            }
        }
    }
})