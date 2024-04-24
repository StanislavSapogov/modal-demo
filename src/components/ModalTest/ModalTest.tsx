import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "intergalactic/modal";
import Button from "intergalactic/button";

export const ModalTestRef = forwardRef((_, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  return (
    <Modal visible={visible} onClose={() => setVisible(false)}>
      <div data-test="sso-limit-popup-register-submit">
        Test div
        <button data-test="google-auth">Auth</button>
      </div>
    </Modal>
  );
});

export const ModalTest = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button data-testid="open-button" onClick={() => setVisible(true)}>
        Open
      </Button>
      <Button data-testid="close-button" onClick={() => setVisible(false)}>
        Close
      </Button>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div data-test="sso-limit-popup-register-submit">
          Test div
          <button data-test="google-auth">Auth</button>
        </div>
      </Modal>
    </>
  );
};
