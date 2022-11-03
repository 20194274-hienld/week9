export const state  = () => ({
    linkHref: '',
    language: '',
})


//  Caps locks
export const mutations = {
    SET_LINKHREF(state, linkHref) {
        state.linkHref = linkHref
    },
    SET_LANGUAGE(state, language) {
        state.language = language
    }
}

export const getters = {
    linkHref(state) {
        return state.linkHref
    },
    language(state) {
        return state.language
    },
    locale (state) { 
        return state.i18n.locale 
    },
}

export const actions = {
    setLinkHref({commit}, linkHref) {
        commit('SET_LINKHREF', linkHref)
    },
    setLanguage({commit}, language) {
        commit('SET_LANGUAGE', language)
    }
}
