const path = require('path');
const Express = require('express');

const app = new Express();

app.use(Express.static(path.join(__dirname, '../dist')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
    console.info('Server listening on localhost:3000')
});
