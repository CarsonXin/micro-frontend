import { registerMicroApps, start } from 'qiankun'
import AppRouters from './routes'


registerMicroApps(AppRouters)

console.log('let\'s begin', AppRouters)

start()