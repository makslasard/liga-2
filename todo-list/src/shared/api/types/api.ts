/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/tasks/{taskId}': {
    /** @description Get edit-task by taskId */
    get: {
      parameters: {
        path: {
          taskId: string
        }
      }
      responses: {
        /** @description task */
        200: {
          content: {
            'application/json': {
              /** @description edit-task name. */
              name?: string
              /** @description edit-task description. */
              info?: string
              /** @description task importance */
              isImportant?: boolean
              /** @description task completance */
              isCompleted?: boolean
              /** @description edit-task id. */
              id?: number
            }
          }
        }
      }
    }
    /** @description Delete edit-task */
    delete: {
      parameters: {
        path: {
          taskId: string
        }
      }
      responses: {
        /** @description Auto generated using Swagger Inspector */
        200: {
          content: {
            'application/json; charset=utf-8': string
          }
        }
      }
    }
    /** @description Update edit-task by taskId */
    patch: {
      parameters: {
        path: {
          taskId: string
        }
      }
      requestBody?: {
        content: {
          'application/json': {
            isImportant?: boolean
            name?: string
            info?: string
            isCompleted?: boolean
          }
        }
      }
      responses: {
        /** @description task */
        200: {
          content: {
            'application/json': {
              /** @description edit-task name. */
              name?: string
              /** @description edit-task description. */
              info?: string
              /** @description task importance */
              isImportant?: boolean
              /** @description task completance */
              isCompleted?: boolean
              /** @description edit-task id. */
              id?: number
            }
          }
        }
      }
    }
  }
  '/tasks': {
    /** @description Get all tasks */
    get: {
      parameters: {
        query?: {
          isImportant?: boolean
          name_like?: string
          isCompleted?: boolean
        }
      }
      responses: {
        /** @description task */
        200: {
          content: {
            'application/json': {
              /** @description edit-task name. */
              name?: string
              /** @description edit-task description. */
              info?: string
              /** @description task importance */
              isImportant?: boolean
              /** @description task completance */
              isCompleted?: boolean
              /** @description edit-task id. */
              id?: number
            }[]
          }
        }
      }
    }
    /** @description Create edit-task */
    post: {
      requestBody?: {
        content: {
          'application/json': {
            isImportant?: boolean
            name?: string
            info?: string
          }
        }
      }
      responses: {
        /** @description task */
        200: {
          content: {
            'application/json': {
              /** @description edit-task name. */
              name?: string
              /** @description edit-task description. */
              info?: string
              /** @description task importance */
              isImportant?: boolean
              /** @description task completance */
              isCompleted?: boolean
              /** @description edit-task id. */
              id?: number
            }
          }
        }
      }
    }
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: never
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export type operations = Record<string, never>
