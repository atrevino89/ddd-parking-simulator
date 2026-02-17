import app from './app';
import config from './config/configs';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
