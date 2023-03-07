import { Sequelize } from 'sequelize-typescript';
import { models } from './models/index'
const URI = 'postgres://Nazar-Brunarskyi:nk7Gz8YUxqSQ@ep-flat-band-224857.eu-central-1.aws.neon.tech/neondb'

export const dbInit = () => {
  return new Sequelize(
    URI,
    {
      models,
      dialectOptions: {
        ssl: true,
      }
    }
  )
}