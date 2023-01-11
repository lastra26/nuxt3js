export default function
  () {
  if (process.server) {
    console.log('server based middleware');
  } else {
    console.log('cliente based middleware');

  }
}
