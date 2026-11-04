
import { readdir } from 'fs/promises'

import { LOCATION_DIR } from './location'

/**
 * It reads the contents of a directory and returns an array of strings
 * containing the names of the MDX files in that directory.
 *
 * @param {string} path - Required directory path, e.g. `/blog`
 * @returns An array of MDX filenames.
 */
export const readDirectory = async (path: string): Promise<Array<string>> => {
  /**
   * 1. Read files inside the given directory.
   * 2. Return an empty array if the directory does not exist.
   * 3. Filter files to include only .md and .mdx extensions.
   * 4. Return the list of matching filenames.
   */
  const files = await readdir(`${LOCATION_DIR}/${path}`).catch(
    (error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') {
        return []
      }

      throw error
    }
  )

  return files.filter((p) => /\.mdx?$/.test(p))
}
