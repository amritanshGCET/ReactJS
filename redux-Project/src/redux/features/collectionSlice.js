import { createSlice } from "@reduxjs/toolkit";

export const COLLECTION_STORAGE_KEY = "collectionList";

const getStoredCollection = () => {
  if (typeof window === "undefined") return [];

  const storedCollection = window.localStorage.getItem(COLLECTION_STORAGE_KEY);
  if (!storedCollection) return [];

  try {
    const parsedCollection = JSON.parse(storedCollection);
    return Array.isArray(parsedCollection) ? parsedCollection : [];
  } catch (error) {
    console.error("Unable to read saved collection:", error);
    return [];
  }
};

const initialState = {
  collectionList: getStoredCollection(),
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection(state, action) {
      const alreadySaved = state.collectionList.some(
        (item) => item.collectionId === action.payload.collectionId
      );

      if (alreadySaved) return;

      state.collectionList.push(action.payload);
    },
  },
});

export const {setCollection} = collectionSlice.actions

export default collectionSlice.reducer