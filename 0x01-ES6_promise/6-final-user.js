import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName).catch((error) => error),
  ]).then((values) => {
    let status;
    const responses = [];
    values.forEach((value) => {
      status = value instanceof Error ? 'failed' : 'fulfilled';
      responses.push({
        status,
        value,
      });
    });

    console.log(responses);
    return responses;
  });
}