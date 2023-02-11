import { useSelector, useDispatch } from "react-redux";

// Types
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
