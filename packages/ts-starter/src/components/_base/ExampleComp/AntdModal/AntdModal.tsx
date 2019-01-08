/**
 * Example BlueprintJS Component with Typescript + styled-component wrapping
 */
import React from 'react';
import { styled, withStyleGuide, acceleration } from '@Styled';
import { Modal } from 'antd';
import 'antd/es/modal/style/index.css';
// TYPES
import { ModalFuncProps } from 'antd/es/modal/modal';

interface IModalProps extends ModalFuncProps, IDs {
  color?: string;
}

// need to destruct to pass only valid props to ant component
const pickAntProps = ({ color, ...rest }: IModalProps) => <Modal {...rest} />;

const AntModal = styled(pickAntProps)<IModalProps>`
  ${acceleration}
`;
AntModal.defaultProps = {};

export default withStyleGuide<IModalProps>(AntModal);
