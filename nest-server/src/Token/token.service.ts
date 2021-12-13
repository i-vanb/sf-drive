import {Injectable} from '@nestjs/common';
import {TokenPair, TokenPayload} from "./token.interface";
import {JwtService} from "@nestjs/jwt";
import {
    ACCESS_TOKEN_LIFE, ACCESS_TOKEN_SECRET, MILLISECONDS_IN_SECONDS,
    MINIMAL_SECONDS_LEFT,
    REFRESH_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET,
    TEMP_TOKEN_SECRET
} from "./token.config";


@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService) {}

    async createPair(payload: TokenPayload):Promise<TokenPair> {
        const accessToken = this.jwtService.sign(payload, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: REFRESH_TOKEN_LIFE,
            secret: REFRESH_TOKEN_SECRET});
        return {accessToken, refreshToken};
    }

    async createTemp(payload: TokenPayload):Promise<String> {
        return this.jwtService.sign(payload, {secret: TEMP_TOKEN_SECRET, expiresIn: 300})
    }

    decodeToken(token: string) {
        let tokenData;
        try {
            tokenData = this.jwtService.decode(token);
        } catch (e) {
            console.warn(e);
        }
        return tokenData;
    }

    isTokenValid(expireAt) {
        const currentTime = Math.round(Date.now() / MILLISECONDS_IN_SECONDS);
        const diff = expireAt - currentTime;
        return diff > MINIMAL_SECONDS_LEFT;
    }

    verifyToken(token, secret = ACCESS_TOKEN_SECRET) {
        return this.jwtService.verify(token, {secret});
    }
}



/*

const updateToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

    const response = await fetch('/auth/refresh', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "ContentType": "application/json"
        },
        body: JSON.stringify({refreshToken})
    })
    const data = await response.json();

    if(response.ok) {
        localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data.refreshToken);
        return data.accessToken;
    } else if(data.error) throw new Error(data.error);
}

const getAccessToken = async () => {
    let accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    const tokenData = decodeToken(accessToken);
    const isAccessTokenValid = isTokenValid(tokenData.exp);
    if(!isAccessTokenValid) return await updateToken();
    return accessToken;
}

export async function callApi(url, method, body) {
    const accessToken = getAccessToken();

    return fetch(url, {
        method,
        headers: {
            "Accept": "application/json",
            "ContentType": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
    })
}


*/
