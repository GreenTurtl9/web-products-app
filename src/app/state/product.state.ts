export enum DataState {
    LOADING_STATE = 'LOADING_STATE',
    LOADED_STATE = 'LOADED_STATE',
    ERROR_STATE = 'ERROR_STATE'
}

export interface AppState<T> {
    dataState: DataState,
    data?: T,
    errorMessage?: string
}