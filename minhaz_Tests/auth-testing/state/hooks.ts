import { useAppDispatch, useAppSelector } from "./store";

export function useDispatch() {
  return useAppDispatch();
}

export function useUserState() {
  return useAppSelector((state) => state.user);
}
