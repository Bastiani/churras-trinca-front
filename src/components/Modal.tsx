import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

interface IProps extends ModalProps {
  children: React.ReactNode;
  showModal: boolean;
}

const ModalComponent = ({ children, showModal, ...props }: IProps) => {
  return (
    <div>
      <Modal visible={showModal} {...props}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
