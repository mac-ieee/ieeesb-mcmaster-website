import { useAppDispatch, useAppSelector } from "./store";

export function useDispatch() {
    return useAppDispatch();
}

export function useUser() {
    return useAppSelector((state) => state.user);
}