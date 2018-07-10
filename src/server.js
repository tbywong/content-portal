const path = require('path');
const Express = require('express');

const app = new Express();
const port = process.env.PORT || 3000;

app.use(Express.static(path.join(__dirname, '../dist')));
app.use(Express.static(path.join(__dirname, './client/static/images')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './client/index.html'));
});

app.listen(port, () => {
  console.info('StackCommerce Content Portal server online on port: ', port)
});
