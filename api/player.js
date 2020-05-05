import {GET} from "./base.js";

export const getPlayerList = params => GET('/player', params);

export const getPlayerDetail = params => GET(`/player/${params.id}`, params);