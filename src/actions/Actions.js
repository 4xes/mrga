export const SELECT_USER = 'SELECT_USER';
export const START_PROCESS = 'START_PROCESS';
export const IN_PROGRESS = 'IN_PROGRESS';
export const SHOW_RESULT = 'SHOW_RESULT';


/*
 * action creators
 */
export function selectUser(userId) {
  return { type: SELECT_USER, userId }
}

export function startProcess(url) {
  return { type: START_PROCESS, url }
}

export function inProgress(processId) {
  return { type: IN_PROGRESS, processId }
}

export function inShowResult(data) {
  return { type: SHOW_RESULT, data }
}

