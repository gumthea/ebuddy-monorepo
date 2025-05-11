import { createReducer } from "@reduxjs/toolkit";
import {
  clearModal,
  clearToken,
  clearUser,
  setModal,
  setToken,
  setUser,
} from "./actions";

// Auth State
export interface AuthState {
  token: string | null;
}

const initialAuthState: AuthState = {
  token: null,
};

const authReducer = createReducer(initialAuthState, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(clearToken, (state) => {
      state.token = null;
    });
});

// User State
export interface UserState {
  name: string | null;
}

const initialUserState: UserState = {
  name: null,
};

const userReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.name = action.payload;
    })
    .addCase(clearUser, (state) => {
      state.name = null;
    });
});

// Modal State
export interface ModalState {
  modalAdd: boolean;
  modalEdit: boolean;
  data: string;
}

const initialModalState: ModalState = {
  modalAdd: false,
  modalEdit: false,
  data: "",
};

const modalReducer = createReducer(initialModalState, (builder) => {
  builder
    .addCase(setModal, (state, action) => {
      state.modalAdd = action.payload.openAdd;
      state.modalEdit = action.payload.openEdit;
      state.data = action.payload.data;
    })
    .addCase(clearModal, (state) => {
      state.modalAdd = false;
      state.modalEdit = false;
      state.data = "";
    });
});

// Combine and export reducers
const rootReducer = {
  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
};

export default rootReducer;
