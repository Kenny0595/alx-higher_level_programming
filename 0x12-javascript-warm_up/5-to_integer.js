#!/usr/bin/node

const myNumber = parseInt(process.argv[2], 10);

if (!myNumber) {
  console.log('Not a number');
} else {
  console.log('My number: ' + myNumber);
}
