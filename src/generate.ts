/**
 * @file generate dist files
 * @author nighca <nighca@live.cn>
 */

import * as webpack from 'webpack'
import logger from './utils/logger'
import { logLifecycle } from './utils'
import { getConfig } from './webpack'

async function generate() {
  const config = await getConfig()

  return new Promise<void>((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err)
        return
      }
      if (stats && stats.hasErrors()) {
        reject(stats.toJson().errors)
        return
      }
      resolve()
    })
  })
}

export default logLifecycle('Generate', generate, logger)
