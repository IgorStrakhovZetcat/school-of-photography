import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { ClientData, emptyClientData } from "../models/ClientData";
import { OperationCode } from "../models/OperationCode";
import { AUTH_ACTION, OPERATION_CODE_ACTION } from "./actions";




export const CLIENT_DATA_ITEM = "client-data"

export const clientDataReducer: Reducer<ClientData, PayloadAction<ClientData>> = 
(clientData = localStorage.getItem(CLIENT_DATA_ITEM) ? JSON.parse(localStorage.getItem(CLIENT_DATA_ITEM) as string) : emptyClientData, action): ClientData => {
    if (action.type === AUTH_ACTION) {
        localStorage.setItem(CLIENT_DATA_ITEM, JSON.stringify(action.payload))
        return action.payload;
    }
    return clientData;
}

export const operationCodeReducer: Reducer<OperationCode, PayloadAction<OperationCode>> = 
(operationCode = OperationCode.OK, action): OperationCode => {
    if (action.type === OPERATION_CODE_ACTION) {
        return action.payload;
    }
    return operationCode;
}