# BOOK WORM

This bookworm web app is built with MERN Stack(Mongo DB, Express.js, React.js, Node.js). This app offers the functionalities of register, login, profile, post, comment, like/unlike.

People can register their accounts with their email accounts and choose to delete their accounts or posts as they want. **The purpose of this web app is to let people who love reading to share and exchange their opinions and thoughts about their beloved books.**

Here is the [link](https://peaceful-wave-74931.herokuapp.com/) to the web app hosted on Heroku.

## Clone and test BookWorm in local server

After cloning the application source code to your local machine, navigate to the root directory.

```bash
cd bookworm
```

Here, I use Mongo DB server provided by Mongo DB Atlas, so if you want to use it, first replace the `username` and `password` with yours in the `config/default.json` file.

Afterward, type the following command

```bash
npm install
```

Then, navigate to `client` directory and run this command again

```bash
cd client
npm install
```

After installing those dependencies, navigate back to your root directory and start the local server

```bash
cd ..
npm run dev
```

Then, you should be able to access the website hosted on `http://localhost:3000`

## License

MIT
