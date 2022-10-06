import { ClientData } from "../models/ClientData";
import { OperationCode } from "../models/OperationCode";
import { combineReducers } from 'redux';
import { clientDataReducer, operationCodeReducer } from './reduser';
import { configureStore } from '@reduxjs/toolkit';



export type StateType = {
    clientData: ClientData,
    operationCode: OperationCode,
}

const reducer = combineReducers<StateType> ({
    clientData: clientDataReducer as any,
    operationCode: operationCodeReducer as any,
})

export const store = configureStore({reducer, middleware: (getMiddleware) => getMiddleware({
    serializableCheck: false
})})