/**
 * @file run unit test
 * @author nighca <nighca@live.cn>
 */

import logger from './utils/logger'
const logLifecycle = require('./utils').logLifecycle

async function test() {}

export default logLifecycle('Terve', test, logger)