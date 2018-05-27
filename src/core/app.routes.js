export const API = {
    LOGIN: {
        path: 'sessions/admin'
    }
}

export const URL = {
    LOGIN: {
        path: 'login'
    },
    CLIENTS: {
        path: 'clients'
    },
    CLIENT_DETAIL: {
        path: ':clientId',
        parent: 'clients'
    },
    INVOICES: {
        path: 'invoices'
    },
    USERS: {
        path: 'users'
    },
    PAYABLES: {
        path: 'payables'
    },
    EXPORTS: {
        path: 'exports'
    },
    REPORTS: {
        path: 'reports'
    }
}