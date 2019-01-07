/**
 * Example BlueprintJS Component with Typescript + styled-component wrapping
 */
import React from 'react';
import { styled, acceleration } from '@Styled';
import { Modal } from 'antd';
import 'antd/es/modal/style/index.css';
// TYPES
import { ModalFuncProps } from 'antd/es/modal/modal';

interface TModalProps extends ModalFuncProps, IDs {
  color?: string;
}

// need to destruct to pass only valid props to ant component
const pickAntProps = ({ color, ...rest }: TModalProps) => <Modal {...rest} />;

const AntModal = styled(pickAntProps)<TModalProps>`
  ${acceleration}
`;
AntModal.defaultProps = {};

export default (props: TModalProps) => <AntModal {...props} />;
