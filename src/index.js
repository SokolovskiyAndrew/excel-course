import './scss/index.scss';
import './module';

console.log('Working!');
async function start() {
  return await Promise.resolve('async working!');
}

start().then(console.log);
