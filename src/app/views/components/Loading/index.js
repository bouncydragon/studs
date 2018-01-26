import React from 'react';

const Loading = ( props ) => {
  return <div>Loading...</div>;
};

export default Loading;
//export default function Loading(props) {
// console.log('loading..');
// if (props.isLoading) {
//   if (props.timedOut) {
//     return <div>Loader timed out!</div>;
//   } else if (props.pastDelay) {
//     console.log('loading..');
//     return <div>Loading...</div>;
//   } else {
//     return null;
//   }
// } else if (props.error) {
//   return <div>Error! Component failed to load</div>;
// } else {
//   return null;
// }
// }
