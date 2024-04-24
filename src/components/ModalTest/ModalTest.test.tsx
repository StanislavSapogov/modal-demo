import { act, render, waitFor, screen } from "@testing-library/react";
import { createRef } from "react";
import { ModalTest, ModalTestRef } from "./ModalTest";
import { click } from "@testing-library/user-event/dist/click";

describe("Modal test", () => {
  it("should hide with ref", async () => {
    const limitPopup = createRef<any>();
    render(<ModalTestRef ref={limitPopup} />);

    act(() => {
      limitPopup.current.open();
    });

    expect(
      document.querySelector('[data-test="sso-limit-popup-register-submit"]')
    ).not.toBeNull();

    act(() => {
      limitPopup.current.close();
    });

    await waitFor(() =>
      expect(
        document.querySelector('[data-test="sso-limit-popup-register-submit"]')
      ).toBeNull()
    );
  });

  it("should hide", async () => {
    render(<ModalTest />);

    act(() => {
      click(screen.getByTestId("open-button"));
    });

    expect(
      document.querySelector('[data-test="sso-limit-popup-register-submit"]')
    ).not.toBeNull();

    act(() => {
      click(screen.getByTestId("close-button"));
    });

    await waitFor(() =>
      expect(
        document.querySelector('[data-test="sso-limit-popup-register-submit"]')
      ).toBeNull()
    );
  });
});
