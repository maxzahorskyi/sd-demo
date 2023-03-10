import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { AppDispatch, RootState } from './storeConfig';

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
