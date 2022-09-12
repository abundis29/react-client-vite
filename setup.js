/* eslint-disable unicorn/escape-case */
/* eslint-disable no-console */
const spawnSync = require('child_process').spawnSync;

console.log('info', '🚀  Starting > Setup...');
const command = 'npm i';
console.log('subtitle', `🚀 Running the following command: ${command}`);
const result = spawnSync(command, {stdio: 'inherit', shell: true});
console.log('subtitle', '🚀 Running the following command: npm run generate');
const generate = spawnSync('npm run generate', {stdio: 'inherit', shell: true});

if (result.status === 0 && generate.status === 0) {
  console.log('Success', '✅ > setup complete...');
  console.log('Success', '🔥🔥🔥 > now you can run npm start or npm run dev');
  process.exit('success');
} else {
  process.exit(result.status);
}
