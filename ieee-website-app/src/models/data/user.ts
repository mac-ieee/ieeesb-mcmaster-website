export interface User {
    id: string
    name: string
    email: string
}

export interface Address {
    line1: string
    line2: string
    zip: string
    country: string
    region: string
    city: string
}

export interface Profile {
    // This will most likely be the same as the user id since its a 1 to 1 relationship
    id: string
    phoneNumber: string
    addresses: Address[]
    socialHandles: string[]
    profileIcon: string
    // ... Other profile attributes 
}

export interface Friendship {
    id: string
    users: string[]
}