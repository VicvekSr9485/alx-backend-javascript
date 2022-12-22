import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName).then((userStatus) => ({
    status: 'fulfiled',
    value: userStatus,
  }));

  const fileData = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));
  return Promise.resolve([userData, fileData]);
}
