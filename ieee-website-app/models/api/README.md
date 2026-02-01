# The models/api folder

This is where you **store all your fetching logic and API calls**.

**For example**:
Assume we want to deal with some kind of user data as follows: **User**, **Profile**, **Address**, and **Friendship** (defined in '@/models/data/user.ts'). Also assume that we want to be able to fetch user data of different users, get the profiles of a particular user, and also get all the "friends" of a user.

We can define a *api.ts* file as shown below.
**Note**: what I'm showing below is merely a skeleton of what would be there in an actual application. You would obviously replace the functions and files with actual fetch requests.

```typescript
import { Profile, User } from "@/models/data/user";

export async function getUser(id: string): Promise<User> {
    // This is a mock function that simulates fetching a user from an API
    // In a real application, you would make an HTTP request to your backend API
    return {
        id,
        name: "John Doe",
        email: "john@doe.com"
    }
}

export async function getProfile({ id }: { id: string }): Promise<Profile> {
    // This is a mock function that simulates fetching a user profile from an API
    // In a real application, you would make an HTTP request to your backend API
    return {
        id,
        phoneNumber: "123-456-7890",
        addresses: [
            {
                line1: "123 Main St",
                line2: "Apt 1",
                zip: "12345",
                country: "USA",
                region: "NY",
                city: "New York"
            }
        ],
        socialHandles: [
            "https://twitter.com/username",
            "https://www.linkedin.com/in/username"
        ],
        profileIcon: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    }
}

async function getFriendIds({ id }: { id: string }): Promise<string[]> {
    // This is a mock function that simulates fetching a user's friend IDs from an API
    // In a real application, you would make an HTTP request to your backend API
    return [];
}

export async function getFriends({ id }: { id: string }): Promise<User[]> {
    const ids = await getFriendIds({ id });
    const users = await Promise.all(ids.map((id) => getUser(id)));
    return users;
}
```


## Summary
This folder is mostly for API definition