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