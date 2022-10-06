import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../componnents/forms/SignInForm";
import { serviceSupportedNetworks } from "../../config/networks-config";
import { authService } from "../../config/service-config";
import { ClientData } from "../../models/ClientData";
import LoginData from "../../models/LoginData";
import NetworkIcon from "../../models/NetworkIkon";
import { OperationCode } from "../../models/OperationCode";
import { authAction, setOperationCode } from "../../redux/actions";



const SignIn: React.FC = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch<any>();
    function getNetworkIcons(): NetworkIcon[] {
        const authProviders = authService.getSupportedAuthProviders();
        return serviceSupportedNetworks.filter(network => authProviders.includes(network.name))

    }
    return <SignInForm submitFn={async function (loginData: LoginData): Promise<boolean> {
        const clientData = await authService.login(loginData);
        if (!!clientData) {
            dispatch(authAction(clientData as ClientData))
            dispatch(setOperationCode(OperationCode.OK))
            navigate('/')
            return true;
        }
        return false;
    }  } networks={getNetworkIcons()} />
}

export default SignIn;



