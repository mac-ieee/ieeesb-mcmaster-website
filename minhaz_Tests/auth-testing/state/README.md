# The states folder

This is where you **store all your state and context definitions**.
In many applications, there will exist data which is passed down from an ancestor component to a descendant component going through many many levels between. To ensure that we do not keep passing the data as paramaters for each and every needed component, we create a context for it and have reducers help us perform data actions/mutations on the object.

**For example**, lets consider an authentication application. When we load the page, we need to ensure the user is authenticated, in which if it is loaded we would get an API token for the user and if not we would redirect the user to the login page. But even with the authentication performed, we may still require the user data throughout the applications for the following purposes: fetching data and using id token, finding friends of user, reading profile of user, etc. Many of these components are separate and would be kept in different functions or files but they all access the user information which would have been received only in the 'page' in which it is authorizing the request (allowed to proceed to application and not go to login).

We use redux's context API to help us not pass in the user data as an argument for every child component of the parent which requires the user data.

In order to do this we can do the following.

We can define a *user-slice.ts* file as follows:

```typescript
import { User } from "@/models/data/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: User = {
    id: "",
    name: "",
    email: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            return action.payload;
        },
        clearUser(state) {
            return initialState;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
```

We can define a *store.ts* file as follows:
```typescript
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./user-slice";

// Create a redux store with the resume reducer
export const store = configureStore({
    reducer: {
        // Add the user slice to the store
        // This will add the user slice to the store with the key "user"
        // You can access the user state with state.user
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

// Export the store and the hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

We can define a *hooks.ts* as follows
```typescript
import { useAppDispatch, useAppSelector } from "./store";

export function useDispatch() {
    return useAppDispatch();
}

export function useUser() {
    return useAppSelector((state) => state.user);
}
```

Then in our layout.tsx. We add in the redux provider.

```tsx
import ReduxProvider from '@/state/redux-provider.tsx'
// ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <ReduxProvider>
                {/* ... */}
                {children}
                {/* ... */}
            </ReduxProvider>

        </Providers>
      </body>
    </html>
  )
}

// ...
```

Now that this is all setup. All we need to do in our page is the following:

```tsx
// ...
import { useRouter } from "next/navigation"

function Component1({ children }: PropsWithChildren<{}>) {
    const user = useUser()
    
    return (<div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>
            {children}
        </div>
    </div>)
}

function Component2() {
    const user = useUser()
    const [profile, setProfile] = useState<Profile>()

    useEffect(() => {
        getProfile(user.id).then((profile) => setProfile(profile))
    }, [])

    return (<div>
        <div>Phone Number: {profile.phoneNumber}</div>
    </div>)

}

export default function Page() {
    const user = useUser()
    const router = useRouter()

    if (!user)
        router.push("/login")

    // ...
    return (
        <Component1>
            <Component2 />
        </Component1>
    )
}


```


## Summary
This folder is mostly for state and context definition