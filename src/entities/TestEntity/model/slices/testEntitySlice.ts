import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestEntitySchema } from '../types/TestEntitySchema';

const initialState: TestEntitySchema = {
    
};

export const testEntitySlice = createSlice({
    name: 'testEntity',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: testEntityActions } = testEntitySlice;
export const { reducer: testEntityReducer } = testEntitySlice;
 