export const SELECT_USER = 'SELECT_USER';
export const START_PROCESS = 'START_PROCESS';
export const IN_PROGRESS = 'IN_PROGRESS';
export const SHOW_RESULT = 'SHOW_RESULT';
export const ERROR_PROCESS = 'ERROR_PROCESS';


/*
 * action creators
 */
export function errorProcess() {
  return { type: ERROR_PROCESS }
}

export function selectUser(userId) {
  return { type: SELECT_USER, userId }
}

export function startProcess(id) {
  return { type: START_PROCESS, id}
}

export function inProgress(processId) {
  return { type: IN_PROGRESS, processId }
}

export function showResult(data) {
  return { type: SHOW_RESULT, data }
}

