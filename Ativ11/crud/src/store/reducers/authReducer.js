const INITIAL_STATE = {
    authMSG: null,
    user:null
}

export default function (state = INITIAL_STATE, action){
    return{
        ...state,
        authMSG: 'Usuário Logado com Sucesso',
        user:'gabriellima-200@live.com'
    }
}