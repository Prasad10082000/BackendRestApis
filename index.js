const app = require('./src/app');
const errorHandler = require('./src/Utils/errorHandler');

const PORT = process.env.PORT || 8000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
