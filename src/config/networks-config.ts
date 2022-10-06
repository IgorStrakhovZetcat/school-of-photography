import NetworkIcon from "../models/NetworkIkon";
import google from '../componnents/images/auth/google.png'
import facebook from '../componnents/images/auth/facebook.png'
import twitter from '../componnents/images/auth/twitter.png'


export const GOOGLE = "google";
export const TWITTER = "twitter";
export const FACEBOOK = "facebook";
export const serviceSupportedNetworks: NetworkIcon[] = [
    {name: GOOGLE, iconURL: google},
    {name: FACEBOOK, iconURL: facebook},
    {name: TWITTER, iconURL: twitter}
 ];
