const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const BUCKET_NAME = 'inventory-app-alper';
const OBJECT_KEY = 'products.json';

exports.handler = async () => {
  try {
    console.log(`Processing file ${OBJECT_KEY} in bucket ${BUCKET_NAME}...`);

    // Fetch current products.json from S3
    const data = await s3.getObject({ Bucket: BUCKET_NAME, Key: OBJECT_KEY }).promise();
    console.log('Successfully fetched products.json.');

    const products = JSON.parse(data.Body.toString());
    console.log('Original products.json content:', products);

    // Sync stock with newQuantity
    const updatedProducts = products.map(product => {
      const updatedProduct = {
        ...product,
        stock: product.newQuantity
      };
      console.log(`Updated product "${product.name}": Stock = ${updatedProduct.stock}`);
      return updatedProduct;
    });

    // Upload updated products.json back to S3
    await s3.putObject({
      Bucket: BUCKET_NAME,
      Key: OBJECT_KEY,
      Body: JSON.stringify(updatedProducts, null, 2), // Pretty-print JSON for easier debugging
      ContentType: 'application/json',
    }).promise();

    console.log('Stock successfully updated and products.json uploaded to S3.');
    return { statusCode: 200, body: JSON.stringify({ message: 'Stock successfully updated' }) };
  } catch (error) {
    console.error('Error while updating stock:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to update stock: ${error.message}` }),
    };
  }
};
