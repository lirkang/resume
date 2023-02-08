/**
 * @Author likan
 * @Date 2023-02-08 16:01:49
 * @Filepath resume\src\store\config.ts
 */

import { defineStore } from 'pinia';

const useConfig = defineStore('config', {
  state: () => ({
    resumeAlign: <'center' | 'left' | 'right'>'left',
    displaySize: <'medium' | 'large' | 'small'>'medium',
  }),
});

export default useConfig;
