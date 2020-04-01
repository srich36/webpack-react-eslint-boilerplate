import App from "./components/App";

describe("Main Component", () => {
  test("It exports something", () => {
    expect(App).toBeTruthy();
    expect(App).toBeFalsy();
  });
});
