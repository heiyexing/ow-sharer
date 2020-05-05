import {GET} from "./base.js";

export const getHeroList = () => GET('/hero')

export const getHeroDetail = (params) => GET(`/hero/${params.id}`)