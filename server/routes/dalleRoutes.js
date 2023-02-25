import express, { response } from "express";
import * as dotenv from "dotenv";
import {Configuration, OpenAIApi} from "openai";

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express router
const router = express.Router();

// Set up OpenAI API configuration with API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create a new instance of the OpenAIApi class using the configuration
const openai = new OpenAIApi(configuration);

// Define a route for handling GET requests to the root endpoint
router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!!');
});

// Define a route for handling POST requests to the root endpoint
router.route('/').post(async (req, res) => {
    try {
        // Extract the prompt from the request body
        const {prompt} = req.body;

        // Use the OpenAI API to create an image based on the prompt
        const aiResponse = await openai.createImage({
            prompt: `a stencil tattoo of ${prompt} on white background, centered`,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        // Extract the base64-encoded image data from the OpenAI API response
        const image = aiResponse.data.data[0].b64_json;

        // Send the image data in the response body as a JSON object
        res.status(200).json({photo: image});
    } catch (err) {
        // Log any errors that occur during processing
        console.log(err);
        res.status(500).send(error?.response.data.error.message)
    }
});

// Export the router so it can be used by other parts of the application
export default router;