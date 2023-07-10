import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: "aldair",
  email: 'aldair@gmail.com',
  // isVerified: faker.datatype.boolean(),
  status: sample(['Activo', 'Inactivo']),
  role: sample([
    'usuario',
    'administrador'
  ]),
}));

export default users;
