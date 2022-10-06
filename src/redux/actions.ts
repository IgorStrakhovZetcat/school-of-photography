import { PayloadAction } from "@reduxjs/toolkit";
import { ClientData } from "../models/ClientData";
import { OperationCode } from "../models/OperationCode";



export const AUTH_ACTION = "auth";
export const OPERATION_CODE_ACTION = 'operation-code'

export function authAction(clientData: ClientData): PayloadAction<ClientData> {
    return {payload: clientData, type: AUTH_ACTION};
}
export function setOperationCode(operationCode: OperationCode): PayloadAction<OperationCode> {
    return {payload: operationCode, type: OPERATION_CODE_ACTION}
}