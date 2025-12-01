import '@testing-library/jest-dom'
import * as api from "./slice";
import {render, screen} from '@testing-library/react'
import Day8b from "./Day8b";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

test("rtk query success", async () => {
  // polyfill global.fetch so fetchBaseQuery doesn't warn in tests
  global.fetch = jest.fn()
  // mock lazy hook to return [triggerFn, result]
  const trigger = jest.fn()
  jest.spyOn(api, "useLazyGetUserQuery").mockReturnValue([trigger, {
    data: [{ name: "Vicky" }],
    isLoading: false,
    isError: false
  }]);

  render(
    <Provider store={store}>
        <Day8b />
    </Provider>
  );
  expect(await screen.findByText(/vicky/i)).toBeInTheDocument();
  // the hook trigger is called on mount in useEffect
  expect(trigger).toHaveBeenCalled();
});
