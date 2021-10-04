/* eslint-disable @typescript-eslint/naming-convention */
export const API = {
    PREFIX: '/api/',
    LOGIN: 'login/',
    LOGOUT: 'logout/',
    USER_PROFILE: 'profile/',
    UPDATE_PASSWORD: 'update-password/',
    GET_ALL_USERS: 'get-all-users/',
    GET_USERS_BY_NEIGHBOURHOOD: 'get-users-list/',
    UPDATE_PROFILE_BY_NEIGHBOURHOOD_ADMIN: 'update-user-profile-by-neighbourhood-admin/',
    UPDATE_PROFILE_BY_SUPER_USER: 'update-user-profile-by-super-user/',
    CREATE_USER_BY_ADMIN: 'admin-panel/create-user/',
    DELETE_USER_BY_SUPER_USER: 'delete-user-by-super-user/',
    UPDATE_USER_EMAIL_BY_OWNER: 'update-user-email-by-owner',
    GET_ACTIONLOGS: 'admin-panel/v1/actionlogs/', // admin-panel/v1/actionlogs?user=1&action=update
    // options
    GET_GENERAL_OPTIONS: 'admin-panel/v1/general-options?',
    NEIGHBOURHOOD_LIST: 'admin-panel/v1/neighbourhoods',
    NEIGHBOURHOOD_DETAIL: 'admin-panel/v1/neighbourhoods/', // admin-panel/v1/neighbourhoods/${id}
    LANGUAGE_LIST: 'admin-panel/v1/languages',
    LANGUAGE_DETAIL: 'admin-panel/v1/languages/',
    FOCUS_LIST: 'admin-panel/v1/focuses',
    FOCUS_DETAIL: 'admin-panel/v1/focuses/',
    POPULATION_GROUP_LIST: 'admin-panel/v1/populationGroups',
    POPULATION_GROUP_DETAIL: 'admin-panel/v1/populationGroups/',
    // organizations
    ORGANIZATION_LIST: 'admin-panel/v1/organizations',
    ORGANIZATION_DETAIL: 'admin-panel/v1/organizations/',

    UPDATE_ORGANIZATION_LOGO: 'admin-panel/v1/organization-logo',
    ADD_ORGANIZATION_VIDEO_LINK: 'admin-panel/v1/organization-video-links',
    REMOVE_ORGANIZATION_VIDEO_LINK: 'admin-panel/v1/organization-video-links/',
    ADD_ORGANIZATION_IMAGE: 'admin-panel/v1/organization-images',
    REMOVE_ORGANIZATION_IMAGE: 'admin-panel/v1/organization-images/',
    // programs
    GET_PROGRAMS: 'v2/programs/',
    GET_PROGRAMS_LIST: 'v3/programs/',
    UPDATE_PROGRAM: 'v2/programs/',
    ADD_PROGRAM_VIDEO_LINK: 'admin-panel/v1/program-video-links',
    REMOVE_PROGRAM_VIDEO_LINK: 'admin-panel/v1/program-video-links/',
    ADD_PROGRAM_IMAGE: 'admin-panel/v1/program-images',
    REMOVE_PROGRAM_IMAGE: 'admin-panel/v1/program-images/',
};
