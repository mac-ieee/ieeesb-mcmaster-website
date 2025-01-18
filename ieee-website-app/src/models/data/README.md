# The models/data folder

This is where you **store all your data structure definitions**.
For each set of related data structures, you should store them in the same file and **export** the data types that you want to use in other files.
**NOTE**: This is meant for data which will be used in application logic and is persisted. Any other kind of data can go to the types folder.

**For example**:
Assume we want to deal with some kind of user data as follows: **User**, **Profile**, **Address**, and **Friendship**.

We can define a *user.ts* file as follows:

```typescript
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
```

## Summary
This folder is mostly for data definition