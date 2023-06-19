## Development setup

Install required packages

```sh
$ npm install
```
Run only client react app locally in new terminal:

```sh
$ cd client
$ npm run start
```

```sh
Open http://localhost:3000/
```


## Challenges Faced:

During my work, I encountered a range of challenges:

1. **Understanding Packages and Libraries**: I was navigating through numerous packages and libraries that would be essential for my task. The process involved piecing together these varied elements in my head.

2. **Setting up an Express Server**: Initially, I set up an Express server and connected the GraphiQL interface to it.

3. **Realizing the Importance of Client-Side Operations**: Subsequently, I realized that all these operations needed to be executed on the client-side, so that the generated queries could be used to render components with models.

4. **Issues with process.env and Webpack**: process.env was not cooperating with webpack. This reminded me of `dotenv-webpack` that I decided to employ.

5. **Problem with Model Rendering**: I ran into difficulties while trying to render the models. As of now, this issue remains unresolved, and I'm figuring out how to do it in the same way as in the given example screenshot. This pertains particularly to the aspect of model rendering. I tried using the provided code in the test-case, but it led to a completely different way of representation. 

Going forward, I plan to delve deeper into this and work out a solution.

![image](https://github.com/nodenwwsfww/render-model-object/assets/54706661/7dacd1a8-e734-4f94-bb38-fa2a2221fd9a)
![image](https://github.com/nodenwwsfww/render-model-object/assets/54706661/c450dc80-7de8-47ca-a077-4a5e5f1e8839)
