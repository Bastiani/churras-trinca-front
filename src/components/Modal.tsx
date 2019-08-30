import React from 'react';
import Modal from 'react-modal';

interface IProps {
  children: React.ReactNode;
  showDialog: boolean;
  setShowDialog: (param: boolean) => void;
}

Modal.setAppElement('#root');

const ModalForm = ({ children, showDialog, setShowDialog }: IProps) => {
  return (
    <Modal
      isOpen={showDialog}
      // onAfterOpen={this.afterOpenModal}
      onRequestClose={() => setShowDialog(false)}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};

export default ModalForm;
