import { createAction } from "@reduxjs/toolkit";

// Auth actions
export const setToken = createAction<string>("auth/setToken");
export const clearToken = createAction("auth/clearToken");

// User actions
export const setUser = createAction<string>("user/setUser");
export const clearUser = createAction("user/clearUser");

// Modal actions
interface ModalPayload {
  openAdd: boolean;
  openEdit: boolean;
  data: string;
}

export const setModal = createAction<ModalPayload>("modal/setModal");
export const clearModal = createAction("modal/clearModal");
