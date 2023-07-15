import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  nombre: sample(["Bulto de papa", "Bulto de yuca","Bulto de maiz"]),
  descripcion: sample([
    'este es un bulto de papa', 
    'este es un bulto de yuca',
    'este es un bulto de maiz']),
  // isVerified: faker.datatype.boolean(),
  precio: "50.000",
  cantidad: 22,
}));

export default users;
